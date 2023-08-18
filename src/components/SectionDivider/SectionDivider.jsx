import React from "react";
import * as styles from "./SectionDivider.module.css";

const SectionDivider = (props) => {
  return <div className={`${styles.sectionDivider} ${props.className}`}></div>;
};

export default SectionDivider;
