// 11. Recursive Fibonacci
// Problem: Write a function to generate the nth Fibonacci number using recursion.

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test cases
console.log(fibonacci(6)); // Output: 8
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(0)); // Output: 0
// Explanation:
// -The Fibonacci sequence is defined as:
// oF(0) = 0
// oF(1) = 1
// oF(n) = F(n-1) + F(n-2) for n > 1
// -The base cases (n = 0 and n = 1) return 0 and 1, respectively.
// -Recursive calls calculate F(n-1) and F(n-2), summing them to find F(n).
// Note: While this implementation is simple, it’s not efficient due to repeated calculations. 
// Dynamic programming or memoization is better for larger n