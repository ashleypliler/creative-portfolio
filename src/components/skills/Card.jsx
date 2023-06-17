import React from 'react'
import styles from './Skills.module.css';


export const Card = ({image, skills}) => {
  return (
    <div className={styles.card}>
        <img src={image}></img>
        <p>{skills}</p>
    </div>
  )
}
