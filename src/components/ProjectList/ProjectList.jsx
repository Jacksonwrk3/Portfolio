import React from "react";
import * as styles from "./ProjectList.module.css";
import ProjectCards from "../ProjectCards/ProjectCards";
const ProjectList = (props) => {
  let allProjects = props.projectsArray.map((project) => {
    return (
      <ProjectCards
        projectType={project.projectType}
        projectName={project.projectName}
        projectDescription={project.projectDescription}
        deployedLink={project.deployedLink}
        projectImg={project.imgSrc}
      />
    );
  });
  return <div className={`${props.className}`}>{allProjects}</div>;
};

export default ProjectList;
