import React, { Component } from 'react';
import { ComponentTitle } from '../utilities/ComponentTitle';
import data from '../data.json'

export default class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: data.projects.projectInfo,
			imgToggle: false,
			boardView: true,
			boardSelect: undefined,
			boardAnimation: "slideInUp"
			
		}
	}

	handleloadImg() {
		// Handle if latency in loading img
		this.setState({
			imgToggle: !this.state.imgToggle
		});
	}

	handleClickBoard(index) {
		// Set selected project and change view mode
		this.setState({
			boardSelect: index,
			boardAnimation: "fadeOut"
		}, () => setTimeout(() => {
			this.setState({
				boardView: false
			})
		}, 800));
	}

	handleClickThumbnail(index) {
		this.setState({
			boardSelect: index
		});
	}

	renderChangeViewBtn() {
		return (
			<div
				className="p-pt-vc"
				onClick={() => {
					this.setState({ 
						boardSelect: undefined,
						boardAnimation: "slideInUp",
						boardView: true
					})
				}}
			>
				<i className="fas fa-arrow-left"/>
				<p>Back</p>
			</div>
		);
	}

	renderProjectThumbnails() {
		return this.state.data.map((item, i) => {
			let style = {
				filter: "brightness(50%)",
				opacity: 0.5
			};
			
			if (i === this.state.boardSelect) {
				style = {
					filter: "brightness(100%)",
					opacity: 1
				}
			}

			return (
				<div className="p-pt-ic animated fadeInLeft">
					<img
						src={item.bannerImg}
						onLoad={() => this.handleloadImg()}
						alt="projects-banner"
						style={style}
						onClick={() => this.handleClickThumbnail(i)}
					/>
				</div>
			);
		});
	}

	renderProjectDetail() {
		return (
			<div>

			</div>
		);
	}

	renderProjectCards() {
		return this.state.data.map((item, i) => {
			return (
				<div
					key={i}
					className={`col-md-4 col-sm-6 animated ${this.state.boardAnimation}`}
				>
					<div
						className="p-pc-container"
						onClick={() => this.handleClickBoard(i)}
					>
						<img
							src={item.bannerImg}
							onLoad={() => this.handleloadImg()}
							alt="projects-banner"
						/>
						<p className="p-pc-name">{item.name}</p>
						<p className="p-pc-des">{item.description}</p>
						<div className="p-pc-icon">
							<a
								href={item.website}
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fas fa-external-link-alt" />
							</a>
							<a
								href={item.githubLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github" />
							</a>
						</div>
					</div>
				</div>
			)
		});
	}

	renderContent() {
		let viewContent = this.state.boardView ?
		<div className="row">
			{this.renderProjectCards()}
		</div> :
		<div className="p-pt-container">
			{this.renderProjectThumbnails()}
			{this.renderProjectDetail()}
			{this.renderChangeViewBtn()}
		</div>;

		return (
			<div className="container">
				<ComponentTitle
					title="Projects"
					icon="fab fa-stumbleupon-circle"
				/>
				{viewContent}
			</div>
		);
	}

	
	render() {
		return (
			<div className="p-container">
				{
					this.props.show ? this.renderContent() : <div />
				}
			</div>
		);
	}
};
