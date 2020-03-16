import React, { Component } from "react";

import styles from "./style.module.scss";

export default class FallingLeaf extends Component {
  constructor(props) {
    super(props);

    const { initOffset, containerId, delay } = this.props;

    this.state = {
      leafId: `${containerId}-${initOffset}-${delay}-${Math.floor(
        Math.random() * 100
      )}`,
      loaded: false,
      imgToggle: false,
      running: true,
      leafFallingInterval: undefined,
      leafRotateInterval: undefined,
      leafSwingInterval: undefined,
      leafPosition: -80,
      leafOffsetLeft: this.props.initOffset,
      leafOffsetRange: 2,
      leafRotateMax: 40,
      leafRotate: 40,
      leafRotateChange: -1
    };
  }

  componentDidMount() {
    this.clearAllIntervals();

    // Set Timeout for delaying
    setTimeout(() => {
      this.setState({ loaded: true }, () => {
        // Prepare the motion
        this.handleMotion();
      });
    }, this.props.delay);
  }

  componentWillUnmount() {
    this.clearAllIntervals();
  }

  clearAllIntervals() {
    clearInterval(this.state.leafFallingInterval);
    clearInterval(this.state.leafRotateInterval);
    clearInterval(this.state.leafSwingInterval);
  }

  handleMotion() {
    let leafFallingInterval = setInterval(
      () => {
        const qLeaf = document.querySelector("#" + this.state.leafId);
        const qContainer = document.querySelector("#" + this.props.containerId);

        if (qLeaf && qContainer) {
          // Check if leaf touch the bottom
          if (
            qLeaf.getBoundingClientRect().top >=
            qContainer.getBoundingClientRect().bottom - 100
          ) {
            // Reset new offset left
            let newLeftOffset = Math.random() * qContainer.clientWidth;

            this.setState({
              leafPosition: -60,
              leafOffsetLeft: newLeftOffset
            });
          }
        }

        this.setState({
          leafPosition: this.state.leafPosition + 1
        });
      },
      this.props.optionSpeed ? this.props.optionSpeed : 5
    );

    // Set interval for rotate leaf
    let leafRotateInterval = setInterval(() => {
      // Set new rotate
      let newRotate = this.state.leafRotate + this.state.leafRotateChange;
      let newRotateChange = this.state.leafRotateChange;

      if (newRotate === this.state.leafRotateMax + 1) {
        newRotate = this.state.leafRotateMax - 1;
        newRotateChange = -1;
      } else if (newRotate === -this.state.leafRotateMax - 1) {
        newRotate = -this.state.leafRotateMax + 1;
        newRotateChange = 1;
      }

      this.setState({
        leafRotate: newRotate,
        leafRotateChange: newRotateChange
      });
    }, 40);

    // Set interval for left offset
    let leafSwingInterval = setInterval(() => {
      let newLeafOffset = this.state.leafOffsetLeft;
      if (this.state.leafRotateChange > 0) {
        newLeafOffset += this.state.leafOffsetRange;
      } else {
        newLeafOffset -= this.state.leafOffsetRange;
      }

      this.setState({
        leafOffsetLeft: newLeafOffset
      });
    }, 15);

    this.setState({
      leafFallingInterval,
      leafRotateInterval,
      leafSwingInterval
    });
  }

  handleEnterLeaf() {
    const qLeaf = document.querySelector("#" + this.state.leafId);

    if (qLeaf) {
      qLeaf.style.opacity = 1;
    }
  }

  handleOutLeaf() {
    const qLeaf = document.querySelector("#" + this.state.leafId);

    if (qLeaf) {
      qLeaf.style.opacity = 0.2;
    }
  }

  handleOnClick() {
    if (this.state.running) {
      clearInterval(this.state.leafFallingInterval);
      clearInterval(this.state.leafRotateInterval);
      clearInterval(this.state.leafSwingInterval);
      this.setState({ running: false });
    } else {
      this.setState({ running: true }, () => {
        this.handleMotion();
      });
    }
  }

  render() {
    if (window.screen.width <= 576) {
      return null;
    }

    // Only load after delay time
    return !this.state.loaded ? null : (
      <div>
        <img
          id={this.state.leafId}
          src={this.props.srcImg}
          alt={"leaf-falling"}
          className={styles.leaf}
          style={{
            top: this.state.leafPosition + "px",
            left: this.state.leafOffsetLeft + "px",
            transform: `rotate(${this.state.leafRotate}deg)`
          }}
          onMouseEnter={() => this.handleEnterLeaf()}
          onMouseLeave={() => this.handleOutLeaf()}
          onClick={() => this.handleOnClick()}
          onLoad={() => this.setState({ imgToggle: !this.state.imgToggle })}
        />
      </div>
    );
  }
}
