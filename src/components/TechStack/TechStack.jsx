import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import * as styles from "./TechStack.module.css";

const TechStack = () => {
  return (
    <section className={styles.techStackContainer}>
      <div className={styles.techStackContent}>
        <div className={styles.techStackLeft}>
          {" "}
          <SectionHeading>Tech Stack</SectionHeading>
        </div>
        <div className={styles.techStackRight}></div>
      </div>
    </section>
  );
};

export default TechStack;
