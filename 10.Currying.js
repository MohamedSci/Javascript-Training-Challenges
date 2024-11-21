// 10. Currying
// Problem: Implement a curried function that adds three numbers.

function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

// Test cases
console.log(add(2)(3)(5)); // Output: 10
console.log(add(1)(1)(1)); // Output: 3

// Explanation:
// -Currying transforms a function that takes multiple arguments into a sequence of functions, each taking one argument.
// -The add function returns another function for each argument, accumulating the sum.
// -When the third argument is provided, the innermost function computes and returns the result.