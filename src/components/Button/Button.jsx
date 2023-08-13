import React from "react";
import * as styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${
        props.variant === "primary" ? styles.primary : styles.secondary
      } ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
