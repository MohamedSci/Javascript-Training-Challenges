// 26. Object Destructuring and Rest/Spread Operators
// Problem: Use destructuring and rest/spread operators to clone and manipulate objects.

const person = { name: "Alice", age: 25, country: "USA" };

// Destructuring
const { name, age } = person;
console.log(name, age); // Output: Alice 25

// Spread operator (shallow copy)
const personCopy = { ...person };
console.log(personCopy); // Output: { name: 'Alice', age: 25, country: 'USA' }

// Rest operator
const { country, ...rest } = person;
console.log(country, rest); // Output: USA { name: 'Alice', age: 25 }


// Explanation:
// -Destructuring extracts specific properties from an object.
// -The spread operator (...) copies all properties into a new object.
// -The rest operator (...) collects the remaining properties into a new object.