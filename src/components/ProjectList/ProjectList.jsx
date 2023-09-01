import React from "react";
import ProjectCards from "../ProjectCards/ProjectCards";
const ProjectList = (props) => {
  console.log("in projhects list ", props);
  let allProjects = props.projectsArray.map((project) => {
    return (
      <ProjectCards
        projectType={project.projectType}
        projectName={project.projectName}
        projectDescription={project.projectDescription}
        deployedLink={project.deployedLink}
        githubLink={project.githubLink}
        projectImg={project.imgSrc}
      />
    );
  });
  return <div className={`${props.className}`}>{allProjects}</div>;
};

export default ProjectList;
