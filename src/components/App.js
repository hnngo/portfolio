import React, { Component } from "react";

// Components
import NavBar from "./Navbar";
import Introduction from "./IntroductionSection";
import AboutPage from "./AboutSection";
import Projects from "./ProjectSection";
import Experience from "./ExperienceSection";
import Contact from "./ContactSection";

// import "../style/css/style.css";
import "./style.module.scss";
import "../style/animation.css";
import { SECTIONS_ID } from "../shared/constants";

const App = () => {
  const [scrollInterval, setScrollInterval] = React.useState(undefined);
  const [showAbout, setShowAbout] = React.useState(false);
  const [showExperience, setShowExperience] = React.useState(false);
  const [showProjects, setShowProjects] = React.useState(false);
  const [showContact, setShowContact] = React.useState(false);

  React.useEffect(() => {
    // Scroll to top
    window.scroll({
      top: 0,
      behavior: "smooth"
    });

    // Interval checking for showing page
    let scrollIntervalAssign = setInterval(() => {
      // If all true, then stop the interval
      if (showAbout && showExperience && showProjects) {
        clearInterval(scrollInterval);
        return;
      }

      // Introduction
      let yAbout =
        document.querySelector(`#${SECTIONS_ID.ABOUT}`).getBoundingClientRect()
          .top +
        (window.scrollY * 1) / 2;

      if (window.scrollY >= yAbout && !showAbout) {
        setShowAbout(true);
      }

      // Experience
      let yExperience =
        document
          .querySelector(`#${SECTIONS_ID.EXPERIENCE}`)
          .getBoundingClientRect().top +
        (window.scrollY * 4) / 5;

      if (window.scrollY >= yExperience && !showExperience) {
        setTimeout(() => setShowExperience(true), 400);
      }

      // Projects
      let yProjects =
        document
          .querySelector(`#${SECTIONS_ID.PROJECTS}`)
          .getBoundingClientRect().top +
        (window.scrollY * 4) / 5;

      if (window.scrollY >= yProjects && !showProjects) {
        setTimeout(() => setShowProjects(true), 400);
      }

      // Contact
      let yContact = document
        .querySelector(`#${SECTIONS_ID.CONTACT}`)
        .getBoundingClientRect().top;

      if (window.scrollY >= yContact && !showContact) {
        setTimeout(() => setShowContact(true), 400);
      }
    }, 100);

    setScrollInterval(scrollIntervalAssign)

    return () => {
      clearInterval(scrollInterval);
    }
  }, []);

  return (
    <div>
      <NavBar />
      <Introduction />
      <AboutPage show={showAbout} />
      <Experience show={showExperience} />
      <Projects show={showProjects} />
      <Contact show={showContact} />
    </div>
  );
}

export default App;

// TODO: Add Resume view
