import React, { Component } from "react";

// Utils and constants
import { selectNearestElems, isSmallScreen } from "../../../../utils";
import { SECTIONS_ID } from "../../../../shared/constants";
import { EXP_BOARD_DATA } from "../../../../data";

import styles from "./style.module.scss";

const formattedData = [...EXP_BOARD_DATA].reverse();

const SELECTED_SCALE = 3;
const SELECTED_TRANSY = -5;
export default class YearSlider extends Component {
  constructor(props) {
    super(props);

    // Prepare milestones
    let numberOfMilestones = formattedData.length;
    let milestonesRange = Math.floor(100 / (numberOfMilestones - 1));
    let valueMilestones = [];
    formattedData.forEach((_, i) => {
      if (i === 0) {
        valueMilestones.push(0);
      } else if (i === numberOfMilestones - 1) {
        valueMilestones.push(100);
      } else {
        valueMilestones.push(
          valueMilestones[valueMilestones.length - 1] + milestonesRange
        );
      }
    });

    // Init opacity, scale and translate
    let msOpacities = formattedData.map(() => 0.3);
    let msScale = formattedData.map(() => 1);
    let msTransY = formattedData.map(() => 0);

    this.state = {
      reSizeEvent: undefined,
      currentWidth: 0,
      slideInterval: undefined,
      slideValue: 100,
      sliderWidth: undefined,
      valueMilestones,
      milestonesRange,
      msOpacities,
      msScale,
      msTransY,
      markerOffsetLeft: undefined
    };
  }

  componentDidMount() {
    // Update offset for marker
    const reSizeEvent = setInterval(() => {
      let currentWidth = window.screen.width;

      if (currentWidth !== this.state.currentWidth) {
        const qYS = document.querySelector(`#${SECTIONS_ID.YEAR_SLIDE}`);
        const qEContainer = document.querySelector(
          `#${SECTIONS_ID.EXP_CONTAINER}`
        );

        if (qYS && qEContainer) {
          const newMarkerOffsetLeft =
            qYS.getBoundingClientRect().left -
            qEContainer.getBoundingClientRect().left -
            20;

          if (newMarkerOffsetLeft !== this.state.markerOffsetLeft) {
            this.setState({
              markerOffsetLeft: newMarkerOffsetLeft,
              sliderWidth: qYS.getBoundingClientRect().width
            });
          }
        }
      }
    }, 300);

    this.setState({ reSizeEvent }, () => {
      // Update initial selection
      this.updateSelectMilestones();
    });
  }

  handleChangeSlide(e) {
    this.setState(
      {
        slideValue: +e.target.value
      },
      () => this.updateSelectMilestones()
    );
  }

  handleReleaseClick() {
    clearInterval(this.state.slideInterval);

    // Check if slider stop at right points
    if (this.state.valueMilestones.includes(this.state.slideValue)) {
      return;
    }

    // Get two nearest points
    let value = this.state.slideValue;
    let twoNearestElems = selectNearestElems(value, this.state.valueMilestones);

    if (value - twoNearestElems[0] < twoNearestElems[1] - value) {
      value = twoNearestElems[0];
    } else {
      value = twoNearestElems[1];
    }

    // Select the nearest point in milestones pos
    let delta = value > this.state.slideValue ? 1 : -1;

    // Animation slide
    let slideInterval = setInterval(() => {
      if (this.state.valueMilestones.includes(this.state.slideValue + delta)) {
        clearInterval(this.state.slideInterval);
      }

      this.setState(
        {
          slideValue: +this.state.slideValue + delta
        },
        () => this.updateSelectMilestones()
      );
    }, 20);

    this.setState({ slideInterval });
  }

  updateSelectMilestones() {
    // Update style milestones
    let newOpacities = this.state.msOpacities;
    let newScales = this.state.msScale;
    let newTransY = this.state.msTransY;

    // Check the range
    this.state.valueMilestones.forEach((item, i) => {
      let delta = Math.abs(item - this.state.slideValue);
      if (delta > this.state.milestonesRange) {
        newOpacities[i] = 0.3;
        newScales[i] = 1;
        newTransY[i] = 0;
      } else {
        let deltaOpacity = (1 - 0.3) / this.state.milestonesRange;
        let deltaScale = (SELECTED_SCALE - 1) / this.state.milestonesRange;
        let deltaTransY = (SELECTED_TRANSY - 0) / this.state.milestonesRange;

        newOpacities[i] = 1 - delta * deltaOpacity;
        newScales[i] = SELECTED_SCALE - delta * deltaScale;
        newTransY[i] = SELECTED_TRANSY - delta * deltaTransY;
      }
    });

    // Update for Experience Component
    this.props.onSelectMS(this.state.slideValue);

    this.setState({ msOpacities: newOpacities });
  }

  handleClickLogo(i) {
    this.setState(
      {
        slideValue: this.state.valueMilestones[i]
      },
      () => this.updateSelectMilestones()
    );
  }

  renderMilestonesMarker() {
    if (this.state.markerOffsetLeft === undefined) {
      return <div />;
    }

    let offsetRange =
      (this.state.sliderWidth - this.state.milestonesRange) /
      (formattedData.length - 1);

    return formattedData.map((item, i) => {
      let offsetLeft;
      if (i === formattedData.length - 1) {
        offsetLeft = this.state.markerOffsetLeft + this.state.sliderWidth - 28;
      } else {
        offsetLeft = this.state.markerOffsetLeft + i * offsetRange;
      }

      const transformLogo = isSmallScreen()
        ? `scale(${this.state.msScale[i] * 1.6}) translateY(${this.state
            .msTransY[i] + 3}px)`
        : `scale(${this.state.msScale[i] * 0.7}) translateY(${this.state
            .msTransY[i] - 10}px)`;
      const transformText = isSmallScreen()
        ? `scale(${this.state.msScale[i] * 0.4})`
        : `scale(${this.state.msScale[i] * 0.5})`;

      return (
        <div key={i}>
          <img
            src={item.compLogo}
            className={styles.companyLogo}
            style={{
              left: isSmallScreen() ? offsetLeft + 10 : offsetLeft,
              opacity: this.state.msOpacities[i],
              transform: transformLogo,
              boxShadow:
                this.state.msOpacities[i] > 0.6
                  ? "0px 0px 20px 1px rgba(207, 207, 207, 0.795)"
                  : ""
            }}
            alt="logo"
            onClick={() => this.handleClickLogo(i)}
          />
          <p
            className={styles.fromYear}
            style={{
              left: offsetLeft - 18,
              opacity: this.state.msOpacities[i],
              transform: transformText
            }}
            onClick={() => this.handleClickLogo(i)}
          >
            {item.timeFrom}
          </p>
        </div>
      );
    });
  }

  render() {
    return (
      <>
        <input
          className={styles.sliderContainer}
          onChange={e => this.handleChangeSlide(e)}
          onMouseUp={() => this.handleReleaseClick()}
          onTouchEnd={() => this.handleReleaseClick()}
          type="range"
          min={0}
          max={100}
          value={this.state.slideValue}
          id={SECTIONS_ID.YEAR_SLIDE}
        />
        {this.renderMilestonesMarker()}
      </>
    );
  }
}
