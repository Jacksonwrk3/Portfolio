import React from "react";
import * as styles from "./TextButton.module.css";

const TextButton = (props) => {
  return (
    <button
      className={`${styles.textButton} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default TextButton;
