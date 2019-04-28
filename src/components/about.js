import React from 'react';
import { ComponentTitle } from './ComponentTitle';

export const AboutPage = () => {
	return (
		<div className="a-container">
			<ComponentTitle
				title="About"
				icon="fas fa-info-circle"
			/>

		</div>
	);
};

/*
<div className="education-background">
				<h2>Education Background</h2>
				<div className="row">
					<div>
						<h4>Vietnam National University Ho Chi Minh City Ho Chi Minh City University of Technology (Aug 2012 - Apr 2017)</h4>
						<p>Bachelor of Electrical and Electronics Engineering (Honor Program)<br />
							Specialized in Electronics Telecommunication Engineering<br />
							GPA: 8.31/10.00</p>
					</div>
				</div>
				<div className="row">
					<div>
						<h4>Vietnam National University Ho Chi Minh City High School for the Gifted (Aug 2009 - Apr 2012)</h4>
						<p>Class of 2009<br />
							GPA: 8.2/10.00</p>
					</div>
				</div>
			</div>

			<div className="work-experience">
				<h2>Work Experience</h2>
				<div className="row">
					<div className="first-col">
						May 2018 &mdash; present
                    </div>
					<div className="col">
						<h3>School of Electrical Electronics Engineering - Nanyang Technology Univeristy, Singapore</h3>
						<h4>Research Engineer</h4>
						<p>The former issue is known as the network controllability problem; and the latter one the minimum cost control problem</p>
					</div>
				</div>
				<div className="underline"></div>
				<div className="row">
					<div className="first-col">
						May 2017 &mdash; Sep 2017
                    </div>
					<div className="col">
						<h3>Fiot Co. LTD., Vietnam</h3>
						<h4>Embedded Firmware Development Engineer</h4>
						<p>Working with IoT Product Development using some wireless solutions such as Blue-
                            tooth, WiFi, Zigbee and custom RF</p>
					</div>
				</div>
				<div className="underline"></div>
				<div className="row">
					<div className="first-col">
						Jun 2016 &mdash; Sep 2016
                    </div>
					<div className="col">
						<h3>MobiFone Testing and Maintenance Center, Vietnam</h3>
						<h4>Research Engineer</h4>
						<p>Implemented in LTE Accessibility Optimization and measured LTE Accessibility per-
                            formance</p>
					</div>
				</div>
			</div>
*/