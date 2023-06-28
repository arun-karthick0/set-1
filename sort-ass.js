// sorting
const sortAsc = (num) => {
  return num.sort((a, b) => {
    return a - b;
  });
};

const numbers = [5, 2, 9, 1, 8];
const sortedNumbers = sortAsc(numbers);
console.log("after sort:", sortedNumbers);
