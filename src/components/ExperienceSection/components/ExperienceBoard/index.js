import React, { Component } from "react";

// Components
import LazyImage from "../../../../shared/LazyImage";
import companyPlaceHolder from "../../../../style/img/company_logo_ph.png";

// Constants and utils
import { SECTIONS_ID } from "../../../../shared/constants";

import styles from "./style.module.scss";

export default class ExpBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ebHeight: undefined,
      imgToggle: false
    };
  }

  componentDidMount() {
    let qEbHeight = document.querySelector(
      "#" + SECTIONS_ID.EXP_BOARD + this.props.keyBoard
    );

    if (qEbHeight) {
      this.setState({ ebHeight: qEbHeight.getBoundingClientRect().height });
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.reSizeEvent);
  }

  render() {
    return (
      <div
        id={SECTIONS_ID.EXP_BOARD + this.props.keyBoard}
        className={styles.container}
        style={{
          transform: `scale(${this.props.scale}) translateX(${
            this.props.transX
          }px)`,
          opacity: this.props.opacity,
          zIndex: this.props.zIndex
        }}
      >
        <div className={styles.title}>
          <LazyImage
            src={this.props.compLogo}
            className={styles.companyLogo}
            placeholder={companyPlaceHolder}
          />
          <p className={styles.companyName}>{this.props.employer}</p>
          <p className={styles.occupation}>{this.props.designation}</p>
        </div>
        <div
          className={styles.contentContainer}
          style={{
            height: this.state.ebHeight ? this.state.ebHeight - 125 : ""
          }}
        >
          <p className={styles.headerSentence}>{this.props.headSentence}</p>
          {this.props.jDHeader && (
            <p className={styles.jdHeader}>{this.props.jDHeader} :</p>
          )}
          <ul className={styles.jdDetail}>
            {this.props.jobDescription &&
              this.props.jobDescription.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
          </ul>
        </div>
        <div className={styles.footer}>
          <p className={styles.location}>{this.props.location}</p>
          <p className={styles.time}>
            {this.props.timeFrom} - {this.props.timeTo}
          </p>
        </div>
      </div>
    );
  }
}
