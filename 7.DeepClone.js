// 7. Deep Clone
// Problem: Implement a deep cloning function for objects and arrays.

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return non-object values as is
    }

    if (Array.isArray(obj)) {
        return obj.map(deepClone); // Recursively clone array elements
    }

    const clonedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]); // Recursively clone properties
        }
    }
    return clonedObj;
}




// Test cases
const original = { a: 1, b: { c: 2, d: [3, 4] } };
const copy = deepClone(original);

console.log(copy); // Output: { a: 1, b: { c: 2, d: [3, 4] } }
console.log(copy === original); // Output: false
console.log(copy.b === original.b); // Output: false


//   Explanation:
// -If the input is not an object (e.g., null, number, string), return it as is.
// -If it’s an array, recursively clone each element.
// -If it’s an object, recursively clone each property.
// -This ensures all nested objects and arrays are deeply copied.