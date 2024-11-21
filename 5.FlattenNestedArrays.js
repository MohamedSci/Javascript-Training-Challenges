// 5. Flatten Nested Arrays
// Problem: Flatten a deeply nested array into a single-level array.

function flattenArray(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

// Test cases
console.log(flattenArray([1, [2, [3, 4, [[[[[5]]]]]]]])); // Output: [1, 2, 3, 4, 5]
console.log(flattenArray([[1, 2], [3, [4, 5]]])); // Output: [1, 2, 3, 4, 5]





//   Explanation:
// -Array.prototype.reduce() is used to process each element of the array.
// -If an element is an array, we recursively flatten it. If it’s not, we add it directly to the flattened array.
// -This solution works for arbitrarily deep nesting.