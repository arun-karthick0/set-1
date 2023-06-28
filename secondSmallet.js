const secondSmallest = (n) => {
  //   given number is less than 2 mean return null
  if (n.length < 2) {
    return null;
  }
  // sorting an array
  const sort = n.sort((a, b) => a - b);
  //  return index value of 1 which is second smallest after sorting
  return sort[1];
};

const array = [3, 4, 2, 1, 5];
const result = secondSmallest(array);
console.log(`the second smallest number is :${result}`);
