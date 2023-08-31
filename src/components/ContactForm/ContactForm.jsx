import React from "react";
import Button from "../Button/Button";
import * as styles from "./ContactForm.module.css";

const ContactForm = (props) => {
  return (
    <div
      className={styles.contactContainer}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <h2 className={`${styles.headingMargins} `}>
        Grab A Coffee & Chat With Me
      </h2>
      <form
        action="https://formsubmit.co/jacksonzhu613@gmail.com"
        method="POST"
      >
        <Button
          type="button"
          className={styles.closeButton}
          onClick={props.closeContact}
        >
          Close
        </Button>
        <input type="text" id="name" name="name" placeholder="Name" required />

        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          className={styles.email}
          required
        />
        <textarea
          rows="6"
          id="message"
          name="message"
          placeholder="Your Message"
          className={styles.messageField}
          required
        />
        <Button
          type="submit"
          variant="primary"
          className={styles.buttonAlignments}
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
