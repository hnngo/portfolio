import React, { Component } from 'react';

export default class YearSlider extends Component {
  constructor(props) {
    super(props);

    // Prepare milestones
    console.log(this.props.milestones)
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
    })

    console.log(valueMilestones)

    this.state = {
      slideInterval: undefined,
      slideValue: 100,
      valueMilestones,
    }
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
    // Set new value for slider
    this.setState({
      slideValue: e.target.value
    });
  }

  handleReleaseClick() {
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
      this.setState({
        slideValue: +this.state.slideValue + delta
      }, () => {
        if (this.state.valueMilestones.includes(this.state.slideValue)) {
          clearInterval(this.state.slideInterval);
        }
      });
    }, 20);

    this.setState({ slideInterval })
  }

  render() {
    return (
      <div className="ys-container">
        <input
          onChange={(e) => this.handleChangeSlide(e)}
          onMouseUp={() => this.handleReleaseClick()}
          type="range"
          min={0}
          max={100}
          value={this.state.slideValue}
          className="ys-slider"
          id="myRange"
        />
      </div>
    );
  }
}
