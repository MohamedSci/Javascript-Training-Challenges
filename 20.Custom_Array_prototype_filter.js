// 20. Custom Array.prototype.filter()
// Problem: Implement a custom filter function.

function customFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

// Solution 2
function customFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}


// Test cases
const nums = [1, 2, 3, 4];
console.log(customFilter(nums, (n) => n % 2 === 0)); // Output: [2, 4]


// Explanation:
// -Iterates through the array, applying the callback to each element.
// -Pushes elements for which the callback returns true.