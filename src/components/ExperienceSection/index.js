import React, { Component } from "react";

// Components
import SectionTitle from "../../shared/SectionTitle";
import ExpBoard from "./components/ExperienceBoard";
import YearSlider from "./components/YearSlider";

// Utils and Constants
import { EXP_BOARD_DATA } from "../../data";
import { SECTIONS_ID } from "../../shared/constants";
import cx from "classnames";

import styles from "./style.module.scss";

export default class ExperienceSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isInited: false,
      resizeEvent: undefined,
      eConHeight: window.innerHeight,
      ebWidtth: 0,
      offset: -70,
      transOffset: 60,
      boardScale: [],
      boardOpacity: [],
      boardZindex: [],
      boardTransX: [],
      boardTransXOrigin: []
    };
  }

  componentDidUpdate() {
    if (this.props.show && !this.state.isInited) {
      // Setup resize event checking
      this.resizeEvent();

      // Initial setup style
      let boardScale = EXP_BOARD_DATA.map((_, i) => 1 - i * 0.1);
      let boardOpacity = EXP_BOARD_DATA.map((_, i) => (i === 0 ? 1 : 0.3));
      let boardZindex = EXP_BOARD_DATA.map(
        (item, i) => EXP_BOARD_DATA.length - i
      );

      // Update transX
      const qBoardWidth = document.querySelector(
        "#" + SECTIONS_ID.EXP_BOARD + "0"
      ).clientWidth;
      let boardTransX = boardScale.map((item, i) => {
        // let realSize = qBoardWidth * (+item);
        let deltaSize = (qBoardWidth * (1 - +item)) / 2;
        let currentWidth = window.innerWidth;
        let newTransOffset;
        if (currentWidth > 1200) {
          newTransOffset = 60;
        } else {
          newTransOffset = (currentWidth * (60 - 10)) / (1200 - 375);
        }

        return -(deltaSize + i * newTransOffset);
      });

      this.setState({
        isInited: true,
        ebWidtth: qBoardWidth,
        prevCovertedSelect: 0,
        boardScale,
        boardOpacity,
        boardZindex,
        boardTransX,
        boardTransXOrigin: boardTransX
      });
    }
  }

  resizeEvent() {
    const resizeEvent = setInterval(() => {
      let currentHeight = window.innerHeight;

      if (currentHeight !== this.state.eConHeight) {
        this.setState({
          eConHeight: currentHeight
        });
      }
    }, 300);

    this.setState({ resizeEvent });
  }

  // Handle slide animation
  handleSelectMileStone(selectedVal) {
    // Convert the data follow the direction 0 > max
    let numberOfData = EXP_BOARD_DATA.length - 1;
    let convertedVal = (selectedVal / 100) * -numberOfData + numberOfData;

    let boardScale = this.state.boardScale;
    let boardOpacity = this.state.boardOpacity;
    let boardZindex = this.state.boardZindex;
    let boardTransX = [...this.state.boardTransX];
    let boardTransXOrigin = this.state.boardTransXOrigin;

    EXP_BOARD_DATA.forEach((item, i) => {
      let delta = Math.abs(i - convertedVal);
      let signedDelta = i - convertedVal;

      // Update opacity, zIndex
      let deltaOpacity = 1 - 0.1;
      let deltaZindex = 5 - 4;
      let deltaTransX;

      if (delta < 1) {
        boardOpacity[i] = 1 - delta * deltaOpacity;
        boardZindex[i] = Math.round(5 - delta * deltaZindex);

        deltaTransX = boardTransXOrigin[1];
      } else if (signedDelta < 0) {
        boardOpacity[i] = 0.3;
        boardZindex[i] = 1;

        deltaTransX =
          boardTransXOrigin[Math.floor(convertedVal) - i] -
          boardTransXOrigin[Math.floor(convertedVal) - i - 1];
      } else {
        boardOpacity[i] = 0.3;
        boardZindex[i] = 1;

        deltaTransX = boardTransXOrigin[i] - boardTransXOrigin[i - 1];
      }

      // Update scale
      boardScale[i] = 1 - delta * 0.1;

      // Update transX
      boardTransX[i] = deltaTransX * signedDelta;
    });

    this.setState({
      boardScale,
      boardOpacity,
      boardZindex,
      boardTransX,
      prevCovertedSelect: convertedVal
    });
  }

  renderExpBoard() {
    return EXP_BOARD_DATA.map((item, i) => {
      return (
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
          scale={this.state.boardScale[i]}
          opacity={this.state.boardOpacity[i]}
          zIndex={this.state.boardZindex[i]}
          transX={this.state.boardTransX[i]}
        />
      );
    });
  }

  render() {
    return (
      <div
        id={SECTIONS_ID.EXPERIENCE}
        className={styles.container}
        style={{
          height: this.state.eConHeight
        }}
      >
        {!this.props.show ? null : (
          <div
            id="exp-container"
            className={cx(styles.boardContainer, "container")}
          >
            <SectionTitle
              title="Experience"
              icon="fas fa-history"
              isDarkTheme={true}
            />
            <div>{this.renderExpBoard()}</div>
            <div
              className={cx(
                styles.yearSlideContainer,
                "animated slideInUp slow"
              )}
            >
              <YearSlider
                range={[2009, 2019]}
                milestones={[
                  {
                    id: 0,
                    fromTime: "08/2012",
                    toTime: "04/2017",
                    employer: "Ho Chi Minh city Univeristy of Technology",
                    logo: EXP_BOARD_DATA[3].compLogo,
                    designation: "Student"
                  },
                  {
                    id: 1,
                    fromTime: "06/2016",
                    toTime: "09/2016",
                    employer: "MobiFone Testing and Maintenance Center",
                    logo: EXP_BOARD_DATA[2].compLogo,
                    designation: "Internship Research Engineer"
                  },
                  {
                    id: 2,
                    fromTime: "05/2017",
                    toTime: "10/2017",
                    employer: "Fiot Co. LTD",
                    logo: EXP_BOARD_DATA[1].compLogo,
                    designation: "Embedded Firmware Development Engineer"
                  },
                  {
                    id: 3,
                    fromTime: "05/2018",
                    toTime: "present",
                    employer: "Nanyang Technological University",
                    logo: EXP_BOARD_DATA[0].compLogo,
                    designation: "Research Engineer"
                  }
                ]}
                onSelectMS={selectedVal =>
                  this.handleSelectMileStone(selectedVal)
                }
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

// TODO: Move data from year slider to data json
