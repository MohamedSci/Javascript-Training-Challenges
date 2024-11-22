// 21. Safe Nested Access
// Problem: Safely access deeply nested object properties.

function getSafe(obj, path, defaultValue) {
    return path.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : defaultValue), obj);
}


// Test cases
const data = { a: { b: { c: 42 } } };
console.log(getSafe(data, ["a", "b", "c"], null)); // Output: 42
console.log(getSafe(data, ["a", "x", "z"], null)); // Output: null
console.log(getSafe(data, ["a", "x", "c"], null)); // Output: null

// Explanation:
// -Uses reduce() to traverse the object path, returning the default value if any key is missing.