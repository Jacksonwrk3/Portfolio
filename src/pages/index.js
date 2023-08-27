import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar.jsx";
import Profile from "../components/Profile/Profile.jsx";
import AboutMe from "../components/AboutMe/AboutMe.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Divider from "../components/Divider/Divider.jsx";
import ContactForm from "../components/ContactForm/ContactForm.jsx";
import "./global.css";
export default function Home() {
  const [displayContact, setDisplayContact] = useState(false);
  const toggleContact = () => {
    setDisplayContact((prevState) => {
      return !prevState;
    });
  };
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Profile
        imgSrc="maple-banner.jpeg"
        alt="profile-banner"
        pfp="my-pfp.jpeg"
        onClick={toggleContact}
      />
      <AboutMe />
      <Projects />
      <Divider />
      {displayContact ? <ContactForm /> : null}
    </>
  );
}
