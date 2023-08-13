import React from "react";
import * as styles from "./Banner.module.css";
const Banner = (props) => {
  return (
    <div className={styles.wrapper}>
      <img src={props.imgSrc} alt={props.alt} className={styles.bannerImage} />
    </div>
  );
};

export default Banner;
