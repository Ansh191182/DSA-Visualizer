import React, { useEffect, useState } from "react";

import styles from "./Visualize.module.css";

import SortingNav from "../sortingNav/SortingNav";
import LeftPanel from "./leftPanel/LeftPanel";
import RightPanel from "./rightPanel/RightPanel";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const Visualize = () => {
  const { algorithm, input, steps } = useSelector((state) => state.sorting);

  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!algorithm || input.length === 0 || steps.length === 0) {
      navigate("/sorting", { replace: true });
    }
  }, [algorithm, input, steps, navigate]);
  useEffect(() => {
    if (steps.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          return prev;
        }

        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [steps]);
  // console.log("algorithm", algorithm);
  // console.log("Input", input);
  // console.log("steps", steps);

  return (
    <>
      <SortingNav />

      <section className={styles.visualizeSection}>
        <div className={styles.container}>
          <div className={styles.mainLayout}>
            <LeftPanel
              steps={steps}
              currentStep={currentStep}
              algorithm={algorithm}
            />

            <RightPanel
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Visualize;
