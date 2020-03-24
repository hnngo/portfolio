import React, { Component } from "react";
import { SECTIONS_ID } from "../../shared/constants";

import styles from "./style.module.scss";

export default class ContactSection extends Component {
  renderContent() {
    return (
      <div className="container animated fadeIn slow">
        <div
          className={styles.scrollToTopButton}
          onClick={() =>
            window.scroll({
              top: 0,
              behavior: "smooth"
            })
          }
        >
          <i className="fas fa-chevron-up" />
        </div>
        <div className={styles.socialSection}>
          <a
            href="https://github.com/hnngo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/ngohuynhnhan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="mailto:ngohuynhnhan@gmail.com">
            <i className="fas fa-envelope-open-text" />
          </a>
        </div>
        <div className={styles.logo}>
          <div className={styles.titleLogo}>
            <h6 className={styles.nText}>N</h6>
            <h6 className={styles.hText}>h</h6>
          </div>
        </div>
        <p className={styles.updateTime}>Last update 18 June 2019</p>
      </div>
    );
  }

  render() {
    return (
      <div id={SECTIONS_ID.CONTACT} className={styles.container}>
        {this.renderContent()}
      </div>
    );
  }
}
