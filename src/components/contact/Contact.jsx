import React from 'react'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <div className={styles.container}>
        <form className={styles.contactForm}>
            <input id={"first-name"} type="text" placeholder="ENTER YOUR FIRST NAME"/><br/>
            <input id="last-name" type="text" placeholder="ENTER YOUR LAST NAME"/><br/>
            <input id="email" type="email" placeholder="ENTER YOUR EMAIL"/><br/>
            <input id="phone-number" type="text" placeholder="ENTER YOUR PHONE NUMBER"/><br/>
            <select id="pick-session">
                <option value="" disabled selected>CHOOSE SESSION TYPE</option>
                <option value="portrait">PORTRAIT</option>
                <option value="couple">COUPLE</option>
                <option value="family">FAMILY</option>
                <option value="products">PRODUCTS</option>
            </select><br/>
            <input id="date" type="date"/><br/>
            <input id="time" type="time"/><br/>
            <button id="submit">SUBMIT</button>
        </form>
    </div>
  )
}
