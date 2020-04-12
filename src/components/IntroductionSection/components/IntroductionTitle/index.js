import React from "react";
import cx from "classnames";
import { INTRODUCTION } from "../../../../content";

import styles from "./style.module.scss";

const IntroductionTitle = ({ showHeaderTitle, showDescription, showName }) => {
  if (showHeaderTitle) {
    return (
      <div>
        <div className="d-flex">
          <h6 className={cx(styles.hiText, "animated bounceInDown")}>
            {INTRODUCTION.hi}
          </h6>
          {showName ? (
            <h6 className={cx(styles.name, "animated slideInRight")}>
              ,&nbsp;
              {INTRODUCTION.name}
            </h6>
          ) : (
            <div />
          )}
        </div>
        <div>
          {showDescription ? (
            <h6 className={cx(styles.description, "animated fadeInUp slow")}>
              {INTRODUCTION.brief}
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
