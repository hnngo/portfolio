import React, { Component } from "react";
import IntroductionTitle from "./components/IntroductionTitle";

export default class IntroductionSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showHeaderTitle: false,
      showName: false,
      showDescript: false,
      showBtn: false,
      showLight: false
    };
  }

  componentDidMount() {
    // Set interval for typing action here
    setTimeout(
      () =>
        this.setState(
          {
            showHeaderTitle: true
          },
          () => {
            setTimeout(
              () =>
                this.setState(
                  {
                    showName: true
                  },
                  () => {
                    setTimeout(
                      () =>
                        this.setState(
                          {
                            showDescript: true
                          },
                          () => {
                            setTimeout(
                              () =>
                                this.setState(
                                  {
                                    showBtn: true
                                  },
                                  () => {
                                    setTimeout(
                                      () =>
                                        this.setState({
                                          showLight: true
                                        }),
                                      1000
                                    );
                                  }
                                ),
                              1000
                            );
                          }
                        ),
                      800
                    );
                  }
                ),
              1000
            );
          }
        ),
      1000
    );
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

  renderBtn() {
    if (this.state.showBtn) {
      return (
        <div className="h-btn">
          <div
            className="h-about animated tada"
            onClick={() => this.handleClickBtn("a")}
          >
            About me
          </div>
          <div
            className="h-portfolio animated tada"
            onClick={() => this.handleClickBtn("p")}
          >
            Portfolio
          </div>
        </div>
      );
    } else {
      return <div />;
    }
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
      <div className="h-container">
        <div className="container">
          <div className="h-header">
            <IntroductionTitle
              showDescript={this.state.showDescript}
              showHeaderTitle={this.state.showHeaderTitle}
              showName={this.state.showName}
            />
            {this.renderBtn()}
          </div>
        </div>
        {/* <div className="d-none d-md-block">
          {this.renderLight()}
        </div> */}
      </div>
    );
  }
}
