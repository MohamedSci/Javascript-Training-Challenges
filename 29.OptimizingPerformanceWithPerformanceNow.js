// 29. Optimizing Performance with performance.now()
// Problem: Compare the execution times of two functions.



function measureTime(fn) {
  const start = performance.now();
  fn();
  const end = performance.now();
  return end - start;
}

const slowFunction = () => {
  let sum = 0;
  for (let i = 0; i < 1e6; i++) sum += i;
  return sum;
};

const fastFunction = () => 42;

console.log(measureTime(slowFunction)); // Output: Time taken for slowFunction
console.log(measureTime(fastFunction)); // Output: Time taken for fastFunction



// Explanation:
// -Uses performance.now() to measure the time (in milliseconds) taken to execute a function.
// -Useful for performance benchmarking.