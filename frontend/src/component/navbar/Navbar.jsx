import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import React from "react";

const Navbar = ({ showButton = true }) => {
  const navigate = useNavigate();
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
        {showButton && (
          <div className={styles.buttons}>
            <button
              className={styles.loginBtn}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className={styles.signupBtn}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
