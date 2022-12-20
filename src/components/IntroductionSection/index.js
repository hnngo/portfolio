import React, { Component } from "react";
import IntroductionTitle from "./components/IntroductionTitle";
import IntroductionButton from "./components/IntroductionButton";
import { SECTIONS_ID } from "../../shared/constants";

import styles from "./style.module.scss";

const TIME_OUT_FOR_TITLE = 500;
const TIME_OUT_FOR_NAME = 1500;
const TIME_OUT_FOR_DESCRIPTION = 2500;
const TIME_OUT_FOR_BUTTON = 3500;
const TIME_OUT_FOR_LIGHT = 4500;

const IntroductionSection = () => {
  const [showHeaderTitle, setShowHeaderTitle] = React.useState(false);
  const [showName, setShowName] = React.useState(false);
  const [showDescription, setShowDescription] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);
  const [showLight, setShowLight] = React.useState(false);

  React.useEffect(() => {
    // Interval action for each component
    const setOn = (setStateFunc, time) =>
      setTimeout(() => setStateFunc(true), time);
    setOn(setShowHeaderTitle, TIME_OUT_FOR_TITLE);
    setOn(setShowName, TIME_OUT_FOR_NAME);
    setOn(setShowDescription, TIME_OUT_FOR_DESCRIPTION);
    setOn(setShowButton, TIME_OUT_FOR_BUTTON);
    setOn(setShowLight, TIME_OUT_FOR_LIGHT);
  }, []);

  const handleClickButton = (type) => {
    const y =
      document.querySelector(`#${type}`).getBoundingClientRect().top +
      window.scrollY;

    window.scroll({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.header}>
          <IntroductionTitle
            showDescription={showDescription}
            showHeaderTitle={showHeaderTitle}
            showName={showName}
          />
          <IntroductionButton
            show={showButton}
            onClickAbout={() => handleClickButton(SECTIONS_ID.ABOUT)}
            onClickPortfolio={() => handleClickButton(SECTIONS_ID.PROJECTS)}
          />
        </div>
      </div>
      <div className="d-none d-md-block">
        {!showLight ? null : (
          <div className={`${styles.lightContainer} animated fadeIn`}>
            <i className="far fa-lightbulb" />
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroductionSection;
