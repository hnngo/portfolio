import React, { Component } from 'react';

export default class Contact extends Component {
	renderContent() {
		return (
			<div className="container animated fadeIn slow">
				<div
					className="c-btn-back"
					onClick={() => window.scroll({
						top: 0,
						behavior: 'smooth'
					})}
				>
					<i className="fas fa-chevron-up" />
				</div>
				<div className="c-c-i">
					<a
						href="https://github.com/hnngo"
						target="_blank"
						rel="noopener noreferrer"
					><i className="fab fa-github" /></a>
					<a
						href="https://www.linkedin.com/in/ngohuynhnhan/"
						target="_blank"
						rel="noopener noreferrer"
					><i className="fab fa-linkedin-in" /></a>
					<a
						href="mailto:ngohuynhnhan@gmail.com"
					><i className="fas fa-envelope-open-text" /></a>

				</div>
				<div className="c-logo">
					<div className="nav-header">
						<h6>N</h6>
						<h6 className="nav-h">h</h6>
					</div>
				</div>
				<p className="c-update">Last update 06 May 2019</p>
			</div>
		);
	}

	render() {
		return (
			<div className="c-container">
				{this.renderContent()}
			</div>
		);
	}
};
