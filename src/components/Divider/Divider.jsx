import React from "react";
import * as styles from "./Divider.module.css";

const Divider = (props) => {
  return <div className={`${styles.sectionDivider} ${props.className}`}></div>;
};

export default Divider;
