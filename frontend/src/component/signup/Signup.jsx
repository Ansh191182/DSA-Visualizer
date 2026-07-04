import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./Signup.module.css";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
const Signup = () => {
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
              Create <span>Account</span>
            </h2>
            <p>
              Join DSA Visualizer and start mastering data structure and
              algorithm
            </p>
          </div>
          <div className={styles.formContent}>
            <h3>SignUp</h3>
            <label>Full Name</label>
            <input type="name" placeholder="Enter your name" />
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
            <label>password</label>
            <input type="password" placeholder="Enter your password" />

            <button className={styles.authButton}>Signup</button>
          </div>
          <div className={styles.authRedirect}>
            <span>you have an already account? </span>
            <Link className={styles.signupLink} to="/login">
              Login
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

export default Signup;
