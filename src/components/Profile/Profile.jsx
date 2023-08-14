import React, { useState } from "react";
import * as styles from "./Profile.module.css";
import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import SectionDivider from "../SectionDivider/SectionDivider";
import TextButton from "../TextButton/TextButton";
const Profile = (props) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prevState) => {
      return !prevState;
    });
  };

  return (
    <section className={styles.profileContainer}>
      <Banner imgSrc={props.imgSrc} alt={props.alt} pfp={props.pfp} />
      <img src={props.pfp} alt="user" className={styles.pfp} />
      <div className={`${styles.profileDetail} ${styles.contentWidth}`}>
        <b className={styles.name}>Jackson Zhu</b>
        <p className={styles.description}>
          I'm a Full Stack Developer based in New York 👋🏻
        </p>
      </div>
      <div className={`${styles.btnContainer} ${styles.contentWidth}`}>
        <Button className={styles.btnSpace}>Download Resume</Button>
        <Button variant="primary">Contact</Button>
      </div>
      {/* Start of about me section */}
      <div className={`${styles.mediaInfoContainer} ${styles.contentWidth}`}>
        <address className={styles.infoContainer}>
          <span className={styles.infoHeader}>Location</span>
          <span className={`${styles.infoDetail} ${styles.location}`}>
            🍎 Brooklyn, NY
          </span>
        </address>
        <address className={styles.infoContainer}>
          <span className={styles.infoHeader}>Email</span>
          <span>
            <span className={`${styles.infoDetail} ${styles.email}`}>
              Jacksonzhu613@gmail.com
            </span>
            <i>
              <img src="diagonal-arrow.png" alt="open file arrow" />
            </i>
          </span>
        </address>
      </div>
      <SectionDivider />
      <section className={styles.contentWidth}>
        <span className={styles.sectionHeading}>About me</span>
        <p className={styles.aboutMeDescription}>
          I'm a Full Stack Developer who is always driven to learn. I began my
          academic journey as a Computer Science major at Brooklyn College,
          before graduating from a Software Engineering Bootcamp.
          <br />
          <br />
          I'm passionate about creating applications that improves quality of
          {show ? (
            <>
              life, in any field. It'll always bring a smile on my face knowing
              I was involved in improving someones life by {"<="}1% 😊`
              <br />
              <br />
              When i'm not coding you can find me at the gym, playing sports, or
              trying out new foods 🤤
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
      {/* End of About me Section*/}
    </section>
  );
};

export default Profile;
