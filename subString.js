function findMaxSum(array) {
  if (array.length === 0) {
    return 0; // Return 0 if the array is empty
  }
  // initialize value
  let max = array[0];
  let current = array[0];

  for (let i = 1; i < array.length; i++) {
    current = Math.max(array[i], current + array[i]);
    // console.log(current);
    max = Math.max(max, current);
    // console.log(max);
  }
  return max;
}

const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = findMaxSum(numbers);
console.log("Maximum sum of a subarray:", maxSum);
