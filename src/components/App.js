import React, { Component } from "react";

// Components
import NavBar from "./Navbar";
import Introduction from "./IntroductionSection";
import AboutPage from "./AboutSection";
import Projects from "./ProjectSection";
import Experience from "./ExperienceSection";
import Contact from "./ContactSection";

import "../style/css/style.css";
import "./style.module.scss";
import "../style/animation.css";
import { SECTIONS_ID } from "../shared/constants";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollInterval: undefined,
      showAbout: false,
      showExperience: false,
      showProjects: false,
      showContact: false
    };
  }

  componentDidMount() {
    // Scroll to top
    window.scroll({
      top: 0,
      behavior: "smooth"
    });

    // Interval checking for showing page
    let scrollInterval = setInterval(() => {
      const {
        showAbout,
        showExperience,
        showProjects,
        showContact
      } = this.state;

      // If all true, then stop the interval
      if (showAbout && showExperience && showProjects) {
        clearInterval(this.state.scrollInterval);
        return;
      }

      // Introduction
      let yAbout =
        document.querySelector(`#${SECTIONS_ID.ABOUT}`).getBoundingClientRect()
          .top +
        (window.scrollY * 1) / 2;

      if (window.scrollY >= yAbout && !showAbout) {
        this.setState({ showAbout: true });
      }

      // Experience
      let yExperience =
        document
          .querySelector(`#${SECTIONS_ID.EXPERIENCE}`)
          .getBoundingClientRect().top +
        (window.scrollY * 4) / 5;

      if (window.scrollY >= yExperience && !showExperience) {
        setTimeout(() => this.setState({ showExperience: true }), 400);
      }

      // Projects
      let yProjects =
        document
          .querySelector(`#${SECTIONS_ID.PROJECTS}`)
          .getBoundingClientRect().top +
        (window.scrollY * 4) / 5;

      if (window.scrollY >= yProjects && !showProjects) {
        setTimeout(() => this.setState({ showProjects: true }), 400);
      }

      // Contact
      let yContact = document
        .querySelector(`#${SECTIONS_ID.CONTACT}`)
        .getBoundingClientRect().top;

      if (window.scrollY >= yContact && !showContact) {
        setTimeout(() => this.setState({ showContact: true }), 400);
      }
    }, 100);

    this.setState({ scrollInterval });
  }

  componentWillUnmount() {
    clearInterval(this.state.scrollInterval);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Introduction />
        <AboutPage show={this.state.showAbout} />
        <Experience show={this.state.showExperience} />
        <Projects show={this.state.showProjects} />
        <Contact show={this.state.showContact} />
      </div>
    );
  }
}

export default App;

// TODO: Add Resume view
