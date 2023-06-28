// factorial
const findMaxNumber = (num) => {
  if (num.length === 0) {
    return null;
  } else {
    // assign first number as 0
    let max = num[0];
    for (let i = 1; i < num.length; i++) {
      if (num[i] > max) {
        // replace old value
        max = num[i];
      }
    }
    return max;
  }
};

const number = [5, 2, 9, 1, 7];
const result = findMaxNumber(number);
console.log(`The maximum number is: ${result}`);
