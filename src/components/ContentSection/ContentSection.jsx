import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import * as styles from "./ContentSection.module.css";

const ContentSection = (props) => {
  return (
    <section className={`${styles.section} ${props.className}`}>
      <div className={`${styles.sectionLeft} ${props.leftClassName}`}>
        <SectionHeading>{props.sectionTitle} </SectionHeading>
      </div>
      <div className={`${styles.sectionRight} ${props.rightClassName}`}>
        {props.children}
      </div>
    </section>
  );
};

export default ContentSection;
