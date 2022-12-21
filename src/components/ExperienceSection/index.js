import React from "react";

// Components
import SectionTitle from "../../shared/SectionTitle";
import ExpBoard from "./components/ExperienceBoard";
import YearSlider from "./components/YearSlider";

// Utils and Constants
import { EXP_BOARD_DATA } from "../../data";
import { SECTIONS_ID } from "../../shared/constants";
import cx from "classnames";

import styles from "./style.module.scss";

const ExperienceSection = ({ show }) => {
  const [isInited, setIsInited] = React.useState(false);
  const [eConHeight, setEConHeight] = React.useState(window.innerHeight);
  const [ebWidtth, setEbWidtth] = React.useState(0);
  const [boardScale, setBoardScale] = React.useState([]);
  const [boardOpacity, setBoardOpacity] = React.useState([]);
  const [boardZindex, setBoardZindex] = React.useState([]);
  const [boardTransX, setBoardTransX] = React.useState([]);
  const [boardTransXOrigin, setBoardTransXOrigin] = React.useState([]);

  const initResizeEvent = React.useCallback(() => {
    setInterval(() => {
      let currentHeight = window.innerHeight;

      if (currentHeight !== eConHeight) {
        setEConHeight(currentHeight);
      }
    }, 300);
  }, [eConHeight]);

  React.useEffect(() => {
    if (show && !isInited) {
      // Setup resize event checking
      initResizeEvent();

      // Initial setup style
      let newBoardScale = EXP_BOARD_DATA.map((_, i) => 1 - i * 0.1);
      let newBoardOpacity = EXP_BOARD_DATA.map((_, i) => (i === 0 ? 1 : 0.3));
      let newBoardZindex = EXP_BOARD_DATA.map(
        (_, i) => EXP_BOARD_DATA.length - i
      );

      // Update transX
      const qBoardWidth = document.querySelector(
        "#" + SECTIONS_ID.EXP_BOARD + "0"
      ).clientWidth;
      let newBoardTransX = newBoardScale.map((item, i) => {
        // let realSize = qBoardWidth * (+item);
        let deltaSize = (qBoardWidth * (1 - +item)) / 2;
        let currentWidth = window.innerWidth;
        let newTransOffset =
          currentWidth > 1200 ? 60 : (currentWidth * (60 - 10)) / (1200 - 375);

        return -(deltaSize + i * newTransOffset);
      });

      setIsInited(true);
      setEbWidtth(qBoardWidth);
      setBoardScale(newBoardScale);
      setBoardOpacity(newBoardOpacity);
      setBoardZindex(newBoardZindex);
      setBoardTransX(newBoardTransX);
      setBoardTransXOrigin(newBoardTransX);
    }
  }, [show, isInited, initResizeEvent, ebWidtth]);

  // Handle slide animation
  const handleSelectMileStone = React.useCallback(
    (selectedVal) => {
      // Convert the data follow the direction 0 > max
      let numberOfData = EXP_BOARD_DATA.length - 1;
      let convertedVal = (selectedVal / 100) * -numberOfData + numberOfData;

      let newBoardScale = boardScale;
      let newBoardOpacity = boardOpacity;
      let newBoardZindex = boardZindex;
      let newBoardTransX = [...boardTransX];
      let newBoardTransXOrigin = boardTransXOrigin;

      // Ignore if the boards not initialized
      if (newBoardScale.length !== EXP_BOARD_DATA.length) {
        return;
      }

      EXP_BOARD_DATA.forEach((_, i) => {
        let delta = Math.abs(i - convertedVal);
        let signedDelta = i - convertedVal;

        // Update opacity, zIndex
        let deltaOpacity = 1 - 0.1;
        let deltaZindex = 5 - 4;
        let deltaTransX;

        
        if (delta < 1) {
          newBoardOpacity[i] = 1 - delta * deltaOpacity;
          newBoardZindex[i] = Math.round(5 - delta * deltaZindex);

          deltaTransX = newBoardTransXOrigin[1];
        } else if (signedDelta < 0) {
          newBoardOpacity[i] = 0.3;
          newBoardZindex[i] = 1;

          deltaTransX =
            newBoardTransXOrigin[Math.floor(convertedVal) - i] -
            newBoardTransXOrigin[Math.floor(convertedVal) - i - 1];
        } else {
          boardOpacity[i] = 0.3;
          boardZindex[i] = 1;

          deltaTransX = newBoardTransXOrigin[i] - newBoardTransXOrigin[i - 1];
        }

        // Update scale
        newBoardScale[i] = 1 - delta * 0.1;

        // Update transX
        newBoardTransX[i] = deltaTransX * signedDelta;
      });

      setBoardScale(newBoardScale);
      setBoardOpacity(newBoardOpacity);
      setBoardZindex(newBoardZindex);
      setBoardTransX(newBoardTransX);
      setBoardTransXOrigin(newBoardTransXOrigin);
    },
    [boardOpacity, boardScale, boardZindex, boardTransX, boardTransXOrigin]
  );

  return (
    <div
      id={SECTIONS_ID.EXPERIENCE}
      className={styles.container}
      style={{
        height: eConHeight,
      }}
    >
      {!show ? null : (
        <div
          id={SECTIONS_ID.EXP_CONTAINER}
          className={cx(styles.boardContainer, "container")}
        >
          <SectionTitle
            title="Experience"
            icon="fas fa-history"
            isDarkTheme={true}
          />
          <div>
            {EXP_BOARD_DATA.map((item, i) => (
              <ExpBoard
                key={i}
                keyBoard={i}
                employer={item.employer}
                designation={item.designation}
                compLogo={item.compLogo}
                headSentence={item.headSentence}
                jDHeader={item.jDHeader}
                jobDescription={item.jobDescription}
                location={item.location}
                timeFrom={item.timeFrom}
                timeTo={item.timeTo}
                scale={boardScale[i]}
                opacity={boardOpacity[i]}
                zIndex={boardZindex[i]}
                transX={boardTransX[i]}
              />
            ))}
          </div>
          <div
            className={cx(styles.yearSlideContainer, "animated slideInUp slow")}
          >
            <YearSlider
              onSelectMS={(selectedVal) => handleSelectMileStone(selectedVal)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceSection;
