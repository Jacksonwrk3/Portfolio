import React from "react";
import * as styles from "./Projects.module.css";
import ProjectList from "../ProjectList/ProjectList";
import SectionHeading from "../SectionHeading/SectionHeading";
const Projects = () => {
  const projects = [
    {
      imgSrc: "Atelier.png",
      projectType: "Front End",
      projectName: "Atelier",
      projectDescription: "Modern product detail page for an e-commerce site",
    },
    {
      imgSrc: "Atelier.png",
      projectType: "Back End",
      projectName: "Product API Microservice",
      projectDescription:
        "RESTful products detail data microservice API for ecommerce site",
    },
    {
      imgSrc: "Atelier.png",
      projectType: "Full Stack",
      projectName: "Musi",
      projectDescription:
        "A social media platform for musicians to network and create music async",
    },
    {
      imgSrc: "Atelier.png",
      projectType: "Front End",
      projectName: "Motion",
      projectDescription: "Notion inspired task mangement system",
    },
  ];
  return (
    <section className={styles.projectsContainer}>
      <div className={styles.projectsContent}>
        <div className={styles.leftDiv}>
          <SectionHeading>Projects</SectionHeading>
        </div>
        <div className={styles.rightDiv}>
          <ProjectList projectsArray={projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
