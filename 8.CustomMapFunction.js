// 8. Custom Map Function
// Problem: Implement your version of the Array.prototype.map() method.
function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}


// Test cases
const nums = [1, 2, 3];
console.log(customMap(nums, x => x * 2)); // Output: [2, 4, 6]
console.log(customMap(nums, (x, i) => x + i)); // Output: [1, 3, 5]
// Explanation:
// -A new array result is created to store the transformed elements.
// -For each element in the input array, the callback function is applied with arguments (currentValue, index, array).
// -The transformed value is added to the result array.
// -This mirrors the behavior of the built-in map() method.


// Alternative Solution
function customMap(arr, callback) {
    return arr.map(callback);
}