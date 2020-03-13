import React, { Component } from "react";
import cx from "classnames";

import styles from "./style.module.scss";

const BigNav = ({ onClickSection }) => {
  return (
    <div className="d-none d-md-block">
      <ul className={styles.bigNavUL}>
        <li
          className={styles.bigNavList}
          onClick={() => onClickSection("about")}
        >
          <h6 className={styles.bigNavListText}>About</h6>
          <div className={styles.bigNavUnderline} />
        </li>
        <li
          className={styles.bigNavList}
          onClick={() => onClickSection("experience")}
        >
          <h6 className={styles.bigNavListText}>Experience</h6>
          <div className={styles.bigNavUnderline} />
        </li>
        <li
          className={styles.bigNavList}
          onClick={() => onClickSection("project")}
        >
          <h6 className={styles.bigNavListText}>Projects</h6>
          <div className={styles.bigNavUnderline} />
        </li>
        <li
          className={styles.bigNavList}
          onClick={() => onClickSection("contact")}
        >
          <h6 className={styles.bigNavListText}>Contact</h6>
          <div className={styles.bigNavUnderline} />
        </li>
      </ul>
    </div>
  );
};

const SmallNav = ({ show, onClickSection, onClickExpand, onClickCollapse }) => {
  const qNavCon = document.querySelector("#navbar");

  return (
    <div>
      <i
        className={cx(styles.smallNavIcon, "fas fa-bars d-sm-block d-md-none")}
        onClick={() => {
          show ? onClickCollapse() : onClickExpand();
        }}
      />
      {!show ? null : (
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
            onClick={() => onClickSection("about")}
          >
            <h6 className={styles.smallNavText}>About</h6>
          </div>
          <div
            className={styles.smallNavList}
            onClick={() => onClickSection("experience")}
          >
            <h6 className={styles.smallNavText}>Experience</h6>
          </div>
          <div
            className={styles.smallNavList}
            onClick={() => onClickSection("project")}
          >
            <h6 className={styles.smallNavText}>Projects</h6>
          </div>
          <div
            className={styles.smallNavList}
            onClick={() => onClickSection("contact")}
          >
            <h6 className={styles.smallNavText}>Contact</h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navHeight: +window.screen.availHeight,
      showSmallMenu: false
    };
  }

  collapseSmallNav() {
    // Collapse menu when state is opening
    const qSmMenu = document.querySelector("#smallNavMenu");

    if (qSmMenu) {
      qSmMenu.style.animation = "navSlideUp 1s";

      setTimeout(() => {
        this.setState({ showSmallMenu: false });
      }, 1000);
    }
  }

  handleClickNav(type, queryString = undefined) {
    console.log(type);
    if (!type && !queryString) {
      return;
    }

    // Collapse the menu first
    this.collapseSmallNav();

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

  render() {
    return (
      <div id="navbar" className={styles.container}>
        <div className={cx("container", styles.navFlex)}>
          <div className={styles.titleLogo}>
            <h6 className={styles.nText}>N</h6>
            <h6 className={styles.hText}>h</h6>
          </div>
          <SmallNav
            show={this.state.showSmallMenu}
            onClickSection={type => this.handleClickNav(type)}
            onClickExpand={() => this.setState({ showSmallMenu: true })}
            onClickCollapse={() => this.collapseSmallNav()}
          />
          <BigNav onClickSection={type => this.handleClickNav(type)} />
        </div>
      </div>
    );
  }
}
