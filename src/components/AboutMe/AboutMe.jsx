import React, { useState } from "react";
import * as styles from "./AboutMe.module.css";
import SectionDivider from "../SectionDivider/SectionDivider";
import SectionHeading from "../SectionHeading/SectionHeading";
import TextButton from "../TextButton/TextButton";
const AboutMe = (props) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prevState) => {
      return !prevState;
    });
  };
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
            I'm a Full Stack Developer who is always driven to learn. I began my
            academic journey as a Computer Science major at Brooklyn College,
            before graduating from a Software Engineering Bootcamp.
            <br />
            <br />
            I'm passionate about creating applications that improves quality of{" "}
            {show ? (
              <>
                life, in any field. It'll always bring a smile on my face
                knowing I was involved in improving someones life by {"<="}1%
                😊`
                <br />
                <br />
                When i'm not coding you can find me at the gym, playing sports,
                or trying out new foods 🤤
                <br />
                <br />
                <TextButton onClick={toggleShow}>Show less</TextButton>
              </>
            ) : (
              <>
                <br />
                <br />
                <TextButton onClick={toggleShow}>Read more</TextButton>
              </>
            )}
          </p>
        </section>
      </div>
    </section>
  );
};

export default AboutMe;
