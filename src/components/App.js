import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
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
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" render={() => {return <Redirect to="/portfolio"/>;}}/>

                        <Route exact path="/portfolio/" component={ SummaryInfo } />
                        <Route exact path="/portfolio/about/" component={ AboutPage } />
                        <Route exact path="/portfolio/projects/" component={ ProjectsPage } />
                        <Route exact path="/portfolio/contact/" component={ ContactPage } />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

// TODO - add a reward, skills page
