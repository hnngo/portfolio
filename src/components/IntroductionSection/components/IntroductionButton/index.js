import React from "react";
import cx from "classnames";

import styles from "./style.module.scss";

const IntroductionButton = ({ show, onClickAbout, onClickPortfolio }) => {
  return !show ? null : (
    <div className={styles.container}>
      <div
        className={cx(styles.aboutButton, "animated tada")}
        onClick={onClickAbout}
      >
        About me
      </div>
      <div
        className={cx(styles.portfolioButton, "animated tada")}
        onClick={onClickPortfolio}
      >
        Portfolio
      </div>
    </div>
  );
};

export default IntroductionButton;
