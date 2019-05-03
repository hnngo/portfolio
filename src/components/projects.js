import React, { Component } from 'react';
import { ComponentTitle } from '../utilities/ComponentTitle';
import data from '../data.json';

export default class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: data.projects.projectInfo,
			devices: data.projects.devices,
			techLogos: data.projects.techlogo,
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
				<div
					className="p-pt-ic animated fadeInLeft"
					key={i}
				>
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
		if (this.state.boardSelect !== undefined) {
			let board = this.state.data[this.state.boardSelect];

			return (
				<div className="pd-container">
					<div className="row">
						<div className="col-md-6">
							<p className="pd-name">{board.name}</p>
							<p className="pd-des">{board.description}</p>
							<ul className="pd-detail">
							{
								board.details.map((item, i) => <li key={i}>{item}</li>)
							}
							</ul>
							<p className="pd-tech">Technologies/Libraries</p>
							{
								board.technologies.map((item, i) => <img key={i} className="pd-techLogo" src={this.state.techLogos[item]} alt="techLogo" />)
							}
						</div>
						<div className="col-md-6">
							<div className="pd-devices">
								<img
									src={board.devices}
									alt={"imac-content"}
								/>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return <div />;
		}
	}

	renderProjectCards() {
		return this.state.data.map((item, i) => {
			return (
				<div
					key={i}
					className={`col-md-4 col-sm-6 animated ${this.state.boardAnimation} fast`}
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
		<div>
			<div className="p-pt-container">
				{this.renderProjectThumbnails()}
				{this.renderChangeViewBtn()}
			</div>
			{this.renderProjectDetail()}
		</div>

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
