import React, { Component } from 'react';
import { ComponentTitle } from '../utilities/ComponentTitle';

export default class Contact extends Component {
	renderContent() {
		return (
			<div className="container">
				{/* <ComponentTitle
					title="Contact"
					icon="fas fa-at"
					optionalColor="rgb(236, 236, 236)"
				/> */}
				<div className="c-btn-back">
					<i className="fas fa-chevron-up" />
				</div>
				<div className="c-t-contact">
					<p></p>
				</div>
				{/* <h2>Contact Detail</h2>
				<ul>
					<li><i className="fas fa-mobile-alt"></i>0123456789</li>
					<li><i className="fas fa-envelope"></i>ngohuynhnhan@gmail.com</li>
					<li><i className="fab fa-facebook"></i>/huynhnhan</li>
				</ul> */}
			</div>
		);
	}

	render() {
		return (
			<div className="c-container">
				{
					this.props.show ? this.renderContent() : <div />
				}
			</div>
		);
	}
};