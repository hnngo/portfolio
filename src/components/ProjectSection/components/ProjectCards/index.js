import * as React from "react";

import { PROJECT_INFO } from "../../../../data";

const ProjectCards = ({ animation, onClickBoard }) => {
  return (
    <div className="row">
      {PROJECT_INFO.map((item, i) => (
        <div key={i} className={`col-md-4 col-sm-6 animated ${animation} fast`}>
          <div className="p-pc-container" onClick={e => onClickBoard(i, e)}>
            <img src={item.bannerImg} alt="projects-banner" />
            <p className="p-pc-name">{item.name}</p>
            <p className="p-pc-des">{item.description}</p>
            <div className="p-pc-icon">
              {item.website.length > 0 ? (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
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
