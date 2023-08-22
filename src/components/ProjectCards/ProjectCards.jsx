import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Cards from "../Cards/Cards";
import * as styles from "./ProjectCards.module.css";

const ProjectCards = (props) => {
  let deployedSite = (
    <a href={props.deployedLink} className={styles.webLink}>
      <img src="website.png" alt="world wide web" />
    </a>
  );
  return (
    <Cards>
      <article>
        <div className={styles.imgWrapper}>
          <img
            src={props.projectImg}
            alt="Altelier Project"
            className={styles.projectImg}
          />
          <span className={styles.projectType}>{props.projectType}</span>
        </div>
        <SectionHeading className={styles.centerMarginTop}>
          {props.projectName}
        </SectionHeading>
        <p className={styles.projectDescription}>{props.projectDescription}</p>
      </article>
      <div className={styles.linkGroup}>
        <a href={props.githubLink} className={styles.githubLink}>
          <img src="github-mark.png" alt="github icon" />
        </a>
        {props.deployedLink ? deployedSite : null}
      </div>
    </Cards>
  );
};

export default ProjectCards;
