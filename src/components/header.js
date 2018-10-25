import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class Header extends Component {
    componentDidMount() {
        return <Redirect push to="/portfolio"/>;
    }

    render() {
        return (
            <div className="header">
                <h1>Nhan Ngo</h1>
                <ul>
                    <li><Link to="/portfolio/">Home</Link></li>
                    <li><Link to="/portfolio/about/">About</Link></li>
                    <li><Link to="/portfolio/projects/">Projects</Link></li>

                    <li><Link to="/portfolio/contact/">Contact</Link></li>
                </ul>
            </div>
        );

    }
};

///*<li><Link to="/projects/">My resume</Link></li>*/