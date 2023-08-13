import React from "react";
import NavBar from "../components/NavBar/NavBar.jsx";
import Profile from "../components/Profile/Profile.jsx";
import Button from "../components/Button/Button.jsx";
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
    </>
  );
}
