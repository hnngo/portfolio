import React from "react";
import cx from "classnames";

import styles from "./style.module.scss";

const IntroductionTitle = ({ showHeaderTitle, showDescript, showName }) => {
  if (showHeaderTitle) {
    return (
      <div>
        <div className="d-flex">
          <h6 className={cx(styles.hiText, "animated bounceInDown")}>Hi</h6>
          {showName ? (
            <h6 className={cx(styles.name, "animated slideInRight")}>
              , I'm Nhan Ngo
            </h6>
          ) : (
            <div />
          )}
        </div>
        <div>
          {showDescript ? (
            <h6 className={cx(styles.description, "animated fadeInUp slow")}>
              I am a front-end developer based in Singapore who is ambitious
              about web development and UI/UX design.
            </h6>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

export default IntroductionTitle;
