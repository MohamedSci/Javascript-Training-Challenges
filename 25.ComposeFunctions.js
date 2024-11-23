// 25. Compose Functions
// Problem: Write a function to compose multiple functions.

// function compose(...fns) {
//   return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
// }
function compose(...fns) {
    return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
}

// Test case
const add5 = (x) => x + 5;      // Executed Last
const multiply2 = (x) => x * 2; // Executed Second
const multiply3 = (x) => x * 3; // Executed First

const composedFunction = compose(add5, multiply2, multiply3);
console.log(composedFunction(2)); // Output: 17 ((2 * 3) * (2) + 5)


// Explanation:
// -reduceRight() applies the functions from right to left (from last to first).
// -This creates a function that applies each function in sequence, passing the result to the next function.