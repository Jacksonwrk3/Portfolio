import React from "react";
import * as styles from "./AboutMe.module.css";
import SectionDivider from "../SectionDivider/SectionDivider";
import SectionHeading from "../SectionHeading/SectionHeading";
const AboutMe = (props) => {
  return (
    <section className={styles.aboutMeContainer}>
      <div className={styles.aboutMeContent}>
        <div className={`${styles.mediaInfoContainer} `}>
          <address className={styles.infoContainer}>
            <span className={styles.infoHeader}>Location</span>
            <span className={`${styles.infoDetail}  `}>🍎 Brooklyn, NY</span>
          </address>
          <address className={styles.infoContainer}>
            <span className={styles.infoHeader}>Github</span>
            <a
              href="https://github.com/Jacksonwrk3"
              className={styles.infoLinks}
            >
              <span className={`${styles.infoDetail}  `}>Github Link</span>
              <i>
                <img src="diagonal-arrow.png" alt="open file arrow" />
              </i>
            </a>
          </address>
          <address className={styles.infoContainer}>
            <span className={styles.infoHeader}>Linkedin</span>
            <a
              href="https://www.linkedin.com/in/jackson-zhu/"
              className={styles.infoLinks}
            >
              <span className={`${styles.infoDetail}  `}>Linkedin Link</span>
              <i>
                <img src="diagonal-arrow.png" alt="open file arrow" />
              </i>
            </a>
          </address>
          <address className={styles.infoContainer}>
            <span className={styles.infoHeader}>Phone</span>
            <span className={`${styles.infoDetail}  `}>(646) 309 - 9957</span>
          </address>
          <address className={styles.infoContainer}>
            <span className={styles.infoHeader}>Email</span>
            <span>
              <span className={`${styles.infoDetail} `}>
                Jacksonzhu613@gmail.com
              </span>
              <i>
                <img src="diagonal-arrow.png" alt="open file arrow" />
              </i>
            </span>
          </address>
        </div>
        <SectionDivider />
        <section className={styles.aboutMe}>
          <SectionHeading>About me</SectionHeading>
          <p className={styles.aboutMeDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida
            sem et tincidunt interdum. Nulla efficitur ligula vitae lacus varius
            mollis. Sed sit amet tristique lacus, mattis elementum diam. Nulla
            nec neque ipsum. Morbi facilisis sodales nulla. Nam justo lorem,
            vestibulum non porta non, viverra id elit. Cras vestibulum risus nec
          </p>
        </section>
        <SectionDivider className={styles.desktopBorder} />
      </div>
    </section>
  );
};

export default AboutMe;
