import React, { Component } from 'react';
import { ComponentTitle } from '../utilities/ComponentTitle';

export default class Projects extends Component {
	renderContent() {
		if (this.props.show) {
			return (
				<div className="container">
					<ComponentTitle
						title="Projects"
						icon="fab fa-stumbleupon-circle"
					/>
				</div>
			);
		} else {
			return <div />
		}
	}
	render() {
		return (
			<div className="p-container">
				{this.renderContent()}
			</div>
		);
	}
};

/*
<div className="projects">
					<div className="row">
						<div className="col span-1-of-3">
							<div className="row">
								<div className="col span-1-of-2">
									<img src={require("../style/img/project-1-a.jpg")} alt="project-1" />
								</div>
								<div className="col span-1-of-2">
									<img src={require("../style/img/project-1-b.JPG")} alt="project-2" />
								</div>
							</div>
							<div className="row">
								<div className="col span-1-of-2">
									<img src={require("../style/img/project-1-c.jpg")} alt="project-3" />
								</div>
								<div className="col span-1-of-2">
									<img src={require("../style/img/project-1-d.JPG")} alt="project-4" />
								</div>
							</div>
						</div>
						<div className="col span-2-of-3">
							<h2>Smart Water Analysis and Monitoring System</h2>
							<h4>Final Year Thesis Project</h4>

							<p>Developed a smart device to collect some standard index of water such as pH,
														ORP, Temperature, Turbidity, EC, DO, water flow, etc.</p>
							<p>Used TelosB module to establish a network of 5 nodes in a virtual map of
									random 5 locations within 50m, and collecting water quality tests of each node
														every 2 weeks to analyze.</p>
							<p>Made it possible for extending the project by mapping with a GPS system for
														remotely testing.</p>
						</div>
					</div>
				</div>
*/