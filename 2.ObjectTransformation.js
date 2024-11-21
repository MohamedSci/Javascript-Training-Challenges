// 2. Object Transformation
// Problem: Convert an array of objects into a single object, using a specific key as the property name.

function arrayToObject(arr, key = "id") {
    var initialValue = {};
    return arr.reduce((acc, obj) => {
        acc[obj[key]] = obj;
        return acc;
    }, initialValue);
}

// Test cases
const input = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];
console.log(arrayToObject(input));
// Output: { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }




//   Explanation:
// -We use Array.prototype.reduce() to accumulate values into a single object.
// -For each object in the array, we add a property to the accumulator using the specified key.
// -The default key is "id", but it can be customized.