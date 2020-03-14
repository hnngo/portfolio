import React, { Component } from "react";
import IntroductionTitle from "./components/IntroductionTitle";
import IntroductionButton from "./components/IntroductionButton";

import styles from "./style.module.scss";

const TIME_OUT_FOR_TITLE = 1000;
const TIME_OUT_FOR_NAME = 2000;
const TIME_OUT_FOR_DESCRIPTION = 3000;
const TIME_OUT_FOR_BUTTON = 4000;
const TIME_OUT_FOR_LIGHT = 5000;

export default class IntroductionSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showHeaderTitle: false,
      showName: false,
      showDescription: false,
      showButton: false,
      showLight: false
    };
  }

  componentDidMount() {
    // Interval action for each component
    setTimeout(
      () => this.setState({ showHeaderTitle: true }),
      TIME_OUT_FOR_TITLE
    );
    setTimeout(() => this.setState({ showName: true }), TIME_OUT_FOR_NAME);
    setTimeout(
      () => this.setState({ showDescription: true }),
      TIME_OUT_FOR_DESCRIPTION
    );
    setTimeout(() => this.setState({ showButton: true }), TIME_OUT_FOR_BUTTON);
    setTimeout(() => this.setState({ showLight: true }), TIME_OUT_FOR_LIGHT);
  }

  handleClickBtn(type) {
    const y =
      document.querySelector(`.${type}-container`).getBoundingClientRect().top +
      window.scrollY;

    window.scroll({
      top: y,
      behavior: "smooth"
    });
  }

  renderLight() {
    if (this.state.showLight) {
      return (
        <div className="h-light-container animated fadeIn">
          <i className="far fa-lightbulb" />
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <div className="container">
          <div className={styles.header}>
            <IntroductionTitle
              showDescription={this.state.showDescription}
              showHeaderTitle={this.state.showHeaderTitle}
              showName={this.state.showName}
            />
            <IntroductionButton
              show={this.state.showButton}
              onClickAbout={() => this.handleClickBtn("a")}
              onClickPortfolio={() => this.handleClickBtn("p")}
            />
          </div>
        </div>
        {/* <div className="d-none d-md-block">{this.renderLight()}</div> */}
      </div>
    );
  }
}
