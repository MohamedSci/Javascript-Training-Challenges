// 9. Sorting Objects by Property
// Problem: Write a function to sort an array of objects by a specific property.

function sortByProperty(arr, property) {
    return arr.slice().sort((a, b) => {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
    });
}


// Test cases
const input = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 30 }
];

console.log(sortByProperty(input, 'age'));
// Output: [{ name: 'Bob', age: 22 }, { name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]
console.log(sortByProperty(input, 'name'));
// Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 22 }, { name: 'Charlie', age: 30 }]



// Explanation:
// -The slice() method creates a shallow copy of the array to prevent mutation.
// -The sort() method is used with a custom comparator function:
// oReturn -1 if a[property] < b[property], meaning a should come before b.
// oReturn 1 if a[property] > b[property].
// oReturn 0 if they are equal.