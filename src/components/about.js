import React, { Component } from 'react';
import { ComponentTitle } from '../utilities/ComponentTitle';
import FallingLeaf from '../utilities/FallingLeaf';
import data from '../data.json';

export default class AboutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgToggle: false
    };
	}
	
	renderContent() {
		if (this.props.show) {
			return (
				<div>
					<div className="container">
						<ComponentTitle
							title="About"
							icon="fas fa-info-circle"
						/>
						<div className="row">
							<div className="col-sm-6 a-personal-i animated fadeInLeft">
								<img
									src={data.about.profilePhoto}
									alt={"Profile"}
									onLoad={() => this.setState({ imgToggle: !this.state.imgToggle })}
								/>
							</div>
							<div className="col-sm-6 a-personal-text animated fadeInRight">
								<h2>Hello,</h2>
								<p>As a web developer, I am always curious and passionate about web development technologies. Eventhough I did not pursuit a degree in Computer Science, I've trained myself to be a so-called front-end developer.<br /><br />
									<span>I am looking for an opportunity to be a member of your company and let's make something special.</span>
								</p>
								<p className="a-focus">Current Focus:<span>&nbsp;React / Redux and other frameworks, libraries related to them and Javascript.</span></p>
								<div className="a-follow">
									<a
										href="https://github.com/hnngo"
										target="_blank"
										rel="noopener noreferrer"
									><i className="fab fa-github" /></a>
									<a
										href="https://www.linkedin.com/in/ngohuynhnhan/"
										target="_blank"
										rel="noopener noreferrer"
									><i className="fab fa-linkedin" /></a>
								</div>
							</div>
						</div>
					</div>
					<FallingLeaf
						leafId="leaf1"
						srcImg={data.about.leafBorder}
						containerClass=".a-container"
						initOffset={340}
						delay={1000}
					/>
					<FallingLeaf
						leafId="leaf2"
						srcImg={data.about.leafSolid}
						containerClass=".a-container"
						initOffset={80}
						delay={3000}
						optionSpeed={8}
					/>
					<FallingLeaf
						leafId="leaf3"
						srcImg={data.about.leafBorder}
						containerClass=".a-container"
						initOffset={150}
						delay={6000}
						optionSpeed={10}
					/>
					<FallingLeaf
						leafId="leaf4"
						srcImg={data.about.leafSolid}
						containerClass=".a-container"
						initOffset={250}
						delay={8000}
						optionSpeed={7}
					/>
					<FallingLeaf
						leafId="leaf5"
						srcImg={data.about.leafBorder}
						containerClass=".a-container"
						initOffset={80}
						delay={10000}
						optionSpeed={9}
					/>
				</div>
			);
		} else {
			return <div />;
		}
	}
	render() {
		return (
			<div className="a-container">
				{this.renderContent()}
			</div>
		);
	}
};

// Animation show
// Scroll effect
