import React, { Component } from "react";

// Constants
import { SECTIONS_ID } from "../../shared/constants";
import { CONTACT_DATA } from "../../data";

import styles from "./style.module.scss";

export default class ContactSection extends Component {
  render() {
    return (
      <div id={SECTIONS_ID.CONTACT} className={styles.container}>
        <div className="container animated fadeIn slow">
          <div
            className={styles.scrollToTopButton}
            onClick={() =>
              window.scroll({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <i className="fas fa-chevron-up" />
          </div>
          <div className={styles.socialSection}>
            <a
              href={CONTACT_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href={CONTACT_DATA.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a href={`mailto:${CONTACT_DATA.email}`}>
              <i className="fas fa-envelope-open-text" />
            </a>
          </div>
          <div className={styles.logo}>
            <div className={styles.titleLogo}>
              <h6 className={styles.nText}>N</h6>
              <h6 className={styles.hText}>h</h6>
            </div>
          </div>
          <p className={styles.updateTime}>Last update: Dec 22nd 2022</p>
        </div>
      </div>
    );
  }
}
