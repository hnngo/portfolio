import React, { Component } from 'react';

export default class YearSlider extends Component {
  constructor(props) {
    super(props);

    // Prepare milestones
    let numberOfMilestones = this.props.milestones.length;
    let milestonesRange = Math.floor(100 / (numberOfMilestones - 1));
    let valueMilestones = [];
    this.props.milestones.forEach((item, i) => {
      if (i === 0) {
        valueMilestones.push(0);
      } else if (i === numberOfMilestones - 1) {
        valueMilestones.push(100);
      } else {
        valueMilestones.push(valueMilestones[valueMilestones.length - 1] + milestonesRange);
      }
    });

    // Init opacity, scale and translate
    let msOpacities = this.props.milestones.map(() => 0.3);
    let msScale = this.props.milestones.map(() => 1);
    let msTransY = this.props.milestones.map(() => 0);

    this.state = {
      reSizeEvent: undefined,
      imgToggle: false,
      currentWidth: 0,
      slideInterval: undefined,
      slideValue: 100,
      sliderWidth: undefined,
      valueMilestones,
      milestonesRange,
      msOpacities,
      msScale,
      msTransY,
      markerOffsetLeft: undefined,
    }
  }

  componentDidMount() {
    // Update offset for marker
    const reSizeEvent = setInterval(() => {
      let currentWidth = window.screen.width;

      if (currentWidth !== this.state.currentWidth) {
        const qYS = document.querySelector('#yearSlider');
        const qEContainer = document.querySelector('.e-container .container');

        if (qYS && qEContainer) {
          this.setState({
            markerOffsetLeft: qYS.getBoundingClientRect().left - qEContainer.getBoundingClientRect().left - 20,
            sliderWidth: qYS.getBoundingClientRect().width
          })
        }
      }
    }, 300);

    this.setState({ reSizeEvent }, () => {
      // Update initial selection
      this.updateSelectMilestones();
    })
  }

  // Input a num and sorted array
  // Output the two elements nearest
  selectNearestElem(num, arr) {
    if (num < arr[0] || num > arr[arr.length - 1]) {
      return false;
    }

    let twoNearestElems = [];
    arr.forEach((item) => {
      if (item <= num) {
        twoNearestElems[0] = item;
      } else if (item >= num && twoNearestElems.length === 1) {
        twoNearestElems[1] = item;
      }
    });

    return twoNearestElems;
  }

  handleChangeSlide(e) {
    this.setState({
      slideValue: +e.target.value
    }, () =>
        this.updateSelectMilestones());
  }

  handleReleaseClick() {
    clearInterval(this.state.slideInterval);

    // Check if slider stop at right points
    if (this.state.valueMilestones.includes(this.state.slideValue)) {
      return;
    }

    // Get two nearest points
    let value = this.state.slideValue;
    let twoNearestElems = this.selectNearestElem(value, this.state.valueMilestones);

    if (value - twoNearestElems[0] < twoNearestElems[1] - value) {
      value = twoNearestElems[0]
    } else {
      value = twoNearestElems[1]
    }

    // Select the nearest point in milestones pos
    let delta = value > this.state.slideValue ? 1 : -1;

    // Animation slide
    let slideInterval = setInterval(() => {
      if (this.state.valueMilestones.includes(this.state.slideValue + delta)) {
        clearInterval(this.state.slideInterval);
      }

      this.setState({
        slideValue: +this.state.slideValue + delta
      }, () => this.updateSelectMilestones());
    }, 20);

    this.setState({ slideInterval })
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
        let deltaScale = (2 - 1) / this.state.milestonesRange;
        let deltaTransY = (-10 - 0) / this.state.milestonesRange;

        newOpacities[i] = 1 - (delta * deltaOpacity);
        newScales[i] = 2 - (delta * deltaScale);
        newTransY[i] = -10 - (delta * deltaTransY);
      }
    });

    // Update for Experience Component
    this.props.onSelectMS(this.state.slideValue);

    this.setState({ msOpacities: newOpacities })
  }

  handleClickLogo(i) {
    this.setState({
      slideValue: this.state.valueMilestones[i]
    }, () =>
        this.updateSelectMilestones());
  }

  renderMilestonesMarker() {
    if (this.state.markerOffsetLeft === undefined) {
      return <div />;
    }

    let offsetRange = (this.state.sliderWidth - this.state.milestonesRange) / (this.props.milestones.length - 1);

    return this.props.milestones.map((item, i) => {
      let offsetLeft;
      if (i === this.props.milestones.length - 1) {
        offsetLeft = this.state.markerOffsetLeft + this.state.sliderWidth - 28;
      } else {
        offsetLeft = this.state.markerOffsetLeft + i * offsetRange;
      }

      return (
        <div key={i}>
          <img
            src={item.logo}            className="ys-ms-logo"
            style={{
              left: offsetLeft,
              opacity: this.state.msOpacities[i],
              transform: `scale(${this.state.msScale[i]}) translateY(${this.state.msTransY[i]}px)`,
              boxShadow: this.state.msOpacities[i] > 0.6 ? "0px 0px 20px 1px rgba(207, 207, 207, 0.795)" : ""
            }}
            alt="logo"
            onClick={() => this.handleClickLogo(i)}
            onLoad={() => this.setState({ imgToggle: !this.state.imgToggle })}
          />
          <p
            className="ys-ms-fromYear"
            style={{
              left: offsetLeft - 18,
              opacity: this.state.msOpacities[i], transform: `scale(${this.state.msScale[i] * 0.75})`,
            }}
            onClick={() => this.handleClickLogo(i)}
          >
            {item.fromTime}
          </p>
        </div>
      );
    })
  }

  render() {
    return (
      <div className="ys-container">
        <input
          onChange={(e) => this.handleChangeSlide(e)}
          onMouseUp={() => this.handleReleaseClick()}
          onTouchEnd={() => this.handleReleaseClick()}
          type="range"
          min={0}
          max={100}
          value={this.state.slideValue}
          className="ys-slider"
          id="yearSlider"
        />
        {this.renderMilestonesMarker()}
      </div>
    );
  }
}
