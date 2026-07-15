import React, { useState } from "react";
import styles from "./SortHero.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Play,
  RotateCcw,
  CircleDot,
  SlidersHorizontal,
  BarChart3,
  GitBranch,
  Columns2,
} from "lucide-react";
import { addSortingData } from "../../store/slice/sortingSlice";

import { bubbleSort } from "../../algorithms/bubbleSort";
import toast from "react-hot-toast";

const algorithm = [
  {
    id: "BubbleSort",
    name: "Bubble Sort",
    icon: CircleDot,
  },
  {
    id: "SelectionSort",
    name: "Selection Sort",
    icon: SlidersHorizontal,
  },
  {
    id: "InsertionSort",
    name: "Insertion Sort",
    icon: BarChart3,
  },
  {
    id: "MergeSort",
    name: "Merge Sort",
    icon: GitBranch,
  },
  {
    id: "QuickSort",
    name: "Quick Sort",
    icon: Columns2,
  },
];
const SortHero = () => {
  const [input, setInput] = useState(" ");
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("BubbleSort");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(selectedAlgorithm);

  const numbers = input
    .split(/[ ,]+/) //split an array according to user input(means seprate value)
    .filter((num) => num.trim() !== "") //blank space avoid kar raha h
    .map((num) => Number(num)) //convert string value in nun
    .filter((num) => !isNaN(num)); //sabhi value proper integer h to sahi h
  // console.log(numbers);
  const maxValue = numbers.length > 0 ? Math.max(...numbers) : 1; //kisi array me se max value lene ka tarika spread operator se

  let steps = [];

  if (selectedAlgorithm == "BubbleSort") {
    steps = bubbleSort(numbers);
  }

  const visualize = () => {
    if (!selectedAlgorithm && (!numbers || numbers.length === 0)) {
      toast.error("Please select an algorithm and enter an input array.");
      return;
    }

    if (!selectedAlgorithm) {
      toast.error("Please select a sorting algorithm.");
      return;
    }

    if (!numbers || numbers.length === 0) {
      toast.error("Please enter an input array.");
      return;
    }
    dispatch(
      addSortingData({
        algorithm: selectedAlgorithm,
        input: numbers,
        steps: steps,
      }),
    );

    navigate("/visualize");
  };
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <h1>
            Algorithm <span>Visualizer</span>
          </h1>

          <p>
            Select one or more sorting algorithms and visualize them
            step-by-step.
          </p>
        </div>

        {/* Main */}
        <div className={styles.main}>
          {/* Left Card */}
          <div className={styles.leftCard}>
            <h2>Select Sorting Algorithms</h2>
            <p>Choose one or more algorithms to visualize</p>

            <div className={styles.algorithmList}>
              {algorithm.map((algo) => {
                const Icon = algo.icon;

                return (
                  <div
                    key={algo.id}
                    className={`${styles.algorithm} ${selectedAlgorithm === algo.id ? styles.activeAlgorithm : ""}`}
                    onClick={() => setSelectedAlgorithm(algo.id)}
                  >
                    <div className={styles.left}>
                      {/* <input
                        type="radio"
                        checked={selectedAlgorithm === algo.id}
                        readOnly
                      /> */}
                      <span>{algo.name}</span>
                    </div>
                    <Icon size={22} />
                  </div>
                );
              })}
            </div>

            <span className={styles.selected}>
              Selected :<span> {selectedAlgorithm}</span>
            </span>
          </div>

          {/* Right Card */}

          <div className={styles.rightCard}>
            <h2>Input Your Array</h2>

            <p>Enter array elements separated by space or comma</p>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter numbers"
              className={styles.input}
            />

            <small>Example: 5 2 9 1 5 6 or 5,2,9,1,5,6</small>

            {/* Preview */}

            <div className={styles.preview}>
              <h3>Array Preview</h3>

              <div className={styles.bars}>
                {numbers.map((num, index) => (
                  <div key={index} className={styles.barItem}>
                    <span>{num}</span>
                    <div
                      style={{ height: `${(num / maxValue) * 150}px` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.buttons}>
              <button onClick={visualize} className={styles.visualize}>
                <Play size={18} fill="white" />
                Visualize
              </button>

              <button onClick={() => setInput(" ")} className={styles.clear}>
                <RotateCcw size={18} />
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SortHero;
