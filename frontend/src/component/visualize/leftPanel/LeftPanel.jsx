import React from "react";
import { ArrowLeft } from "lucide-react";
import styles from "./LeftPanel.module.css";

const LeftPanel = ({ steps, currentStep, algorithm }) => {
  return (
    <div className={styles.leftPanel}>
      {/* Back Button */}

      <button className={styles.backBtn}>
        <ArrowLeft size={18} />
        Back to Input
      </button>

      {/* Heading */}

      <div className={styles.heading}>
        <span className={styles.dot}></span>

        <h1>{algorithm}</h1>
      </div>

      <p className={styles.description}>
        Bubble Sort repeatedly steps through the list, compares adjacent
        elements and swaps them if they are in the wrong order.
      </p>

      {/* Execution Steps */}

      <div className={styles.executionBox}>
        <h3>Execution Steps</h3>

        <div className={styles.stepList}>
          {/* Active */}

          {steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.stepCard} ${index < currentStep ? styles.active : " "} ${index == currentStep ? styles.current : " "}`}
            >
              <div
                className={
                  index <= currentStep
                    ? styles.stepNumber
                    : styles.stepNumberGray
                }
              >
                {index + 1}
              </div>

              <div className={styles.stepInfo}>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
              {index < currentStep && <div className={styles.completed}>✓</div>}

              {index == currentStep && (
                <div className={styles.currentDot}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
