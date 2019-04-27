import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import '../style/css/app.css';
import '../style/css/grid.css';
import '../style/css/normalize.css';
import '../style/css/queriess.css';

import Header from './header';
import { SummaryInfo } from './summary';
import { AboutPage } from './about';
import { ProjectsPage } from './projects';
import { ContactPage } from './contact';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<Header />
					<Switch>
						<Route exact path="/" component={SummaryInfo} />
						<Route exact path="/about" component={AboutPage} />
						<Route exact path="/projects" component={ProjectsPage} />
						<Route exact path="/contact" component={ContactPage} />
					</Switch>
				</div>
			</HashRouter>
		);
	}
}

export default App;

// TODO - add a reward, skills page / using progress bar in bootstrap
