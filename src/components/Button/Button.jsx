import React from "react";
import * as styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${
        props.variant === "primary" ? styles.primary : styles.secondary
      } ${props.className}`}
      onClick={props.onClick ? props.onClick : () => {}}
      style={props.style}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
