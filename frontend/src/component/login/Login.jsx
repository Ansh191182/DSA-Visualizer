import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./Login.module.css";
import Footer from "../footer/Footer";

import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      {" "}
      <Navbar showButton={false} />
      <section className={styles.auth}>
        {/* left section */}
        <form className={styles.form}>
          {/*  */}
          <div className={styles.heading}>
            <h2>
              Welcome <span>Back</span>
            </h2>
            <p>
              Login to continue your DSA learning journey and visualize
              algorithm in action
            </p>
          </div>
          <div className={styles.formContent}>
            <h3>Login to Your Account</h3>

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
            <label>password</label>
            <input type="password" placeholder="Enter your password" />

            <button className={styles.authButton}>Login</button>
            <div className={styles.forgotPassword}>
              <Link className={styles.link} to="/forget-pass">Forgot Password?</Link>
            </div>
          </div>
          <div className={styles.authRedirect}>
            <span>Don't have an account? </span>
            <Link className={styles.signupLink} to="/signup">
              Sign Up
            </Link>
          </div>
        </form>
        <div>
          {/* right image */}
          <img src="/recursionTree.png" alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
