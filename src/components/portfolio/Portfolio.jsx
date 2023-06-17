import React from 'react';
import styles from './Portfolio.module.css';
import pic1 from '../../images/glitzz1.JPG'
import pic2 from '../../images/onoyo1.JPG'
import pic3 from '../../images/lennon.JPG'
import pic4 from '../../images/nat.JPG'


export const Portfolio = () => {
  return (
    <div>
      
      <div className={styles.container}>
        <img src={pic1} height='500' width='300'></img>
        <img src={pic2} height='500' width='300'></img>
        <img src={pic3} height='500' width='300'></img>
        <img src={pic4} height='500' width='300'></img>
      </div>
    </div>
  )
}
