import React, { Component } from "react";
import cx from "classnames";

import styles from "./style.module.scss";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navHeight: +window.screen.availHeight,
      showSmallMenu: false
    };
  }

  collapseNavMenu() {
    // Collapse menu when state is opening
    const qSmMenu = document.querySelector("#smallNavMenu");

    if (qSmMenu) {
      qSmMenu.style.animation = "navSlideUp 1s";
    }

    setTimeout(() => {
      this.setState({ showSmallMenu: false });
    }, 1000);
  }

  handleClickSmMenuIcon() {
    // If open, then collapse and open vice versa
    if (this.state.showSmallMenu) {
      this.collapseNavMenu();
    } else {
      this.setState({ showSmallMenu: true });
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
        behavior: "smooth"
      });
    }
  }

  renderSmallMenu() {
    if (this.state.showSmallMenu) {
      const qNavCon = document.querySelector("#navbar");

      return (
        <div
          id="smallNavMenu"
          className={styles.smallNavMenu}
          style={{
            top: qNavCon.clientHeight,
            animation: "navSlideDown 0.6s"
          }}
        >
          <div
            className={styles.smallNavList}
            onClick={() => this.handleClickNav("about")}
          >
            <h6 className={styles.smallNavText}>About</h6>
          </div>
          <div
            className={styles.smallNavList}
            onClick={() => this.handleClickNav("experience")}
          >
            <h6 className={styles.smallNavText}>Experience</h6>
          </div>
          <div
            className={styles.smallNavList}
            onClick={() => this.handleClickNav("project")}
          >
            <h6 className={styles.smallNavText}>Projects</h6>
          </div>
          <div
            className={styles.smallNavList}
            onClick={() => this.handleClickNav("contact")}
          >
            <h6 className={styles.smallNavText}>Contact</h6>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }

  renderSmallNav() {
    return (
      <div>
        <i
          className={cx(
            styles.smallNavIcon,
            "fas fa-bars d-sm-block d-md-none"
          )}
          onClick={() => this.handleClickSmMenuIcon()}
        />
        {this.renderSmallMenu()}
      </div>
    );
  }

  renderBigNav() {
    return (
      <div className="d-none d-md-block">
        <ul className={styles.bigNavUL}>
          <li
            className={styles.bigNavList}
            onClick={() => this.handleClickNav("about")}
          >
            <h6 className={styles.bigNavListText}>About</h6>
            <div className={styles.bigNavUnderline} />
          </li>
          <li
            className={styles.bigNavList}
            onClick={() => this.handleClickNav("experience")}
          >
            <h6 className={styles.bigNavListText}>Experience</h6>
            <div className={styles.bigNavUnderline} />
          </li>
          <li
            className={styles.bigNavList}
            onClick={() => this.handleClickNav("project")}
          >
            <h6 className={styles.bigNavListText}>Projects</h6>
            <div className={styles.bigNavUnderline} />
          </li>
          <li
            className={styles.bigNavList}
            onClick={() => this.handleClickNav("contact")}
          >
            <h6 className={styles.bigNavListText}>Contact</h6>
            <div className={styles.bigNavUnderline} />
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div id="navbar" className={styles.container}>
        <div className={cx("container", styles.navFlex)}>
          <div className={styles.titleLogo}>
            <h6 className={styles.nText}>N</h6>
            <h6 className={styles.hText}>h</h6>
          </div>
          {this.renderSmallNav()}
          {this.renderBigNav()}
        </div>
      </div>
    );
  }
}

// Click small nav then collapse
