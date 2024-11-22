// 16. Custom Promise.all() Implementation
// Problem: Implement a custom Promise.all() function.
// Understanding the Custom Promise.all() Implementation

// Resolve all promises: Wait for all promises in the input array to resolve.
// Collect results: Gather the resolved values of each promise in an array.
// Reject early: If any promise rejects, the entire customPromiseAll() function should reject immediately.
// Handle empty input: Return an empty array if the input array is empty.
// Implementation:

function customPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedPromises = 0;
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    results[index] = value;
                    completedPromises++;
                    if (completedPromises === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reject); // Reject as soon as one promise fails
        });

        if (promises.length === 0) resolve(results); // Handle empty input
    });
}



// Test cases
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

customPromiseAll([p1, p2, p3]).then(console.log); // Output: [1, 2, 3]

const p4 = Promise.reject("Error");
customPromiseAll([p1, p4, p3]).catch(console.error); // Output: "Error"



// Explanation:

// Create a new Promise: A new Promise is created to represent the outcome of the customPromiseAll() operation.
// Initialize variables:
// results: An array to store the resolved values of each promise.
// completedPromises: A counter to track the number of completed promises.
// Iterate over promises:
// Each promise in the input array is iterated over.
// Promise.resolve() is used to ensure that the input is a Promise, even if it's not.
// If the promise resolves, its value is stored in the results array, and the completedPromises counter is incremented.
// If the completedPromises counter equals the total number of promises, the resolve function is called with the results array.
// Handle rejection:
// If any promise rejects, the catch block immediately calls the reject function, terminating the customPromiseAll() operation.
// Handle empty input:
// If the input array is empty, the resolve function is called with an empty results array.
// Test Cases:

// The provided test cases demonstrate how the customPromiseAll() function works:

// Successful resolution: When all promises resolve, the then block is executed, and the resolved values are logged.
// Early rejection: When one promise rejects, the catch block is executed, and the error message is logged.
// By understanding this implementation, you can create custom asynchronous operations that handle multiple promises and their outcomes effectively.