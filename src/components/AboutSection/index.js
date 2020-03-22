import React, { Component } from "react";

// Components
import SectionTitle from "../../shared/SectionTitle";
import FallingLeaf from "./components/FallingLeaf";

// Constants and utils
import cx from "classnames";
import { PROFILE_PHOTO, LEAF_BORDER_PHOTO, LEAF_SOLID_PHOTO } from "../../data";
import { SECTIONS_ID } from "../../shared/constants";

import styles from "./style.module.scss";

export default class AboutSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgToggle: false
    };
  }

  render() {
    return (
      <div id={SECTIONS_ID.ABOUT} className={styles.container}>
        {!this.props.show ? null : (
          <div>
            <div className="container">
              <SectionTitle title="About" icon="fas fa-info-circle" />
              <div className={cx(styles.row, "row")}>
                <div
                  className={cx(styles.avatar, "col-sm-6 animated fadeInLeft")}
                >
                  <img
                    src={PROFILE_PHOTO}
                    alt={"Profile"}
                    onLoad={() =>
                      this.setState({ imgToggle: !this.state.imgToggle })
                    }
                  />
                </div>
                <div
                  className={cx(styles.text, "col-sm-6 animated fadeInRight")}
                >
                  <h2 className={styles.helloText}>Hello,</h2>
                  <p className={styles.briefIntroText}>
                    As a developer, I am always curious about web development
                    technologies. Building functional, modern and user-friendly
                    web applications is definitely a passion of mine. To be more
                    valuable in this highly competitive software development
                    world, I actively equip myself advanced and up-to-date
                    technologies.
                    <br />
                    <br />I am looking for an opportunity to become a
                    Front-end/Full-stack Developer and I am very open to
                    relocate to Canada.
                  </p>
                  <p className={styles.currentFocusText}>
                    Current Focus:
                    <span>
                      &nbsp;Node.js / React / Redux and other frameworks,
                      libraries related to them.
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
