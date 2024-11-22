// 23. Custom new Operator
// Problem: Implement a custom new operator in JavaScript.

function customNew(constructor, ...args) {
    const obj = {}; // Create a new object
    Object.setPrototypeOf(obj, constructor.prototype); // Set prototype
    const result = constructor.apply(obj, args); // Call constructor
    return result instanceof Object ? result : obj; // Return the object or constructor result
}


// Test case
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person = customNew(Person, 'Alice', 25);
console.log(person); // Output: Person { name: 'Alice', age: 25 }


// Explanation:
// -Creates a new object, sets its prototype to the constructor’s prototype,
// and invokes the constructor with the provided arguments.
// -Ensures that the function behaves similarly to the built-in new operator.