import React, { Component } from 'react';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navHeight: +window.screen.availHeight,
      showSmallMenu: false
    }
  }

  handleClickSmMenuIcon() {
    if (this.state.showSmallMenu) {
      const qSmMenu = document.querySelector(".sn-menu-container");

      if (qSmMenu) {
        qSmMenu.style.animation = "navSlideUp 1s";
      }

      setTimeout(() => {
        this.setState({ showSmallMenu: false })
      }, 1000)
    } else {
      this.setState({ showSmallMenu: true })
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
            animation: "navSlideDown 1s"
          }}
        >
          <div>
            <h6>About</h6>
          </div>
          <div>
            <h6>Projects</h6>
          </div>
          <div>
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
          <li>
            <h6>About</h6>
            <div className="bn-underline" />
          </li>
          <li>
            <h6>Projects</h6>
            <div className="bn-underline" />
          </li>
          <li>
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
              <h6>Nhan Ngo</h6>
            </div>
            {this.renderSmallNav()}
            {this.renderBigNav()}
          </div>
        </div>
      </div>
    );
  }
}
