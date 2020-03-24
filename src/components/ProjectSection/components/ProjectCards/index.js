import * as React from "react";

// Utils and constants
import cx from "classnames";
import { PROJECT_INFO } from "../../../../data";

import styles from "./style.module.scss";

const ProjectCards = ({ animation, onClickBoard }) => {
  const [imgToggle, setImgToggle] = React.useState(false);

  return (
    <div className={cx(styles.container, "row")}>
      {PROJECT_INFO.map((item, i) => (
        <div key={i} className={`col-md-4 col-sm-6 animated ${animation} fast`}>
          <div className={styles.cardContainer} onClick={() => onClickBoard(i)}>
            <img
              className={styles.projectThumbnail}
              src={item.bannerImg}
              alt="projects-banner"
              data-toggle={imgToggle}
              onLoad={() => setImgToggle(!imgToggle)}
            />
            <p className={styles.projectTitle}>{item.name}</p>
            <p className={styles.projectDescriptrion}>{item.description}</p>
            <div className={styles.projectFooter}>
              {item.website.length > 0 ? (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                >
                  <i className="fas fa-external-link-alt" />
                </a>
              ) : (
                <div />
              )}
              {item.githubLink.length > 0 && (
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                >
                  <i className="fab fa-github" />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
