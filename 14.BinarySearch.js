// 14. Binary Search
// Problem: Implement binary search on a sorted array.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Not found
}

// Test cases
console.log(binarySearch([1, 3, 5, 7, 9], 5)); // Output: 2
console.log(binarySearch([1, 3, 5, 7, 9], 6)); // Output: -1
console.log(binarySearch([], 1)); // Output: -1

// Explanation:
// -Binary search works on sorted arrays by repeatedly halving the search range.
// -Start with left as the first index and right as the last index.
// -Calculate the middle index (mid) and compare the middle element with the target.
// oIf equal, return the index.
// oIf less, narrow the search to the right half.
// oIf greater, narrow the search to the left half.
// -If left > right, the target is not in the array.