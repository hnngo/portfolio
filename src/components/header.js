import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="header">
            <h1>Nhan Ngo</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/">About</Link></li>
                <li><Link to="/projects/">Projects</Link></li>

                <li><Link to="/contact/">Contact</Link></li>
            </ul>
        </div>
    );
};

///*<li><Link to="/projects/">My resume</Link></li>*/