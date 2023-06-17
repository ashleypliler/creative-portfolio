import React from "react";
import styles from "./Home.module.css";
import {AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai';
import { Skills } from "../skills/Skills";

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.name}>ASHLEY PLILER</div>
      <div className={styles.services}>SERVICES</div>
      <Skills/>
      <div className={styles.links}>
        <ul className={styles.icons}>
            <a className={styles.icons} href="https://www.instagram.com/ashleypliler/?hl=en"><AiOutlineInstagram size={40}/></a>
            <a className={styles.icons} href="https://www.linkedin.com/in/ashley-pliler-862b5a193/"><AiFillLinkedin size={40}/></a>   
        </ul>
      </div>
    </div>
  );
};
