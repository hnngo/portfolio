import React, { Component } from 'react';
import NavBar from './NavBar';
import Homepage from './Homepage';
import AboutPage from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import '../style/css/style.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scrollInterval: undefined,
			showAbout: false,
			showExperience: false,
			showProjects: false,
			showContact: false,
		}
	}

	componentDidMount() {
		// Scroll to top
		window.scroll({
			top: 0,
			behavior: 'smooth'
		});

		// Interval checking for showing page
		let scrollInterval = setInterval(() => {
			const {
				showAbout,
				showExperience,
				showProjects,
				showContact
			} = this.state;

			// If all true, then stop the interval
			if (showAbout && showExperience && showProjects) {
				clearInterval(this.state.scrollInterval);
				return;
			}

			// Homepage
			let yAbout = document.querySelector(".a-container").getBoundingClientRect().top + window.scrollY * 1 / 2;

			if (window.scrollY >= yAbout && !showAbout) {
				this.setState({ showAbout: true })
			}

			// Experience
			let yExperience = document.querySelector(".e-container").getBoundingClientRect().top + window.scrollY * 4 / 5;

			if (window.scrollY >= yExperience && !showExperience) {
				setTimeout(() => this.setState({ showExperience: true }), 400);
			}

			// Projects
			let yProjects = document.querySelector(".p-container").getBoundingClientRect().top + window.scrollY * 4 / 5;

			if (window.scrollY >= yProjects && !showProjects) {
				setTimeout(() => this.setState({ showProjects: true }), 400);
			}

			// Contact
			let yContact = document.querySelector(".c-container").getBoundingClientRect().top;

			if (window.scrollY >= yContact && !showContact) {
				setTimeout(() => this.setState({ showContact: true }), 400);
			}
		}, 100);

		this.setState({ scrollInterval });
	}

	componentWillUnmount() {
		clearInterval(this.state.scrollInterval);
	}

	render() {
		return (
			<div>
				<NavBar />
				<Homepage />
				<AboutPage show={this.state.showAbout} />
				<div className="e-container">
					{
						this.state.showExperience ?
							<Experience /> : <div />
					}
				</div>
				<Projects show={this.state.showProjects} />
				<Contact show={this.state.showContact} />
			</div>
		);
	}
}

export default App;

// Add resume
