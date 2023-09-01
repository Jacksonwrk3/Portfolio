import React, { useState } from "react";
import ResumeContact from "../components/ResumeContact/ResumeContact.jsx";
import AboutMe from "../components/AboutMe/AboutMe.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Divider from "../components/Divider/Divider.jsx";
import Profile from "../components/Profile/Profile.jsx";
import ContactForm from "../components/ContactForm/ContactForm.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import "./global.css";
import * as styles from "./index.module.css";
export default function Home() {
  const [displayContact, setDisplayContact] = useState(false);
  const openContact = () => {
    setDisplayContact(true);
  };

  const closeContact = () => {
    setDisplayContact(false);
  };
  if (displayContact) {
    document.body.style.margin = "0";
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.height = "auto";
    document.body.style.overflow = "scroll";
  }
  return (
    <>
      <Navbar openContact={openContact} />
      <Profile />
      <ResumeContact onClick={openContact} />
      <AboutMe />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      {displayContact ? (
        <div className={styles.background} onClick={closeContact}>
          <ContactForm closeContact={closeContact} />
        </div>
      ) : null}
    </>
  );
}
