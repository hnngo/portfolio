import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '../style/css/app.css';
import '../style/css/queriess.css';
import NavBar from './NavBar';
import Homepage from './Homepage';
import AboutPage from './About';
import Projects from './Projects';
import { ContactPage } from './contact';
import Experience from './Experience';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showAbout: false,
			showExperience: false,
			showProjects: true,
		}
	}

	componentDidMount() {
		// Scroll to top
		// window.scroll({
		// 	top: 0,
		// 	behavior: 'smooth'
		// });

		// Interval checking for showing page
		setInterval(() => {
			// Homepage
			let yAbout = document.querySelector(".a-container").getBoundingClientRect().top + window.scrollY * 1 / 2;

			if (window.scrollY >= yAbout && !this.state.showAbout) {
				this.setState({ showAbout: true })
			}

			// Experience
			let yExperience = document.querySelector(".e-container").getBoundingClientRect().top + window.scrollY * 4 / 5;

			if (window.scrollY >= yExperience && !this.state.showExperience) {
				setTimeout(() => this.setState({ showExperience: true }), 400);
				
			}

		}, 100)
	}

	render() {
		return (
			<HashRouter>
				<div className="pb-5">
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
					<Switch>
						{/*<Route exact path="/about" component={AboutPage} />
						<Route exact path="/projects" component={ProjectsPage} />
						<Route exact path="/contact" component={ContactPage} /> */}
					</Switch>
				</div>
			</HashRouter>
		);
	}
}

export default App;

// TODO - add a reward, skills page / using progress bar in bootstrap
