import React, { Component } from 'react';

export default class ExpBoard extends Component {
  renderJobDescription() {
    if (!this.props.jobDescription) {
      return <div />;
    }

    return this.props.jobDescription.map((item, i) => {
      return (
        <li key={i}>{item}.</li>
      );
    });
  }

  render() {
    return (
      <div className="eb-container">
        <div className="eb-title">
          {
            this.props.compLogo ?
              <img
                src={this.props.compLogo}
                alt="company-logo"
              /> : <div />
          }
          <p className="eb-company">{this.props.employer}</p>
          <p className="eb-designation">{this.props.designation}</p>
        </div>
        <div className="eb-content">
          <p className="eb-head-sentence">
            {this.props.headSentence}
          </p>
          {
            this.props.jDHeader ?
              <p className="eb-jdHeader">
                {this.props.jDHeader} :
                </p> : <div />
          }
          <ul>
            {this.renderJobDescription()}
          </ul>
        </div>
        <p className="eb-time">
          {this.props.timeFrom} - {this.props.timeTo}
        </p>
      </div>
    );
  }
}
