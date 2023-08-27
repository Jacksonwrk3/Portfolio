import React from "react";
import Button from "../Button/Button";
import * as styles from "./ContactForm.module.css";

const ContactForm = (props) => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={`${styles.headingMargins} `}>
        Grab A Coffee & Chat With Me
      </h2>
      {/* <form
        action="https://formsubmit.co/jacksonzhu613@gmail.com"
        method="POST"
      >
        <input
          type="text"
          id="firstName"
          name="first-name"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          id="lastName"
          name="last-name"
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
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
          onClick={null}
        >
          Send Message
        </Button>
      </form> */}
      <form
        action="https://formsubmit.co/jacksonzhu613@gmail.com"
        method="POST"
      >
        <input
          type="text"
          id="firstName"
          name="first-name"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          id="lastName"
          name="last-name"
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
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
