import React from "react";
import * as styles from "./SectionHeading.module.css";
const SectionHeading = (props) => {
  return (
    <span className={`${styles.heading} ${props.className}`}>
      {props.children}
    </span>
  );
};

export default SectionHeading;
