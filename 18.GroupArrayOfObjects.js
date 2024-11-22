// 18. Group Array of Objects
// Problem: Group an array of objects by a specific key.

function groupBy(arr, key) {
    return arr.reduce((result, item) => {
        const groupKey = item[key];
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(item);
        return result;
    }, {});
}



// Test cases
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 },
];

console.log(groupBy(people, "age"));
// Output: { '25': [ { name: 'Alice', age: 25 }, { name: 'Bob', age: 25 } ], '30': [ { name: 'Charlie', age: 30 } ] }


// Explanation:
// -The reduce() function iterates through the array.
// -Groups objects based on the provided key, storing them in the accumulator.