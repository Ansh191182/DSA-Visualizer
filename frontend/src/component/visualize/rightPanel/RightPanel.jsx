import React from "react";
import {
  RefreshCw,
  List,
  ArrowRightLeft,
  Lightbulb,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

import styles from "./RightPanel.module.css";
import { useSelector } from "react-redux";
const RightPanel = ({ currentStep, setCurrentStep }) => {
  const { algorithm, input, steps } = useSelector((state) => state.sorting);

  const currData = steps[currentStep] || {};
  const j = currData.j;
  const i = currData.i;

  const comparisons = currData.comparisons;
  const swaps = currData.swaps;

  const currentArray = currData.array || [];

  const maxValue = currentArray.length > 0 ? Math.max(...currentArray) : 1;

  //  for previous button
  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  // for next button

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  return (
    <div className={styles.rightPanel}>
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <RefreshCw size={22} strokeWidth={1.8} />

          <div>
            <span>Algorithm</span>
            <h3>
              {" "}
              <span>{algorithm}</span>
            </h3>
          </div>
        </div>

        <div className={styles.statCard}>
          <List size={22} strokeWidth={1.8} />

          <div>
            <span>Step</span>
            <h3>
              <strong>{currentStep + 1}</strong> / {steps.length}
            </h3>
          </div>
        </div>

        <div className={styles.statCard}>
          <ArrowRightLeft size={22} strokeWidth={1.8} />

          <div>
            <span>Comparisons</span>
            <h3>{comparisons}</h3>
          </div>
        </div>

        <div className={styles.statCard}>
          <ArrowRightLeft size={22} strokeWidth={1.8} />

          <div>
            <span>Swaps</span>
            <h3>{swaps}</h3>
          </div>
        </div>
      </div>

      {/* ===================== Visualization Card ===================== */}

      <div className={styles.visualizationCard}>
        <h2>Array Visualization</h2>

        {/* ===================== Bars ===================== */}

        <div className={styles.chart}>
          {currentArray.map((value, index) => {
            let barClass = styles.bar;

            // 1. Comparing Bars
            if (index === j || index === j + 1) {
              barClass = `${styles.bar} ${styles.compareBar}`;
            }

            if (currData.swapped.includes(index)) {
              barClass = `${styles.bar} ${styles.currentBar}`;
            }

            // 3. Sorting Completed → All Green (Highest Priority)
            if (currentStep === steps.length - 1) {
              barClass = `${styles.bar} ${styles.sortedBar}`;
            }

            return (
              <div key={index} className={styles.barItem}>
                <span>{value}</span>

                <div
                  className={barClass}
                  style={{ height: `${(value / maxValue) * 230}px` }}
                ></div>

                <p>{index}</p>
              </div>
            );
          })}
        </div>

        {/* ===================== Legend ===================== */}

        <div className={styles.legend}>
          <div>
            <span className={styles.current}></span>
            Current
          </div>

          <div>
            <span className={styles.comparing}></span>
            Comparing
          </div>

          <div>
            <span className={styles.sorted}></span>
            Sorted
          </div>

          <div>
            <span className={styles.unsorted}></span>
            Unsorted
          </div>
        </div>

        <div className={styles.explanation}>
          <div className={styles.ideaIcon}>
            <Lightbulb size={28} />
          </div>

          <div>
            <h3>Current Step Explanation</h3>

            <p>{currData.desc}</p>
          </div>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.controlBtn}
            onClick={previousStep}
            disabled={currentStep === 0}
          >
            <ChevronLeft size={18} />
            Previous Step
          </button>

          <span className={styles.stepCounter}>
            Step <strong>{currentStep + 1}</strong> of{" "}
            <strong>{steps.length}</strong>
          </span>

          <button
            className={styles.nextBtn}
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
          >
            Next Step
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
