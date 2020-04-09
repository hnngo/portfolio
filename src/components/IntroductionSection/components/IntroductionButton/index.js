import React from "react";
import cx from "classnames";
import { INTRODUCTION } from "../../../../content";

import styles from "./style.module.scss";

const IntroductionButton = ({ show, onClickAbout, onClickPortfolio }) => {
  return !show ? null : (
    <div className={styles.container}>
      <div
        className={cx(styles.aboutButton, "animated tada")}
        onClick={onClickAbout}
      >
        {INTRODUCTION.buttonAbout}
      </div>
      <div
        className={cx(styles.portfolioButton, "animated tada")}
        onClick={onClickPortfolio}
      >
        {INTRODUCTION.buttonPortfolio}
      </div>
    </div>
  );
};

export default IntroductionButton;
