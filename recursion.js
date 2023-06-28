const power = (base, exponent) => {
  // when exponent is 0, return 1
  if (exponent === 0) {
    return 1;
  }

  // power recursively
  return base * power(base, exponent - 1);
};

const base = 2;
const exponent = 4;
const result = power(base, exponent);
console.log(`Result: ${result}`);
