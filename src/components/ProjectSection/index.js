import React, { Component } from "react";

// Components
import SectionTitle from "../../shared/SectionTitle";
import ProjectCards from "./components/ProjectCards";
import ProjectDetail from "./components/ProjectDetail";

// Utils and constants
import { SECTIONS_ID } from "../../shared/constants";

import styles from "./style.module.scss";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardView: true,
      boardSelect: undefined,
      boardAnimation: "fadeIn",
      thumbnailsAnimation: "slideInLeft",
      slideLeftAnimation: "slideInLeft",
      slideRightAnimation: "slideInRight"
    };
  }

  handleClickBoard(index) {
    // Set selected project and change view mode
    this.setState(
      {
        boardSelect: index,
        boardAnimation: "fadeOut"
      },
      () =>
        setTimeout(() => {
          this.setState({
            boardView: false,
            slideLeftAnimation: "slideInLeft",
            thumbnailsAnimation: "slideInLeft",
            slideRightAnimation: "slideInRight"
          });
        }, 800)
    );
  }

  handleClickThumbnail(index) {
    // Check if click a already selected board
    if (this.state.boardSelect === index) {
      return;
    }

    // Animation fadeOut then fadeIn for new selected board
    this.setState(
      {
        slideLeftAnimation: "fadeOutLeft",
        slideRightAnimation: "fadeOutRight",
        boardSelect: index
      },
      () =>
        setTimeout(() => {
          this.setState({
            slideLeftAnimation: "slideInLeft",
            slideRightAnimation: "slideInRight"
          });
        }, 800)
    );
  }

  handleClickBackToBoards() {
    // Animation fadeOut then fadeIn back to board view
    this.setState(
      {
        slideLeftAnimation: "fadeOutLeft",
        thumbnailsAnimation: "fadeOutLeft",
        slideRightAnimation: "fadeOutRight"
      },
      () =>
        setTimeout(() => {
          this.setState({
            boardSelect: undefined,
            boardAnimation: "fadeIn",
            boardView: true
          });
        }, 1000)
    );
  }

  render() {
    return (
      <div id={SECTIONS_ID.PROJECTS} className={styles.container}>
        {this.props.show && (
          <div className="container">
            <SectionTitle title="Projects" icon="fab fa-stumbleupon-circle" />
            {this.state.boardView ? (
              <ProjectCards
                animation={this.state.boardAnimation}
                onClickBoard={(i, e) => this.handleClickBoard(i, e)}
              />
            ) : (
              <ProjectDetail
                animation={this.state.thumbnailsAnimation}
                selectedIndex={this.state.boardSelect}
                onClickThumbnail={i => this.handleClickThumbnail(i)}
                onClickBackToBoardView={() => this.handleClickBackToBoards()}
                slideLeftAnimation={this.state.slideLeftAnimation}
                slideRightAnimation={this.state.slideRightAnimation}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}
