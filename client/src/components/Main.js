import React from "react";
import styles from "../styles/Home.module.css"
export default function Main(){
    return(
        <div>
            <div class={styles.branding}>
            <h1>Greencap,</h1>
            <p>Building a Greener Kenya together!</p>
            <button className={styles.btn}>Get Started</button>
        </div>
        
        </div>
    )
}