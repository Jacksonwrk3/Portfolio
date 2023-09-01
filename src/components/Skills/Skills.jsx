import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import * as styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={styles.skillsContainer} id="Skills">
      <div className={styles.skillContent}>
        <div className={styles.leftSection}>
          <SectionHeading>Skills</SectionHeading>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="javascript.png" alt="javascript icon" />
              </div>
              <span>Javascript</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="react.png" alt="react icon" />
              </div>
              <span>React</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="html.png" alt="html icon" />
              </div>
              <span>HTML5</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="css.png" alt="css icon" />
              </div>
              <span>CSS3</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="nodejs.png" alt="nodejs icon" />
              </div>
              <span>NodeJS</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="postgres.png" alt="postgres icon" />
              </div>
              <span>PostgreSQL</span>
            </div>
          </div>

          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="mongodb.png" alt="mongodb icon" />
              </div>
              <span>MongoDB</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="express.png" alt="express icon" />
              </div>
              <span>expressJS</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="git.png" alt="git icon" />
              </div>
              <span>git</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="typescript.png" alt="typescript icon" />
              </div>
              <span>Typescript</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="nextjs.png" alt="nextjs icon" />
              </div>
              <span>NextJS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
