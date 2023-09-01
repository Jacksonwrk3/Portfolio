import React, { useState } from "react";
import * as styles from "./Navbar.module.css";

const Navbar = (props) => {
  const [active, setActive] = useState(false);

  return (
    <header>
      <nav className={styles.navbar}>
        <a href="#" className={styles.navBranding}>
          JZ
        </a>
        <ul className={`${styles.navMenu} ${active ? styles.active : ""}`}>
          <li className={styles.navItem}>
            <a
              href="#About"
              className={styles.navLink}
              onClick={() => {
                setActive(false);
              }}
            >
              About me
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#Skills"
              className={styles.navLink}
              onClick={() => {
                setActive(false);
              }}
            >
              Skills
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#Projects"
              className={styles.navLink}
              onClick={() => {
                setActive(false);
              }}
            >
              Projects
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#Contact"
              className={styles.navLink}
              onClick={() => {
                setActive(false);
                props.openContact();
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <div
          className={`${styles.hamburger} ${active ? styles.active : ""}`}
          onClick={() => {
            setActive((prevState) => {
              return !prevState;
            });
          }}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
