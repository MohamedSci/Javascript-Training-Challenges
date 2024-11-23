// Problem: Modify an array such that even numbers are doubled and odd numbers are halved.
function modifyArray(arr) {
    return arr.map(num => (num % 2 === 0 ? num * 2 : num / 2));
  }

  // Test cases
  console.log(modifyArray([2, 3, 4, 5])); // Output: [4, 1.5, 8, 2.5]
  console.log(modifyArray([10, 15, 20, 25]));// [ 20, 7.5, 40, 12.5 ]


// Explanation:
// -We use the Array.prototype.map() method to create a new array by applying a transformation to each element.
// -The transformation checks if a number is even (num % 2 === 0). If true, it multiplies the number by 2; otherwise, it divides the number by 2.
  