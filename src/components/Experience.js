import React, { Component } from 'react';
import { ComponentTitle } from '../utilities/ComponentTitle';
import ExpBoard from '../utilities/ExpBoard';
import YearSlider from '../utilities/YearSlider';

export default class Experience extends Component {
  render() {
    return (
      <div className="e-container">
        <div className="container">
          <ComponentTitle
            title="Experience"
            icon="fas fa-history"
            optionalColor="rgb(236, 236, 236)"
          />
          <div>
            <ExpBoard
              employer="Nanyang Technological University"
              designation="Research Engineer"
              compLogo={require("../style/img/ntu_logo.png")}
              headSentence={"Currently, I am working as a Research Engineer in School of Electrical and Electronics Engineering at Nangyang Technological University, Singapore. My research topic is about Control and Controllability of Dynamic Complex Networks: Theories and Strategies"}
              jDHeader="Ongoing Research Topics"
              jobDescription={[
                "Counter controllability by removing the critical nodes in maximum matching paths",
                "Majority Control of Directed Networks based on Network Flow problems",
                "Preventing network crash in KQ-model by applying cherished links to a certain number of edges"
              ]}
              location="Jurong West, Singapore"
              timeFrom="May 2018"
              timeTo="Present"
            />
          </div>
          <div className="e-yearSlider">
            <YearSlider
              range={[2009, 2019]}
              milestones={[
                {
                  fromTime: "08/2009",
                  toTime: "05/2012",
                  employer: "High School for the Gifted - Vietnam National Univeristy",
                  designation: "Student"
                },
                {
                  fromTime: "08/2012",
                  toTime: "04/2017",
                  employer: "Ho Chi Minh city Univeristy of Technology",
                  designation: "Student"
                },
                {
                  fromTime: "06/2016",
                  toTime: "09/2016",
                  employer: "MobiFone Testing and Maintenance Center",
                  designation: "Internship Research Engineer"
                },
                {
                  fromTime: "05/2017",
                  toTime: "10/2017",
                  employer: "Fiot Co. LTD",
                  designation: "Embedded Firmware Development Engineer"
                },
                {
                  fromTime: "05/2018",
                  toTime: "present",
                  employer: "Nanyang Technological University",
                  designation: "Research Engineer"
                }
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}
