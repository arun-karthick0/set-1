const arrayEqual = (array1, array2) => {
  // check the equal length
  if (array1.length !== array2.length) {
    return false;
  }
  //   check the given numbers too
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
};

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const result = arrayEqual(arr1, arr2);
console.log(`the result is ${result}`);
