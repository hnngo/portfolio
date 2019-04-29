import React, { Component } from 'react';

export default class FallingLeaf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      leafFallingInterval: undefined,
      leafPosition: -80,
      leafOffsetLeft: this.props.initOffset,
      leafRangeDir: 200,
      leafRotate: 20,
      leafRotateChange: -1,
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    // Set Timeout for delaying
    setTimeout(() => {
      this.setState({ loaded: true }, () => {
        // Prepare the motion
        let leafFallingInterval = setInterval(() => {
          const qLeaf = document.querySelector("#" + this.props.leafId);
          const aContainer = document.querySelector(this.props.containerClass);

          if (qLeaf) {
            // Check if leaf touch the bottom
            if (qLeaf.getBoundingClientRect().top >= aContainer.clientHeight - 120) {
              // Reset new offset left
              let newLeftOffset = Math.random() * aContainer.clientWidth;

              console.log(newLeftOffset)
              this.setState({
                leafPosition: -60,
                leafOffsetLeft: newLeftOffset
              })
            }
          }

          this.setState({
            leafPosition: this.state.leafPosition + 2
          });
        }, 20);

        // Set interval for rotate leaf
        setInterval(() => {
          // Set new rotate
          let newRotate = this.state.leafRotate + this.state.leafRotateChange;
          let newRotateChange = this.state.leafRotateChange;

          if (newRotate === 21) {
            newRotate = 19;
            newRotateChange = -1;
          } else if (newRotate === -21) {
            newRotate = -19;
            newRotateChange = 1;
          }

          this.setState({
            leafRotate: newRotate,
            leafRotateChange: newRotateChange
          });
        }, 80)

        // Set interval for left offset
        setInterval(() => {
          let newLeafOffset = this.state.leafOffsetLeft;
          if (this.state.leafRotateChange > 0) {
            newLeafOffset += 2;
          } else {
            newLeafOffset -= 2;
          }

          this.setState({
            leafOffsetLeft: newLeafOffset,
          });
        }, 20)

        this.setState({ leafFallingInterval });

      });
    }, this.props.delay);
  }

  componentWillUnmount() {
    clearInterval(this.state.leafFallingInterval);
  }

  render() {
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
          />
        </div>
      );
    } else {
      return <div />;
    }
  }
};
