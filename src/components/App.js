import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import { HomePage } from './home-page';
import { SummaryInfo } from './summary';
import { AboutPage } from './about';
import { ProjectsPage } from './projects';
import { ContactPage } from './contact';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <HomePage />
                    <Switch>
                        <Route exact path="/" component={ SummaryInfo } />
                        <Route exact path="/about/" component={ AboutPage } />
                        <Route exact path="/projects/" component={ ProjectsPage } />
                        <Route exact path="/contact/" component={ ContactPage } />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
