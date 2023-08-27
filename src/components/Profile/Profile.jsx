import React from "react";
import * as styles from "./Profile.module.css";
import Banner from "../Banner/Banner";
import Button from "../Button/Button";
const Profile = (props) => {
  const RESUME_FILE_URL = "http://localhost:8000/Jackson+Zhu+Resume.pdf";

  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <section className={styles.profileContainer}>
      <div className={styles.bannerPfpWrapper}>
        <Banner imgSrc={props.imgSrc} alt={props.alt} pfp={props.pfp} />
        <img src={props.pfp} alt="user" className={styles.pfp} />
      </div>
      <div className={styles.nameButtonContainer}>
        <div>
          <b className={styles.name}>Jackson Zhu</b>
          <p className={styles.description}>
            I'm a Full Stack Developer based in New York 👋🏻
          </p>
        </div>
        <div className={`${styles.btnContainer} `}>
          <Button
            className={styles.btnSpace}
            onClick={() => {
              downloadFileAtURL(RESUME_FILE_URL);
            }}
          >
            Download Resume
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.onClick();
            }}
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
