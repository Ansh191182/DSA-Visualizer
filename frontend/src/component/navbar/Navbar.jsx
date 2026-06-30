import styles from "./Navbar.module.css";
import React from "react";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <h2>
            <span>DSA</span> Visualizer
          </h2>
        </div>

        {/* Buttons */}
        <div className={styles.buttons}>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.signupBtn}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
