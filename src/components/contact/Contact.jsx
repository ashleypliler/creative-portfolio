import React from "react";
import styles from "./Contact.module.css";
import img from "../../images/ash3.JPG";
import ButtonMailto from "../email/Email";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export const Contact = () => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <ButtonMailto
            className={styles.icons}
            label={<AiOutlineMail className={styles.icons} />}
            mailto="mailto:ashleypliler1@gmail.com"
          ></ButtonMailto>
        </div>
        <div>
          <a href="https://www.instagram.com/ashleypliler/?hl=en">
            <AiOutlineInstagram
              className={styles.icons}
            ></AiOutlineInstagram>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ashley-pliler-862b5a193/">
            <AiFillLinkedin className={styles.icons}></AiFillLinkedin>
          </a>
        </div>
      </div>
      <div className={styles.text}>
        CONTACT ME HERE! LINKS TO MY EMAIL, INSTAGRAM, AND LINKEDIN :)
      </div>
    </div>
  );
};
