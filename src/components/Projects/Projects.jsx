import React, { useState } from "react";
import * as styles from "./Projects.module.css";
import ProjectList from "../ProjectList/ProjectList";
import SectionHeading from "../SectionHeading/SectionHeading";
import Button from "../Button/Button";
const Projects = () => {
  const projects = [
    {
      imgSrc: "Atelier.png",
      projectType: "Front End",
      projectName: "Atelier",
      projectDescription: "Modern product detail page for an e-commerce site",
      githubLink: "https://github.com/Jacksonwrk3/Atelier",
    },

    {
      imgSrc: "excel.png",
      projectType: "Back End",
      projectName: "Product API Microservice",
      projectDescription:
        "RESTful products detail data microservice API for ecommerce site",
      githubLink: "https://github.com/SDCBlueWhale/Questions-Answers-Services",
    },
    {
      imgSrc: "Musi.png",
      projectType: "Full Stack",
      projectName: "Musi",
      projectDescription:
        "A social media platform for musicians to network and create music async",
      githubLink: "https://github.com/Jacksonwrk3/Musi",
    },
    {
      imgSrc: "motion.png",

      projectType: "Front End",
      projectName: "Motion",
      projectDescription: "Notion inspired task mangement system ",
      githubLink: "https://github.com/Jacksonwrk3/Motion",
    },
  ];
  const [display, setDisplay] = useState(projects);
  const [clickedButton, setClickedButton] = useState("All");

  const clickedStyle = {
    backgroundColor: "#fb8500",
    color: "white",
  };
  const filterProjects = (filterValue, allProjects) => {
    let filteredProjects = [];
    allProjects.forEach((project) => {
      if (filterValue === project.projectType) {
        filteredProjects.push(project);
      }
    });
    setDisplay(filteredProjects);
  };
  return (
    <section className={styles.projectsContainer} id="Projects">
      <div className={styles.projectsContent}>
        <div className={styles.leftDiv}>
          <SectionHeading>Projects</SectionHeading>
          <div className={styles.projectButtonGroup}>
            <div>
              <Button
                onClick={() => {
                  setClickedButton("Front End");
                  filterProjects("Front End", projects);
                }}
                style={clickedButton === "Front End" ? clickedStyle : null}
              >
                Front End
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {
                  setClickedButton("Back End");
                  filterProjects("Back End", projects);
                }}
                style={clickedButton === "Back End" ? clickedStyle : null}
              >
                Back End
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {
                  setClickedButton("Full Stack");
                  filterProjects("Full Stack", projects);
                }}
                style={clickedButton === "Full Stack" ? clickedStyle : null}
              >
                Full Stack
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {
                  setClickedButton("All");
                  setDisplay(projects);
                }}
                style={clickedButton === "All" ? clickedStyle : null}
              >
                All
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.rightDiv}>
          <ProjectList
            className={styles.projectLayout}
            projectsArray={display}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
