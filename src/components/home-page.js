import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div className="index">
            <div className="header">
                <h1>Nà Ní <strong>!N'han</strong> Ngo</h1>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about/">About</Link>
                    <Link to="/projects/">Projects</Link>
                    <Link to="/projects/">My resume</Link>
                    <Link to="/contact/">Contact</Link>
                </ul>
            </div>
        </div>
    );
};