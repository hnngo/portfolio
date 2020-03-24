import React, { Component } from "react";

// Constants and utils
import cx from "classnames";
import { SECTIONS } from "../../shared/constants";

import styles from "./style.module.scss";

const BigNav = ({ onClickSection }) => {
  return (
    <div className="d-none d-md-block">
      <ul className={styles.bigNavUL}>
        {Object.values(SECTIONS).map(section => (
          <li
            key={section}
            className={styles.bigNavList}
            onClick={() => onClickSection(section)}
          >
            <h6 className={styles.bigNavListText}>{section}</h6>
            <div className={styles.bigNavUnderline} />
          </li>
        ))}
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
          {Object.values(SECTIONS).map(section => (
            <div
              key={section}
              className={styles.smallNavList}
              onClick={() => onClickSection(section)}
            >
              <h6 className={styles.smallNavText}>{section}</h6>
            </div>
          ))}
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

  handleClickNav(type) {
    if (!type) {
      return;
    }

    // Collapse the menu first if small menu is being rendered
    this.state.showSmallMenu && this.collapseSmallNav();

    // Get the right target
    const qTarget = document.querySelector(`#${type}`);

    // Get the target scroll position and scroll to it
    if (qTarget) {
      const y = qTarget.getBoundingClientRect().top + window.scrollY;

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

// TODO: Fix bug smallnav => open => switch to big nav => the menu still existing
