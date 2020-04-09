import React, { Component } from "react";

// Components
import SectionTitle from "../../shared/SectionTitle";
import FallingLeaf from "./components/FallingLeaf";
import profilePlaceHolder from "../../style/img/profile_ph.png";

// Constants and utils
import cx from "classnames";
import { PROFILE_PHOTO, LEAF_BORDER_PHOTO, LEAF_SOLID_PHOTO } from "../../data";
import { SECTIONS_ID } from "../../shared/constants";
import { ABOUT_CONTENT } from "../../content";

import styles from "./style.module.scss";
import LazyImage from "../../shared/LazyImage";

export default class AboutSection extends Component {
  render() {
    return (
      <div id={SECTIONS_ID.ABOUT} className={styles.container}>
        {!this.props.show ? null : (
          <div>
            <div className="container">
              <SectionTitle
                title={ABOUT_CONTENT.title}
                icon="fas fa-info-circle"
                capitalize
              />
              <div className={cx(styles.row, "row")}>
                <div
                  className={cx(
                    styles.avatarWrapper,
                    "col-sm-6 animated fadeInLeft"
                  )}
                >
                  <LazyImage
                    src={PROFILE_PHOTO}
                    placeholder={profilePlaceHolder}
                    alt={"profile"}
                    className={styles.avatar}
                  />
                </div>
                <div
                  className={cx(styles.text, "col-sm-6 animated fadeInRight")}
                >
                  <h2 className={styles.helloText}>{ABOUT_CONTENT.hello}</h2>
                  <p className={styles.briefIntroText}>
                    {ABOUT_CONTENT.firstSentence}
                    <br />
                    <br />
                    {ABOUT_CONTENT.secondSentence}
                  </p>
                  <p className={styles.currentFocusText}>
                    {ABOUT_CONTENT.focusHeader}
                    <span>
                      &nbsp;
                      {ABOUT_CONTENT.focusTech}
                    </span>
                  </p>
                  <div className={styles.socialLink}>
                    <a
                      href="https://github.com/hnngo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={cx(styles.githubIcon, "fab fa-github")} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ngohuynhnhan/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className={cx(styles.linkedinIcon, "fab fa-linkedin")}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <FallingLeaf
              srcImg={LEAF_BORDER_PHOTO}
              containerId={SECTIONS_ID.ABOUT}
              initOffset={340}
              delay={1000}
            />
            <FallingLeaf
              srcImg={LEAF_SOLID_PHOTO}
              containerId={SECTIONS_ID.ABOUT}
              initOffset={80}
              delay={3000}
              optionSpeed={8}
            />
            <FallingLeaf
              srcImg={LEAF_BORDER_PHOTO}
              containerId={SECTIONS_ID.ABOUT}
              initOffset={150}
              delay={6000}
              optionSpeed={10}
            />
            <FallingLeaf
              srcImg={LEAF_SOLID_PHOTO}
              containerId={SECTIONS_ID.ABOUT}
              initOffset={250}
              delay={8000}
              optionSpeed={7}
            />
            <FallingLeaf
              srcImg={LEAF_BORDER_PHOTO}
              containerId={SECTIONS_ID.ABOUT}
              initOffset={80}
              delay={10000}
              optionSpeed={9}
            />
          </div>
        )}
      </div>
    );
  }
}
