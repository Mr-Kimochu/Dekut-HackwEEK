import React from "react";
import styles from "../styles/Home.module.css"
import logo from "../assets/logos.png"
import { Link } from 'react-router-dom'

export default function Nav(){
    return(
        <div>
        <header className={styles.header}>
        <div>
      <Link to="/"><img src={logo} className={styles.profile_img} alt="Logo"/></Link>
        </div>
            <nav>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link to="/projects">Projects</Link></li>
                <li className={styles.navItem}><Link to="/">About us</Link></li>
                <li className={styles.navItem}><Link to="/">Our team</Link></li>
                <li className={styles.navItem}><Link to="/">Donate</Link></li>
            </ul>
            </nav>
            </header>
        </div>
        
    )
}