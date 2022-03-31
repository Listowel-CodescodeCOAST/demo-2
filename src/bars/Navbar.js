import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
    <h3>Avocat Metal Wooks and Roofing Company Ltd.</h3>
    <ul className={styles.nav__ul}>
       <li>
         <Link to="/">Home</Link>
       </li>
       </ul> 
   </nav>
  );
};

export default Navbar