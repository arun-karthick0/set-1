const elementsToRemove = (number, element) => {
  //   finding the index of removable element
  const i = number.indexOf(element);
  //   console.log(index);
  //   -1 is false
  if (i != -1) {
    // removing the founded value 1 time
    number.splice(i, 1);
  }
  return number;
};

const num = [1, 2, 3, 4, 5];
const ele = 3;
const result = elementsToRemove(num, ele);
console.log(`the updated after removed specific number ${result}`);
