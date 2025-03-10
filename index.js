// String Manipulation Functions

// 1. Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 2. Count Characters
function countCharacters(str) {
  return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Array Functions

// 4. Find Maximum and Minimum
function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

// 5. Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// 6. Filter Array (filters elements based on condition)
function filterArray(arr, condition) {
  return arr.filter(condition);
}

// Mathematical Functions

// 7. Factorial (Recursive method)
function factorial(n) {
  return n === 0 || n === 1 ? 1 : n * factorial(n - 1);
}

// 8. Prime Number Check
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 9. Fibonacci Sequence (Generates sequence up to n terms)
function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

// Example Usage
console.log(reverseString("hello"));
console.log(countCharacters("hello"));
console.log(capitalizeWords("hello world"));
console.log(findMax([2, 5, 9, 1]));
console.log(findMin([2, 5, 9, 1]));
console.log(sumArray([2, 5, 9, 1]));
console.log(filterArray([1, 2, 3, 4, 5], (num) => num > 2));
console.log(factorial(5));
console.log(isPrime(7));
console.log(fibonacci(10));
