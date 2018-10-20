/* When using Webpack you need to require images in order for Webpack to process them */

import React from 'react';

export const SummaryInfo = () => {
    return (
        <div className="summary">
            <div className="row">
                <div className="col span-1-of-3 summary-photo">
                    <img src={require("../style/img/profile-photo.jpg")} alt={"Profile Photo"}/>
                    <h4>BS in Electrical and Electronics Engineering</h4>
                    <p>Research Engineer &amp; Front-end Developer</p>
                </div>
                <div className="col span-2-of-3 summary-brief">
                    <h2>Hello,</h2>
                    <p>A skilled, knowledgeable and qualified student with solid academic background in
                        electrical and electronics engineering who has strong knowledge in Telecommunication
                        Engineering programing. <br/>Dedicated professional with expertise in Network Analysis,
                        Image Processing, Antenna Design, and Digital Signal Processing. Possesses excellent
                        time management and organization skills.</p>
                </div>
            </div>
        </div>
    );
};

