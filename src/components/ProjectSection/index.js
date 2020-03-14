import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import SectionTitle from "../../shared/SectionTitle";
import data from "../../data.json";
import { SECTIONS_ID } from "../../shared/constants";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data.projects.projectInfo,
      devices: data.projects.devices,
      techLogos: data.projects.techlogo,
      imgToggle: false,
      boardView: true,
      boardSelect: undefined,
      boardAnimation: "fadeIn",
      thumbnailsAnimation: "slideInLeft",
      slideLeftAnimation: "slideInLeft",
      slideRightAnimation: "slideInRight"
    };
  }

  handleloadImg() {
    // Handle if latency in loading img
    this.setState({
      imgToggle: !this.state.imgToggle
    });
  }

  handleClickBoard(index, event) {
    // Check if user click i tag
    if (event.target.tagName === "I") {
      return;
    }

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
        slideRightAnimation: "fadeOutRight"
      },
      () =>
        setTimeout(() => {
          this.setState({
            boardSelect: index,
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

  renderChangeViewBtn() {
    return (
      <div
        className={`p-pt-vc animated ${this.state.thumbnailsAnimation} fast`}
        onClick={() => this.handleClickBackToBoards()}
      >
        <i className="fas fa-arrow-left" />
        <p>Back to boards</p>
      </div>
    );
  }

  renderProjectThumbnails() {
    return this.state.data.map((item, i) => {
      let style = {
        filter: "brightness(50%) blur(0.7px)",
        opacity: 0.5
      };

      // If project is selected then highlight it
      if (i === this.state.boardSelect) {
        style = {
          filter: "brightness(100%) blur(0px)",
          opacity: 1
        };
      }

      return (
        <div
          className={`p-pt-ic animated ${this.state.thumbnailsAnimation} fast`}
          key={i}
        >
          <img
            src={item.bannerImg}
            onLoad={() => this.handleloadImg()}
            alt="projects-banner"
            style={style}
            onClick={() => this.handleClickThumbnail(i)}
          />
        </div>
      );
    });
  }

  renderProjectDetail() {
    if (this.state.boardSelect !== undefined) {
      let board = this.state.data[this.state.boardSelect];

      return (
        <div className="pd-container">
          <div className="row">
            <div
              className={`col-md-6 animated ${this.state.slideLeftAnimation} fast`}
            >
              <div className="d-flex justify-content-between">
                <p className="pd-name">{board.name}</p>
                <div className="pd-view">
                  {board.website.length > 0 ? (
                    <a
                      href={board.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt" />
                      <p>View Online</p>
                    </a>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
              <p className="pd-des">{board.description}</p>
              <ul className="pd-detail">
                {board.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="pd-tech">Technologies/Libraries</p>
              {board.technologies.map((item, i) => {
                return (
                  <img
                    ref={ref => (this["imgRef" + i] = ref)}
                    key={i}
                    className="pd-techLogo"
                    src={this.state.techLogos[item]}
                    alt="techLogo"
                    data-tip={item}
                    onMouseEnter={() => ReactTooltip.show(this["imgRef" + i])}
                    onMouseLeave={() => ReactTooltip.hide(this["imgRef" + i])}
                  />
                );
              })}
              <div className="pd-view">
                {board.website.length > 0 ? (
                  <a
                    href={board.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt" />
                    <p>View Online</p>
                  </a>
                ) : (
                  <div />
                )}
                {board.githubLink.length > 0 ? (
                  <a
                    href={board.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" />
                    <p>View Code</p>
                  </a>
                ) : (
                  <div />
                )}
              </div>
            </div>
            <div
              className={`col-md-6 animated ${this.state.slideRightAnimation} fast`}
            >
              <div className="pd-devices">
                <img src={board.devices} alt={"imac-content"} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }

  renderProjectCards() {
    return this.state.data.map((item, i) => {
      return (
        <div
          key={i}
          className={`col-md-4 col-sm-6 animated ${this.state.boardAnimation} fast`}
        >
          <div
            className="p-pc-container"
            onClick={e => this.handleClickBoard(i, e)}
          >
            <img
              src={item.bannerImg}
              onLoad={() => this.handleloadImg()}
              alt="projects-banner"
            />
            <p className="p-pc-name">{item.name}</p>
            <p className="p-pc-des">{item.description}</p>
            <div className="p-pc-icon">
              {item.website.length > 0 ? (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt" />
                </a>
              ) : (
                <div />
              )}
              {item.githubLink.length > 0 ? (
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" />
                </a>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      );
    });
  }

  renderContent() {
    // Render a proper view
    let viewContent = this.state.boardView ? (
      <div className="row">{this.renderProjectCards()}</div>
    ) : (
      <div>
        <div className="p-pt-container">
          {this.renderProjectThumbnails()}
          {this.renderChangeViewBtn()}
        </div>
        {this.renderProjectDetail()}
      </div>
    );

    return (
      <div className="container">
        <SectionTitle title="Projects" icon="fab fa-stumbleupon-circle" />
        {viewContent}
        <ReactTooltip />
      </div>
    );
  }

  render() {
    return (
      <div id={SECTIONS_ID.PROJECTS} className="p-container">
        {this.props.show ? this.renderContent() : <div />}
      </div>
    );
  }
}
