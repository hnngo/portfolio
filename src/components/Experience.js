import React, { Component } from 'react';
import { ComponentTitle } from '../utilities/ComponentTitle';
import ExpBoard from '../utilities/ExpBoard';

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
        </div>
      </div>
    );
  }
}
