import React from "react";
import styles from "../styles/Client.module.css"
export default function Data(){
    return(
    <div className={styles.data}>
    <div className={styles['creditscontainer']}>
      <div className={styles['creditssection']}>
        <h2>Available Credits</h2>
        <p>100</p>
      </div>
      <div className={styles['creditssection1']}>
        <h2>Purchased Credits</h2>
        <p>2300</p>
      </div>
      <div className={styles['creditssection2']}>
        <h2>Projects Involved</h2>
        <p>17</p>
      </div>
    </div>
        </div>
    )
}