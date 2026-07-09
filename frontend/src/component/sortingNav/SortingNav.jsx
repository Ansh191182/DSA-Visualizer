import React from "react";
import styles from "./SortingNav.module.css";
import { Link } from "react-router-dom";
const SortingNav = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* left */}
          <div className={styles.logoSection}>
            <img src="navLogo.png" alt="" />
            <h2>
              <span>DSA</span> Visualizer
            </h2>
          </div>
          {/* right */}
          <div className={styles.profileicon}>
            {" "}
            <img src="profileIcon.png" alt="" />
          </div>

          {/* yah pe dummy image laga */}
        </div>
      </nav>
    </>
  );
};

export default SortingNav;
