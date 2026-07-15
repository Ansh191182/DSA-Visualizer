export const bubbleSort = (arr) => {
  const array = [...arr];
  const steps = [];

  const n = array.length;

  let comparisonCount = 0;
  let swapCount = 0;

  // Initial State
  steps.push({
    array: [...array],
    compare: [],
    swapped: [],
    title: "Initial Array",
    desc: "Starting Bubble Sort",
    i: -1,
    j: -1,
    comparisons: comparisonCount,
    swaps: swapCount,
  });

  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      const first = array[j];
      const second = array[j + 1];

      comparisonCount++;

      // ================= Compare Step =================

      steps.push({
        array: [...array],
        compare: [first, second],
        swapped: [],
        title: `Compare ${first} and ${second}`,
        desc: `Comparing ${first} and ${second}`,
        i,
        j,
        comparisons: comparisonCount,
        swaps: swapCount,
      });

      if (first > second) {
        // Swap
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwapped = true;
        swapCount++;

        // ================= Swap Step =================

        steps.push({
          array: [...array],
          compare: [],
          swapped: [j, j + 1],
          title: `Swap ${first} and ${second}`,
          desc: `${first} > ${second}, swap performed`,
          i,
          j,
          comparisons: comparisonCount,
          swaps: swapCount,
        });
      } else {
        // ================= No Swap Step =================

        steps.push({
          array: [...array],
          compare: [first, second],
          swapped: [],
          title: "No Swap",
          desc: `${first} ≤ ${second}, no swap needed`,
          i,
          j,
          comparisons: comparisonCount,
          swaps: swapCount,
        });
      }
    }

    if (!isSwapped) break;
  }

  // Final State

  steps.push({
    array: [...array],
    compare: [],
    swapped: [],
    title: "Array Sorted",
    desc: "Sorting Completed",
    i: n - 1,
    j: -1,
    comparisons: comparisonCount,
    swaps: swapCount,
  });

  return steps;
};
