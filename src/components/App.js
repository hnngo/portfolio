import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '../style/css/app.css';
import '../style/css/queriess.css';
import NavBar from './NavBar';
import Homepage from './Homepage';
import AboutPage from './About';
import { ProjectsPage } from './projects';
import { ContactPage } from './contact';
import Experience from './Experience';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<div className="pb-5">
					<NavBar />
					<Homepage />
					<AboutPage />
					<Experience />
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
