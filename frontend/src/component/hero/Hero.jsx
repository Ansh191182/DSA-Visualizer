import React from "react";
import styles from "./Hero.module.css";
import { ChartNoAxesColumnIncreasing } from "lucide-react";
import { CodeXml } from "lucide-react";
import { Network } from "lucide-react";
import { Clock } from "lucide-react";
const Hero = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          {/* Left Section */}
          <div className={styles.leftSection}>
            <h2>
              Master <span>DSA.</span>
              <br />
              Visualize. Learn.
              <br />
              Ace Every Step.
            </h2>

            <p>
              Understand algorithm deeply through interactive visualization,
              step-by-step explanation and real-time execution.
            </p>

            <div className={styles.heroButtons}>
              <button>Get Started</button>
              <button>Explore Algorithms</button>
            </div>

            <div className={styles.heroFeatures}>
              <span>
                <ChartNoAxesColumnIncreasing className={styles.icon} />
                Interactive Visualizations
              </span>

              <span>
                <CodeXml className={styles.icon} />
                Step-by-Step Execution
              </span>

              <span>
                <Network className={styles.icon} />
                Recursion Tree
              </span>
            </div>
          </div>
          {/* Right Section */}
          <div className={styles.rightSection}>
            <img src="heroImg.png" alt="Hero" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
