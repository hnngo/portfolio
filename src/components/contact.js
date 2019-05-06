import React, { Component } from 'react';

export default class Contact extends Component {
	renderContent() {
		return (
			<div className="container">
				<div
					className="c-btn-back animated fadeIn slow"
					onClick={() => window.scroll({
						top: 0,
						behavior: 'smooth'
					})}
				>
					<i className="fas fa-chevron-up" />
				</div>

				<div className="c-c-i">
					<i className="fab fa-github" />
					<i className="fab fa-linkedin-in" />
					<i className="fas fa-envelope-open-text" />
				</div>
				<div className="c-logo">
					<div className="nav-header">
						<h6>N</h6>
						<h6 className="nav-h">h</h6>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="c-container">
				{
					this.props.show ? this.renderContent() : <div />
				}
			</div>
		);
	}
};