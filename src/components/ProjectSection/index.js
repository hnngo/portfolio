import React from "react";

// Components
import SectionTitle from "../../shared/SectionTitle";
import ProjectCards from "./components/ProjectCards";
import ProjectDetail from "./components/ProjectDetail";

// Utils and constants
import { SECTIONS_ID } from "../../shared/constants";

import styles from "./style.module.scss";

const Projects = ({ show }) => {
  const [boardView, setBoardView] = React.useState(true);
  const [boardSelect, setBoardSelect] = React.useState(undefined);
  const [boardAnimation, setBoardAnimation] = React.useState("fadeIn");
  const [thumbnailsAnimation, setThumbnailsAnimation] = React.useState("slideInLeft");
  const [slideLeftAnimation, setSlideLeftAnimation] = React.useState("slideInLeft");
  const [slideRightAnimation, setSlideRightAnimation] = React.useState("slideInRight");

  const handleClickBoard = (index) => {
    // Set selected project and change view mode
    setBoardSelect(index);
    setBoardAnimation("fadeOut");
    setTimeout(() => {
      setBoardView(false);
      setSlideLeftAnimation("slideInLeft");
      setThumbnailsAnimation("slideInLeft");
      setSlideRightAnimation("slideInRight");
    }, 800);
  }

  const handleClickThumbnail = (index) => {
    // Check if click a already selected board
    if (boardSelect === index) {
      return;
    }

    setBoardSelect(index);
    setSlideLeftAnimation("fadeOutLeft");
    setSlideRightAnimation("fadeOutRight");
    setTimeout(() => {
      setSlideLeftAnimation("slideInLeft");
      setSlideRightAnimation("slideInRight");
    }, 800)
  }

  const handleClickBackToBoards = () => {
    // Animation fadeOut then fadeIn back to board view
    setSlideLeftAnimation("fadeOutLeft");
    setThumbnailsAnimation("fadeOutLeft");
    setSlideRightAnimation("fadeOutRight");
    setTimeout(() => {
      setBoardSelect(undefined);
      setBoardAnimation("fadeIn");
      setBoardView(true);
    }, 1000)
  }


  return (
    <div id={SECTIONS_ID.PROJECTS} className={styles.container}>
      {show && (
        <div className="container">
          <SectionTitle title="Projects" icon="fab fa-stumbleupon-circle" />
          {boardView ? (
            <ProjectCards
              animation={boardAnimation}
              onClickBoard={(i, e) => handleClickBoard(i, e)}
            />
          ) : (
            <ProjectDetail
              animation={thumbnailsAnimation}
              selectedIndex={boardSelect}
              onClickThumbnail={i => handleClickThumbnail(i)}
              onClickBackToBoardView={() => handleClickBackToBoards()}
              slideLeftAnimation={slideLeftAnimation}
              slideRightAnimation={slideRightAnimation}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Projects;
