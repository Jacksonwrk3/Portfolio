import React from "react";
import * as styles from "./Projects.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import SectionDivider from "../SectionDivider/SectionDivider";
const Projects = () => {
  return (
    <section className={styles.projectsContainer}>
      <div className={styles.projectsContent}>
        {/* <SectionDivider /> */}

        <SectionHeading>Projects</SectionHeading>
      </div>
    </section>
  );
};

export default Projects;
