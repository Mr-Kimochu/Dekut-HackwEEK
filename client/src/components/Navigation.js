import React, { useState } from 'react';
import styles from '../styles/Navigation.module.css';
import { Link } from 'react-router-dom'
const Navigation = () => {
  const [showNav, setShowNav] = useState(true);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={styles.navigation}>
      <div className={styles.hamburger} onClick={toggleNav}>
        &#9776; {/* Hamburger icon */}
      </div>
      <div className={`${styles.closeicon} ${showNav ? styles['nav-open'] : ''}`} onClick={toggleNav}>
        &times; {/* Close icon */}
      </div>
      <nav className={showNav ? styles['nav-open'] : styles['nav-closed']}>
        <ul>
          <li><Link to="/account">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/transactions">History</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

