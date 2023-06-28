function factorial(n) {
  if (n === 1 || n === 0) return 1;
  else {
    return n * factorial(n - 1);
  }
}
const result = factorial(5);
console.log(`the factorial of given number is :${result}`);
