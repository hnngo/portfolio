import React, { Component } from 'react';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navHeight: +window.screen.availHeight,
      showSmallMenu: false
    }
  }

  collapseNavMenu() {
    // Collapse menu when state is opening
    const qSmMenu = document.querySelector(".sn-menu-container");

    if (qSmMenu) {
      qSmMenu.style.animation = "navSlideUp 1s";
    }

    setTimeout(() => {
      this.setState({ showSmallMenu: false })
    }, 1000);
  }

  handleClickSmMenuIcon() {
    // If open, then collapse and open vice versa
    if (this.state.showSmallMenu) {
      this.collapseNavMenu();
    } else {
      this.setState({ showSmallMenu: true })
    }
  }


  handleClickNav(type, queryString = undefined) {
    if (!type && !queryString) {
      return;
    }

    // Collapse the menu first
    this.collapseNavMenu();

    // Get the right target
    let qTarget;
    if (queryString) {
      qTarget = document.querySelector(queryString);
    } else {
      qTarget = document.querySelector(`.${type.charAt(0)}-container`);
    }

    // Get the target scroll position and scroll to it
    if (qTarget) {
      let y = qTarget.getBoundingClientRect().top + window.scrollY;

      window.scroll({
        top: y,
        behavior: 'smooth'
      });
    }
  }

  renderSmallMenu() {
    if (this.state.showSmallMenu) {
      const qNavCon = document.querySelector(".nav-container");

      return (
        <div
          className="sn-menu-container"
          style={{
            top: qNavCon.clientHeight,
            animation: "navSlideDown 0.6s"
          }}
        >
          <div
            onClick={() => this.handleClickNav("about")}
          >
            <h6>About</h6>
          </div>
          <div
            onClick={() => this.handleClickNav("experience")}
          >
            <h6>Experience</h6>
          </div>
          <div
            onClick={() => this.handleClickNav("project")}
          >
            <h6>Projects</h6>
          </div>
          <div
            onClick={() => this.handleClickNav("contact")}
          >
            <h6>Contact</h6>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }

  renderSmallNav() {
    return (
      <div className="sn-container">
        <i
          className="fas fa-bars d-sm-block d-md-none"
          onClick={() => this.handleClickSmMenuIcon()}
        />
        {this.renderSmallMenu()}
      </div>
    );
  }

  renderBigNav() {
    return (
      <div className="bn-links d-none d-md-block">
        <ul>
          <li
            onClick={() => this.handleClickNav("about")}
          >
            <h6>About</h6>
            <div className="bn-underline" />
          </li>
          <li
            onClick={() => this.handleClickNav("experience")}
          >
            <h6>Experience</h6>
            <div className="bn-underline" />
          </li>
          <li
            onClick={() => this.handleClickNav("project")}
          >
            <h6>Projects</h6>
            <div className="bn-underline" />
          </li>
          <li
            onClick={() => this.handleClickNav("contact")}
          >
            <h6>Contact</h6>
            <div className="bn-underline" />
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="nav-container">
        <div className="container">
          <div className="nav-content">
            <div className="nav-header">
              <h6>N</h6>
              <h6 className="nav-h">h</h6>
            </div>
            {this.renderSmallNav()}
            {this.renderBigNav()}
          </div>
        </div>
      </div>
    );
  }
}

// Click small nav then collapse
