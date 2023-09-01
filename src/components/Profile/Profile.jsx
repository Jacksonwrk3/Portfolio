import React from "react";
import * as styles from "./Profile.module.css";
const Profile = () => {
  return (
    <section className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <div className={styles.leftContainer}></div>
        <div className={styles.rightContainer}></div>
      </div>
    </section>
  );
};

export default Profile;
