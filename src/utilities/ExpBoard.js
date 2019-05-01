import React, { Component } from 'react';

export default class ExpBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reSizeEvent: undefined,
      scale: 1,
    }
  }

  componentDidMount() {
    const reSizeEvent = setInterval(() => {
      if (window.screen.availWidth > 576 && window.screen.height >= 700) {
        let newScale;
        if (window.screen.height >= 800) {
          newScale = 1
        } else {
          newScale = 1 - (800 - window.screen.height) * 0.002;
        }

        if (newScale !== this.state.scale) {
          this.setState({ scale: newScale })
        }
      }
    }, 500);

    this.setState({ reSizeEvent });
  }

  componentWillUnmount() {
    clearInterval(this.state.reSizeEvent);
  }

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
      <div
        className="eb-container"
        style={{
          transform: `scale(${this.state.scale})`
        }}
      >
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
        <div className="eb-footer">
          <p className="eb-location">{this.props.location}</p>
          <p className="eb-time">
            {this.props.timeFrom} - {this.props.timeTo}
          </p>
        </div>
      </div>
    );
  }
}
