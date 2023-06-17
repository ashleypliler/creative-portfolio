import React from "react";
import styles from "./Portfolio.module.css";
import pic1 from "../../images/glitzz1.JPG";
import pic5 from "../../images/onoyo1.JPG";
import pic3 from "../../images/lennon.JPG";
import pic4 from "../../images/nat.JPG";
import pic2 from "../../images/golden-hat.png";
import pic6 from "../../images/thrivePizza.png";
import pic7 from "../../images/dearPerson.png";


export const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      Photography, Web Development, Graphic Design, UX/UI Design, Videography{" "}
      <div className={styles.container}>
        <img src={pic1} height='500px' width='300px'></img>
        <img src={pic2} height='300px' width='500px'></img>
        <img src={pic3} height='500px' width='300px'></img>
        <img src={pic4} height='500px' width='300px'></img>
        <img src={pic6} height='300px' width='500px'></img>
        <img src={pic5} height='500px' width='300px'></img>
        <img src={pic7} height='500px' width='300px'></img>
      </div>
    </div>
  );
};
