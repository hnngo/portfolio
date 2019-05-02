import React, { Component } from 'react';
import { ComponentTitle } from '../utilities/ComponentTitle';
import ExpBoard from '../utilities/ExpBoard';
import YearSlider from '../utilities/YearSlider';
import data from '../data.json';

export default class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expData: data.experience.expBoard,
      eConHeight: window.innerHeight,
      ebWidtth: 0,
      offset: -70,
      selectedPost: 0,
      boardScale: [],
      boardOpacity: [],
      boardZindex: [],
      boardOffset: [],
      boardTransX: [],
      boardDirection: [],
    };
  }

  componentDidMount() {
    // Initial setup style
    let boardScale = this.state.expData.map((item, i) => 1 - i * 0.1);
    let boardOpacity = this.state.expData.map(() => 0.3);
    boardOpacity[0] = 1;
    let boardZindex = this.state.expData.map((item, i) => this.state.expData.length - i);
    let boardOffset = this.state.expData.map((item, i) => i * (this.state.offset));
    let boardDirection = this.state.expData.map(() => "left");
    boardDirection[0] = "middle";

    // Update transX
    const qBoardWidth = document.querySelector(".eb-container").clientWidth;

    let boardTransX = boardScale.map((item, i) => {
      let realSize = qBoardWidth * (+item);
      let deltaSize = (qBoardWidth - realSize) / 2;

      // return deltaSize;
      return -(deltaSize + i * 68);
    });
    console.log(boardTransX)
    this.setState({
      ebWidtth: qBoardWidth,
      boardScale,
      boardOpacity,
      boardZindex,
      boardOffset,
      boardTransX,
      boardTransXOrigin: boardTransX,
      boardDirection
    })
  }

  // Handle slide animation
  handleSelectMS(selectedVal, arrVals) {
    let numberOfData = data.experience.expBoard.length - 1;

    // Convert the data follow the direction 0 > max
    let convertedVal = (selectedVal / 100) * -numberOfData + numberOfData;
    console.log(convertedVal)

    let boardScale = this.state.boardScale;
    let boardOpacity = this.state.boardOpacity;
    let boardZindex = this.state.boardZindex;
    let boardTransX = [...this.state.boardTransX];
    let boardTransXOrigin = this.state.boardTransXOrigin;

    console.log(boardTransXOrigin)
    this.state.expData.forEach((item, i) => {
      let delta = Math.abs(i - convertedVal);
      let signedDelta = i - convertedVal;

      // Update opacity, zIndex
      let deltaOpacity = (1 - 0.1);
      let deltaZindex = (5 - 4);
      let deltaTransX;

      if (delta < 1) {
        boardOpacity[i] = 1 - (delta * deltaOpacity);
        boardZindex[i] = Math.round(5 - (delta * deltaZindex));
        deltaTransX = boardTransXOrigin[1];
      } else if (signedDelta < 0) {
        deltaTransX = boardTransXOrigin[Math.floor(convertedVal) - i] - boardTransXOrigin[Math.floor(convertedVal) - i - 1];
      } else {
        deltaTransX = boardTransXOrigin[i] - boardTransXOrigin[i - 1];
      }

      // Update scale
      boardScale[i] = 1 - (delta * 0.1);

      // Update transX
      boardTransX[i] = deltaTransX * signedDelta;
    });

    console.log(boardTransX)
    this.setState({
      boardScale,
      boardOpacity,
      boardZindex,
      boardTransX
    })
  }

  renderExpBoard() {
    return this.state.expData.map((item, i) => {
      return (
        <ExpBoard
          key={i}
          employer={item.employer}
          designation={item.designation}
          compLogo={require(`../style/img/${item.compLogo}`)}
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
          offset={this.state.boardOffset[i]}
          offsetDirection={this.state.boardDirection[i]}
        />
      );
    })
  }

  render() {
    return (
      <div
        className="e-container"
        style={{ height: this.state.eConHeight }}
      >
        <div className="container">
          <ComponentTitle
            title="Experience"
            icon="fas fa-history"
            optionalColor="rgb(236, 236, 236)"
          />
          <div>
            {this.renderExpBoard()}
          </div>
          <div className="e-yearSlider">
            <YearSlider
              range={[2009, 2019]}
              milestones={[
                {
                  id: 0,
                  fromTime: "08/2009",
                  toTime: "05/2012",
                  employer: "High School for the Gifted - Vietnam National Univeristy",
                  logo: "ptnk_logo.jpg",
                  designation: "Student"
                },
                {
                  id: 1,
                  fromTime: "08/2012",
                  toTime: "04/2017",
                  employer: "Ho Chi Minh city Univeristy of Technology",
                  logo: "hcmut_logo.png",
                  designation: "Student"
                },
                {
                  id: 2,
                  fromTime: "06/2016",
                  toTime: "09/2016",
                  employer: "MobiFone Testing and Maintenance Center",
                  logo: "mobifone_logo.png",
                  designation: "Internship Research Engineer"
                },
                {
                  id: 3,
                  fromTime: "05/2017",
                  toTime: "10/2017",
                  employer: "Fiot Co. LTD",
                  logo: "fiot_logo.jpg",
                  designation: "Embedded Firmware Development Engineer"
                },
                {
                  id: 4,
                  fromTime: "05/2018",
                  toTime: "present",
                  employer: "Nanyang Technological University",
                  logo: "ntu_logo.png",
                  designation: "Research Engineer"
                }
              ]}
              onSelectMS={(selectedVal, arrVals) => this.handleSelectMS(selectedVal, arrVals)}
            />
          </div>
        </div>
      </div>
    );
  }
}
