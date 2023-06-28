const subStringOcc = (string, substring) => {
  //   getting a length of both string
  const stringLength = string.length;
  const substringLength = substring.length;
  //   console.log(substringLength);
  //   console.log(stringLength);
  //  ini count as 0
  let count = 0;

  for (let i = 0; i <= stringLength; i++) {
    if (string.substring(i, i + substringLength) === substring) {
      count++;
    //   console.log(i);
    }
  }

  return count;
};

const string = "Hello, hello, hello, hello";
const substring = "hello";
const count = subStringOcc(string, substring);
console.log(`Number of occurrences: ${count}`);
