import React from "react";
import * as styles from "./Cards.module.css";

const Cards = (props) => {
  return (
    <article className={`${styles.card} ${props.className}`}>
      {props.children}
    </article>
  );
};

export default Cards;
