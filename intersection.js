const intgersectioArray = (array1, array2) => {
  //   remove duplicates
  const set1 = new Set(array1);
  //   console.log(set1);
  const set2 = new Set(array2);
  //   console.log(set2);
  const intersectionArray = [];

  for (const ele of set1) {
    // console.log(ele);
    if (set2.has(ele)) {
      intersectionArray.push(ele);
    }
  }
  return intersectionArray;
};

const arr1 = [1, 2, 2, 3];
const arr2 = [2, 3, 4];
const result = intgersectioArray(arr1, arr2);
console.log(result);
