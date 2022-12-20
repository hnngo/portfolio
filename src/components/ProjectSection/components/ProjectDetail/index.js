import React from "react";

// Components
import LazyImage from "../../../../shared/LazyImage";
import devicePlaceholder from "../../../../style/img/device_ph.png";
import porjectThumbnailPlaceholder from "../../../../style/img/project_thumbnail_ph.png";

// Constants and utils
import cx from "classnames";
import { PROJECT_INFO, TECH_LOGO } from "../../../../data";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { SECTIONS_ID } from "../../../../shared/constants";

import styles from "./style.module.scss";

const ProjectDetail = ({
  animation,
  selectedIndex,
  onClickThumbnail,
  onClickBackToBoardView,
  slideLeftAnimation,
  slideRightAnimation
}) => {
  const renderProjectDetail = () => {
    if (selectedIndex !== undefined) {
      let board = PROJECT_INFO[selectedIndex];

      return (
        <div className={styles.detailContainer}>
          <div className="row">
            <div className={`col-md-6 animated ${slideLeftAnimation} fast`}>
              <div className="d-flex justify-content-between">
                <p className={styles.detailTitle}>{board.name}</p>
                <div className={styles.detailView}>
                  {board.website.length > 0 && (
                    <a
                      className={styles.viewLink}
                      href={board.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt" />
                      <p>View Online</p>
                    </a>
                  )}
                </div>
              </div>
              <p className={styles.detailDescription}>{board.description}</p>
              <ul className={styles.detailList}>
                {board.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className={styles.detailTech}>Technologies/Libraries</p>
              {board.technologies.map((item, i) => {
                return (
                  <div key={i} className={styles.detailTechLogoWrapper}>
                    <LazyImage
                      className={styles.detailTechLogo}
                      src={TECH_LOGO[item]}
                      data-tip={item}
                      data-for={SECTIONS_ID.TECH_TOOLTIP + i}
                    />
                    <ReactTooltip id={SECTIONS_ID.TECH_TOOLTIP + i} />
                  </div>
                );
              })}
              <div className={styles.detailView}>
                {board.website.length > 0 && (
                  <a
                    className={styles.viewLink}
                    href={board.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt" />
                    <p>View Online</p>
                  </a>
                )}
                {board.githubLink.length > 0 && (
                  <a
                    className={styles.viewLink}
                    href={board.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" />
                    <p>View Code</p>
                  </a>
                )}
              </div>
            </div>
            <div className={`col-md-6 animated ${slideRightAnimation} fast`}>
              <div className={styles.detailDevices}>
                <LazyImage
                  src={board.devices}
                  placeholder={devicePlaceholder}
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <div className={styles.metaContainer}>
        {/* Project Thumbnail Image Slider */}
        {PROJECT_INFO.map((item, i) => (
          <div
            className={cx(styles.thumbnailSlider, `animated ${animation} fast`)}
            key={i}
          >
            <LazyImage
              className={cx(
                styles.thumbnailImage,
                i === selectedIndex && styles.selectedImage
              )}
              src={item.bannerImg}
              onClick={() => onClickThumbnail(i)}
              placeholder={porjectThumbnailPlaceholder}
            />
          </div>
        ))}
        <div
          className={cx(styles.backToBoardButton, `animated ${animation} fast`)}
          onClick={onClickBackToBoardView}
        >
          <i className="fas fa-arrow-left" />
          <p>Back to boards</p>
        </div>
      </div>
      {renderProjectDetail()}
    </div>
  );
};

export default ProjectDetail;

// TODO: Add placeholder for Image
