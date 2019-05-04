import React, { Component } from 'react';

export default class FallingLeaf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      running: true,
      leafFallingInterval: undefined,
      leafRotateInterval: undefined,
      leafSwingInterval: undefined,
      leafPosition: -80,
      leafOffsetLeft: this.props.initOffset,
      leafOffsetRange: 2,
      leafRotateMax: 40,
      leafRotate: 40,
      leafRotateChange: -1,
    };
  }

  componentDidMount() {
    // Set Timeout for delaying
    setTimeout(() => {
      this.setState({ loaded: true }, () => {
        // Prepare the motion
        this.handleMotion();
      });
    }, this.props.delay);
  }

  componentWillUnmount() {
    clearInterval(this.state.leafFallingInterval);
    clearInterval(this.state.leafRotateInterval);
    clearInterval(this.state.leafSwingInterval);
  }

  handleMotion() {
    let leafFallingInterval = setInterval(() => {
      const qLeaf = document.querySelector("#" + this.props.leafId);
      const aContainer = document.querySelector(this.props.containerClass);

      if (qLeaf) {
        // Check if leaf touch the bottom
        if (qLeaf.getBoundingClientRect().top >= aContainer.clientHeight - 120) {
          // Reset new offset left
          let newLeftOffset = Math.random() * aContainer.clientWidth;

          this.setState({
            leafPosition: -60,
            leafOffsetLeft: newLeftOffset
          })
        }
      }

      this.setState({
        leafPosition: this.state.leafPosition + 1
      });
    }, this.props.optionSpeed ? this.props.optionSpeed : 5);

    // Set interval for rotate leaf
    let leafRotateInterval = setInterval(() => {
      // Set new rotate
      let newRotate = this.state.leafRotate + this.state.leafRotateChange;
      let newRotateChange = this.state.leafRotateChange;

      if (newRotate === this.state.leafRotateMax + 1) {
        newRotate = this.state.leafRotateMax - 1;
        newRotateChange = -1;
      } else if (newRotate === -this.state.leafRotateMax -1) {
        newRotate = -this.state.leafRotateMax + 1;
        newRotateChange = 1;
      }

      this.setState({
        leafRotate: newRotate,
        leafRotateChange: newRotateChange
      });
    }, 40)

    // Set interval for left offset
    let leafSwingInterval = setInterval(() => {
      let newLeafOffset = this.state.leafOffsetLeft;
      if (this.state.leafRotateChange > 0) {
        newLeafOffset += this.state.leafOffsetRange;
      } else {
        newLeafOffset -= this.state.leafOffsetRange;
      }

      this.setState({
        leafOffsetLeft: newLeafOffset,
      });
    }, 15)

    this.setState({
      leafFallingInterval,
      leafRotateInterval,
      leafSwingInterval
    });
  }

  handleEnterLeaf() {
    if (window.screen.width <= 576) {
      return;
    }

    const qLeaf = document.querySelector("#" + this.props.leafId);

    if (qLeaf) {
      qLeaf.style.opacity = 1
    }
  }

  handleOutLeaf() {
    if (window.screen.width <= 576) {
      return;
    }

    const qLeaf = document.querySelector("#" + this.props.leafId);

    if (qLeaf) {
      qLeaf.style.opacity = 0.2
    }
  }

  handleOnClick() {
    if (window.screen.width <= 576) {
      return;
    }

    if (this.state.running) {
      clearInterval(this.state.leafFallingInterval);
      clearInterval(this.state.leafRotateInterval);
      clearInterval(this.state.leafSwingInterval);
      this.setState({ running: false })
    } else {
      this.setState({ running: true }, () => {
        this.handleMotion();
      })
    }
  }

  render() {
    // Only load after delay time
    if (this.state.loaded) {
      return (
        <div>
          <img
            id={this.props.leafId}
            src={this.props.srcImg}
            alt={"leaf-falling"}
            className="a-leaf-border"
            style={{
              top: this.state.leafPosition + "px",
              left: this.state.leafOffsetLeft + "px",
              transform: `rotate(${this.state.leafRotate}deg)`
            }}
            onMouseEnter={() => this.handleEnterLeaf()}
            onMouseLeave={() => this.handleOutLeaf()}
            onClick={() => this.handleOnClick()}
          />
        </div>
      );
    } else {
      return <div />;
    }
  }
};

// Mini game pick leaf
