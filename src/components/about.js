import React, { Component } from 'react';
import { ComponentTitle } from './ComponentTitle';
import FallingLeaf from './FallingLeaf';

export default class AboutPage extends Component {
	render() {
		return (
			<div className="a-container">
				<div className="container">
					<ComponentTitle
						title="About"
						icon="fas fa-info-circle"
					/>
					<div className="row">
						<div className="col-sm-6 a-personal-i">
							<img
								src={require("../style/img/profile-photo.jpg")}
								alt={"Profile"}
							// style={{ width: "100px"}}
							/>
						</div>
						<div className="col-sm-6 a-personal-text">
							<h2>Hello,</h2>
							<p>As a web developer, I am always curious and passionate about web development technologies. Eventhough I did not pursuit a degree in Computer Science, I've trained myself to be a so-called front-end developer.<br /><br />
								<span>Let's make something special.</span>
							</p>
							<p className="a-focus">Current Focus:<span>&nbsp;React / Redux</span></p>
						</div>
					</div>
				</div>
				<FallingLeaf
					leafId="leaf1"
					srcImg={require("../style/img/leaf-border.png")}
					containerClass=".a-container"
					initOffset={340}
					delay={1000}
				/>
				<FallingLeaf
					leafId="leaf2"
					srcImg={require("../style/img/leaf-solid.png")}
					containerClass=".a-container"
					initOffset={80}
					delay={3000}
					optionSpeed={22}
				/>
				<FallingLeaf
					leafId="leaf3"
					srcImg={require("../style/img/leaf-border.png")}
					containerClass=".a-container"
					initOffset={150}
					delay={6000}
				/>
				<FallingLeaf
					leafId="leaf4"
					srcImg={require("../style/img/leaf-solid.png")}
					containerClass=".a-container"
					initOffset={250}
					delay={8000}
					optionSpeed={18}
				/>
				<FallingLeaf
					leafId="leaf5"
					srcImg={require("../style/img/leaf-border.png")}
					containerClass=".a-container"
					initOffset={80}
					delay={10000}
				/>
			</div>
		);
	}
};
