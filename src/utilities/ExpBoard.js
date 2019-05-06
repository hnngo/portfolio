import React, { Component } from 'react';

export default class ExpBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ebHeight: undefined,
      imgToggle: false
    }
  }

  componentDidMount() {
    let qEbHeight = document.querySelector('#ebCon' + this.props.keyBoard);

    if (qEbHeight) {
      this.setState({ ebHeight: qEbHeight.getBoundingClientRect().height })
    }
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
        id={"ebCon" + this.props.keyBoard}
        className="eb-container"
        style={{
          transform: `scale(${this.props.scale}) translateX(${this.props.transX}px)`,
          opacity: this.props.opacity,
          zIndex: this.props.zIndex,
        }}
      >
        <div className="eb-title">
          {
            this.props.compLogo ?
              <img
                src={this.props.compLogo}
                alt="company-logo"
                onLoad={() => this.setState({ imgToggle: !this.state.imgToggle })}
              /> : <div />
          }
          <p className="eb-company">{this.props.employer}</p>
          <p className="eb-designation">{this.props.designation}</p>
        </div>
        <div
          className="eb-content"
          style={{
            height: this.state.ebHeight ? this.state.ebHeight - 125 : ""
          }}
        >
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
