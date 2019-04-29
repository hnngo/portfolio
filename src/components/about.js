import React, { Component } from 'react';
import { ComponentTitle } from './ComponentTitle';
import FallingLeaf from './FallingLeaf';

export default class AboutPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			leafFallingInterval: undefined,
			leafPosition: -80,
			leafOffsetLeft: 80,
			leafRangeDir: 200,
			leafRotate: 20,
			leafRotateChange: -1,
		};
	}

	// componentDidMount() {
	// 	let leafFallingInterval = setInterval(() => {
	// 		const qLeaf = document.querySelector("#leafFall1");
	// 		const aContainer = document.querySelector(".a-container")

	// 		if (qLeaf) {
	// 			// Check if leaf touch the bottom
	// 			if (qLeaf.getBoundingClientRect().top >= aContainer.clientHeight - 120) {
	// 				// Reset new offset left
	// 				let newLeftOffset = Math.random() * aContainer.clientWidth;

	// 				console.log(newLeftOffset)
	// 				this.setState({
	// 					leafPosition: -60,
	// 					leafOffsetLeft: newLeftOffset
	// 				})
	// 			}
	// 		}

	// 		this.setState({
	// 			leafPosition: this.state.leafPosition + 2
	// 		});
	// 	}, 20);

	// 	// Set interval for rotate leaf
	// 	setInterval(() => {
	// 		// Set new rotate
	// 		let newRotate = this.state.leafRotate + this.state.leafRotateChange;
	// 		let newRotateChange = this.state.leafRotateChange;

	// 		if (newRotate === 21) {
	// 			newRotate = 19;
	// 			newRotateChange = -1;
	// 		} else if (newRotate === -21) {
	// 			newRotate = -19;
	// 			newRotateChange = 1;
	// 		}

	// 		this.setState({
	// 			leafRotate: newRotate,
	// 			leafRotateChange: newRotateChange
	// 		});
	// 	}, 80)

	// 	// Set interval for rotate leaf
	// 	setInterval(() => {
	// 		let newLeafOffset = this.state.leafOffsetLeft;
	// 		if (this.state.leafRotateChange > 0) {
	// 			newLeafOffset += 2;
	// 		} else {
	// 			newLeafOffset -= 2;
	// 		}

	// 		this.setState({
	// 			leafOffsetLeft: newLeafOffset,
	// 		});
	// 	}, 20)

	// 	this.setState({ leafFallingInterval })
	// }

	renderLeafFalling() {
		return (
			<div>
				<img
					id="leafFall1"
					src={require("../style/img/leaf-border.png")}
					alt={"leaf-falling"}
					className="a-leaf-border"
					style={{
						top: this.state.leafPosition + "px",
						left: this.state.leafOffsetLeft + "px",
						transform: `rotate(${this.state.leafRotate}deg)`
					}}
				/>
			</div>
		);
	}

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
				{/* {this.renderLeafFalling()} */}
				<FallingLeaf
					leafId="leaf1"
					srcImg={require("../style/img/leaf-border.png")}
					containerClass=".a-container"
					initOffset={80}
					delay={1000}
				/>
				<FallingLeaf
					leafId="leaf2"
					srcImg={require("../style/img/leaf-solid.png")}
					containerClass=".a-container"
					initOffset={340}
					delay={3000}
				/>
				<FallingLeaf
					leafId="leaf2"
					srcImg={require("../style/img/leaf-border.png")}
					containerClass=".a-container"
					initOffset={150}
					delay={6000}
				/>
				<FallingLeaf
					leafId="leaf2"
					srcImg={require("../style/img/leaf-solid.png")}
					containerClass=".a-container"
					initOffset={250}
					delay={8000}
				/>
			</div>
		);
	}
};

/*
<div className="education-background">
				<h2>Education Background</h2>
				<div className="row">
					<div>
						<h4>Vietnam National University Ho Chi Minh City Ho Chi Minh City University of Technology (Aug 2012 - Apr 2017)</h4>
						<p>Bachelor of Electrical and Electronics Engineering (Honor Program)<br />
							Specialized in Electronics Telecommunication Engineering<br />
							GPA: 8.31/10.00</p>
					</div>
				</div>
				<div className="row">
					<div>
						<h4>Vietnam National University Ho Chi Minh City High School for the Gifted (Aug 2009 - Apr 2012)</h4>
						<p>Class of 2009<br />
							GPA: 8.2/10.00</p>
					</div>
				</div>
			</div>

			<div className="work-experience">
				<h2>Work Experience</h2>
				<div className="row">
					<div className="first-col">
						May 2018 &mdash; present
                    </div>
					<div className="col">
						<h3>School of Electrical Electronics Engineering - Nanyang Technology Univeristy, Singapore</h3>
						<h4>Research Engineer</h4>
						<p>The former issue is known as the network controllability problem; and the latter one the minimum cost control problem</p>
					</div>
				</div>
				<div className="underline"></div>
				<div className="row">
					<div className="first-col">
						May 2017 &mdash; Sep 2017
                    </div>
					<div className="col">
						<h3>Fiot Co. LTD., Vietnam</h3>
						<h4>Embedded Firmware Development Engineer</h4>
						<p>Working with IoT Product Development using some wireless solutions such as Blue-
                            tooth, WiFi, Zigbee and custom RF</p>
					</div>
				</div>
				<div className="underline"></div>
				<div className="row">
					<div className="first-col">
						Jun 2016 &mdash; Sep 2016
                    </div>
					<div className="col">
						<h3>MobiFone Testing and Maintenance Center, Vietnam</h3>
						<h4>Research Engineer</h4>
						<p>Implemented in LTE Accessibility Optimization and measured LTE Accessibility per-
                            formance</p>
					</div>
				</div>
			</div>
*/