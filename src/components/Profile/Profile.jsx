import React from "react";
import * as styles from "./Profile.module.css";
import Banner from "../Banner/Banner";
const Profile = (props) => {
  return (
    <section className={styles.profileContainer}>
      <Banner imgSrc={props.imgSrc} alt={props.alt} pfp={props.pfp} />
      <img src={props.pfp} alt="user" className={styles.pfp} />
      <div className={styles.profileDetail}>
        <b className={styles.name}>Jackson Zhu</b>
        <p className={styles.description}>
          I'm a Full Stack Developer based in New York 👋🏻
        </p>
      </div>
      <div className={styles.borderBottom}></div>
    </section>
  );
};

export default Profile;
