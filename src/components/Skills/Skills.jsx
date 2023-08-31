import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import * as styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={styles.skillsContainer}>
      <div className={styles.skillContent}>
        <div className={styles.leftSection}>
          <SectionHeading>Skills</SectionHeading>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="javascript.png" />
              </div>
              <span>Javascript</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="react.png" />
              </div>
              <span>React</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="typescript.png" />
              </div>
              <span>Typescript</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="nodejs.png" />
              </div>
              <span>NodeJS</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="postgres.png" />
              </div>
              <span>PostgreSQL</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="html.png" />
              </div>
              <span>HTML5</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="css.png" />
              </div>
              <span>CSS3</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="mongodb.png" />
              </div>
              <span>MongoDB</span>
            </div>
          </div>{" "}
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="express.png" />
              </div>
              <span>expressJS</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="git.png" />
              </div>
              <span>git</span>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridContent}>
              <div className={styles.imgContainer}>
                <img src="nextjs.png" />
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
