import React from "react";
import NavBar from "../components/NavBar/NavBar.jsx";
import Profile from "../components/Profile/Profile.jsx";
import AboutMe from "../components/AboutMe/AboutMe.jsx";
import Projects from "../components/Projects/Projects.jsx";
import TechStack from "../components/TechStack/TechStack.jsx";
import "./global.css";
export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Profile
        imgSrc="maple-banner.jpeg"
        alt="profile-banner"
        pfp="my-pfp.jpeg"
      />
      <AboutMe />
      <TechStack />
    </>
  );
}
