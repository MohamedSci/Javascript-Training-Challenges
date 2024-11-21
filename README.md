Here’s a collection of challenges to test **intermediate-level JavaScript** skills. They focus on problem-solving, logical thinking, and understanding key JavaScript concepts:

---

### 1. **Manipulating Arrays**
- **Problem:** Write a function that takes an array of numbers and returns a new array with all even numbers doubled and odd numbers halved.
  ```javascript
  function modifyArray(arr) {
    // Your code here
  }

  console.log(modifyArray([2, 3, 4, 5])); // Output: [4, 1.5, 8, 2.5]
  ```

---

### 2. **Object Transformation**
- **Problem:** Write a function that converts an array of objects into a single object, using a specific key from each object as the property name.
  ```javascript
  const input = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  
  function arrayToObject(arr) {
    // Your code here
  }

  console.log(arrayToObject(input)); 
  // Output: { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }
  ```

---

### 3. **Promise Chaining**
- **Problem:** Write a function that takes an array of URLs, fetches data from each, and returns an array of their JSON responses.
  ```javascript
  async function fetchData(urls) {
    // Your code here
  }

  const urls = ['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2'];
  fetchData(urls).then(console.log); 
  ```

---

### 4. **String Compression**
- **Problem:** Write a function that compresses a string using counts of repeated characters.
  ```javascript
  function compressString(str) {
    // Your code here
  }

  console.log(compressString('aaabbcccaa')); // Output: "a3b2c3a2"
  ```

---

### 5. **Flatten Nested Arrays**
- **Problem:** Write a function to flatten a deeply nested array into a single-level array.
  ```javascript
  function flattenArray(arr) {
    // Your code here
  }

  console.log(flattenArray([1, [2, [3, 4, [5]]]])); // Output: [1, 2, 3, 4, 5]
  ```

---

### 6. **Unique Characters**
- **Problem:** Write a function that checks if a string has all unique characters.
  ```javascript
  function hasUniqueCharacters(str) {
    // Your code here
  }

  console.log(hasUniqueCharacters('hello')); // Output: false
  console.log(hasUniqueCharacters('world')); // Output: true
  ```

---

### 7. **Deep Clone**
- **Problem:** Implement a deep cloning function for objects and arrays.
  ```javascript
  function deepClone(obj) {
    // Your code here
  }

  const original = { a: 1, b: { c: 2 } };
  const copy = deepClone(original);
  console.log(copy); // Output: { a: 1, b: { c: 2 } }
  console.log(copy === original); // Output: false
  ```

---

### 8. **Custom Map Function**
- **Problem:** Implement your version of the `Array.prototype.map()` method.
  ```javascript
  function customMap(array, callback) {
    // Your code here
  }

  console.log(customMap([1, 2, 3], x => x * 2)); // Output: [2, 4, 6]
  ```

---

### 9. **Sorting Objects by Property**
- **Problem:** Write a function to sort an array of objects by a specific property.
  ```javascript
  const input = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 30 }
  ];

  function sortByProperty(arr, property) {
    // Your code here
  }

  console.log(sortByProperty(input, 'age'));
  // Output: [{ name: 'Bob', age: 22 }, { name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]
  ```

---

### 10. **Currying**
- **Problem:** Implement a curried function that adds three numbers.
  ```javascript
  function add(a) {
    // Your code here
  }

  console.log(add(2)(3)(5)); // Output: 10
  ```

---

### 11. **Recursive Fibonacci**
- **Problem:** Write a function to generate the `n`th Fibonacci number using recursion.
  ```javascript
  function fibonacci(n) {
    // Your code here
  }

  console.log(fibonacci(6)); // Output: 8
  ```

---

### 12. **Rate Limiter**
- **Problem:** Implement a rate limiter function that ensures a callback is executed at most once in a given time frame.
  ```javascript
  function rateLimiter(callback, limit) {
    // Your code here
  }

  const log = () => console.log('Called!');
  const limitedLog = rateLimiter(log, 1000);
  limitedLog(); // Output: "Called!"
  limitedLog(); // No output within 1 second
  ```

---

### 13. **Debouncing**
- **Problem:** Write a debounce function that delays a callback until after a specified time has elapsed since the last call.
  ```javascript
  function debounce(callback, delay) {
    // Your code here
  }

  const log = () => console.log('Debounced!');
  const debouncedLog = debounce(log, 500);
  debouncedLog(); // Output appears only if 500ms pass without further calls
  ```

---

### 14. **Binary Search**
- **Problem:** Implement binary search on a sorted array.
  ```javascript
  function binarySearch(arr, target) {
    // Your code here
  }

  console.log(binarySearch([1, 3, 5, 7, 9], 5)); // Output: 2
  ```

---

### 15. **Balanced Parentheses**
- **Problem:** Write a function that checks if a string has balanced parentheses.
  ```javascript
  function isBalanced(str) {
    // Your code here
  }

  console.log(isBalanced('(a + b) * (c - d)')); // Output: true
  console.log(isBalanced('(a + b * (c - d)')); // Output: false
  ```

---

These challenges assess key JavaScript concepts, such as:
- Functional programming (e.g., `map`, `filter`, `reduce`)
- Asynchronous programming (e.g., promises, async/await)
- Object and array manipulation
- Recursion
- Advanced problem-solving with algorithms.

Let me know if you need solutions or explanations for any of these!

---

### **1. Manipulating Arrays**
**Problem**: Modify an array such that even numbers are doubled and odd numbers are halved.

```javascript
function modifyArray(arr) {
  return arr.map(num => (num % 2 === 0 ? num * 2 : num / 2));
}

// Test cases
console.log(modifyArray([2, 3, 4, 5])); // Output: [4, 1.5, 8, 2.5]
console.log(modifyArray([10, 15, 20, 25])); // Output: [20, 7.5, 40, 12.5]
```

**Explanation**:
- We use the `Array.prototype.map()` method to create a new array by applying a transformation to each element.
- The transformation checks if a number is even (`num % 2 === 0`). If true, it multiplies the number by 2; otherwise, it divides the number by 2.

---

### **2. Object Transformation**
**Problem**: Convert an array of objects into a single object, using a specific key as the property name.

```javascript
function arrayToObject(arr, key = 'id') {
  return arr.reduce((acc, obj) => {
    acc[obj[key]] = obj;
    return acc;
  }, {});
}

// Test cases
const input = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
console.log(arrayToObject(input)); 
// Output: { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }
```

**Explanation**:
- We use `Array.prototype.reduce()` to accumulate values into a single object.
- For each object in the array, we add a property to the accumulator using the specified key.
- The default key is `"id"`, but it can be customized.

---

### **3. Promise Chaining**
**Problem**: Fetch data from an array of URLs and return their JSON responses.

```javascript
async function fetchData(urls) {
  const promises = urls.map(url => fetch(url).then(response => response.json()));
  return Promise.all(promises);
}

// Test cases
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2'
];

fetchData(urls).then(data => console.log(data));
```

**Explanation**:
- `Array.prototype.map()` is used to create an array of promises, where each promise fetches data from a URL and parses it as JSON.
- `Promise.all()` is used to run all these promises in parallel and wait for all of them to resolve.
- The function is `async`, so it returns a promise that resolves with an array of JSON responses.

---

### **4. String Compression**
**Problem**: Compress a string by counting repeated characters.

```javascript
function compressString(str) {
  let compressed = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + count;
      count = 1;
    }
  }

  return compressed;
}

// Test cases
console.log(compressString('aaabbcccaa')); // Output: "a3b2c3a2"
console.log(compressString('abc')); // Output: "a1b1c1"
```

**Explanation**:
- Iterate through the string, counting consecutive identical characters.
- When a different character is encountered, append the current character and its count to the result string.
- Reset the count for the new character.

---

### **5. Flatten Nested Arrays**
**Problem**: Flatten a deeply nested array into a single-level array.

```javascript
function flattenArray(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

// Test cases
console.log(flattenArray([1, [2, [3, 4, [5]]]])); // Output: [1, 2, 3, 4, 5]
console.log(flattenArray([[1, 2], [3, [4, 5]]])); // Output: [1, 2, 3, 4, 5]
```

**Explanation**:
- `Array.prototype.reduce()` is used to process each element of the array.
- If an element is an array, we recursively flatten it. If it’s not, we add it directly to the flattened array.
- This solution works for arbitrarily deep nesting.


---

### **6. Unique Characters**
**Problem**: Write a function that checks if a string has all unique characters.

```javascript
function hasUniqueCharacters(str) {
  const charSet = new Set();
  for (const char of str) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}

// Test cases
console.log(hasUniqueCharacters('hello')); // Output: false
console.log(hasUniqueCharacters('world')); // Output: true
console.log(hasUniqueCharacters('abcABC')); // Output: true
```

**Explanation**:
- A `Set` is used to store characters as we iterate through the string.
- If a character is already in the `Set`, the function returns `false`.
- Otherwise, the character is added to the `Set`.
- This solution has **O(n)** time complexity, where `n` is the length of the string.

---

### **7. Deep Clone**
**Problem**: Implement a deep cloning function for objects and arrays.

```javascript
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
```

**Explanation**:
- If the input is not an object (e.g., `null`, number, string), return it as is.
- If it’s an array, recursively clone each element.
- If it’s an object, recursively clone each property.
- This ensures all nested objects and arrays are deeply copied.

---

### **8. Custom Map Function**
**Problem**: Implement your version of the `Array.prototype.map()` method.

```javascript
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
```

**Explanation**:
- A new array `result` is created to store the transformed elements.
- For each element in the input array, the `callback` function is applied with arguments `(currentValue, index, array)`.
- The transformed value is added to the `result` array.
- This mirrors the behavior of the built-in `map()` method.

---

### **9. Sorting Objects by Property**
**Problem**: Write a function to sort an array of objects by a specific property.

```javascript
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
```

**Explanation**:
- The `slice()` method creates a shallow copy of the array to prevent mutation.
- The `sort()` method is used with a custom comparator function:
  - Return `-1` if `a[property] < b[property]`, meaning `a` should come before `b`.
  - Return `1` if `a[property] > b[property]`.
  - Return `0` if they are equal.

---

### **10. Currying**
**Problem**: Implement a curried function that adds three numbers.

```javascript
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Test cases
console.log(add(2)(3)(5)); // Output: 10
console.log(add(1)(1)(1)); // Output: 3
```

**Explanation**:
- Currying transforms a function that takes multiple arguments into a sequence of functions, each taking one argument.
- The `add` function returns another function for each argument, accumulating the sum.
- When the third argument is provided, the innermost function computes and returns the result.

---

Let’s complete the solutions for **problems 11-15**.

---

### **11. Recursive Fibonacci**
**Problem**: Write a function to generate the `n`th Fibonacci number using recursion.

```javascript
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test cases
console.log(fibonacci(6)); // Output: 8
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(0)); // Output: 0
```

**Explanation**:
- The Fibonacci sequence is defined as:
  - `F(0) = 0`
  - `F(1) = 1`
  - `F(n) = F(n-1) + F(n-2)` for `n > 1`
- The base cases (`n = 0` and `n = 1`) return 0 and 1, respectively.
- Recursive calls calculate `F(n-1)` and `F(n-2)`, summing them to find `F(n)`.

**Note**: While this implementation is simple, it’s not efficient due to repeated calculations. Dynamic programming or memoization is better for larger `n`.

---

### **12. Rate Limiter**
**Problem**: Implement a rate limiter function that ensures a callback is executed at most once in a given time frame.

```javascript
function rateLimiter(callback, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      callback(...args);
    }
  };
}

// Test cases
const log = () => console.log('Called at', Date.now());
const limitedLog = rateLimiter(log, 1000);

limitedLog(); // Called immediately
limitedLog(); // Ignored if within 1 second
setTimeout(limitedLog, 1100); // Called after 1.1 seconds
```

**Explanation**:
- `lastCall` stores the timestamp of the last execution.
- `Date.now()` checks the current time.
- If the difference between `now` and `lastCall` exceeds the limit, the callback is executed, and `lastCall` is updated.

---

### **13. Debouncing**
**Problem**: Write a debounce function that delays a callback until after a specified time has elapsed since the last call.

```javascript
function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
}

// Test cases
const log = () => console.log('Debounced at', Date.now());
const debouncedLog = debounce(log, 500);

debouncedLog(); // Starts a timer
debouncedLog(); // Resets the timer
setTimeout(debouncedLog, 600); // Executes 600ms later
```

**Explanation**:
- `clearTimeout(timer)` cancels any ongoing timer when the function is called.
- `setTimeout` starts a new timer for the callback.
- The callback only executes after the delay if no further calls occur.

---

### **14. Binary Search**
**Problem**: Implement binary search on a sorted array.

```javascript
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
```

**Explanation**:
- Binary search works on sorted arrays by repeatedly halving the search range.
- Start with `left` as the first index and `right` as the last index.
- Calculate the middle index (`mid`) and compare the middle element with the target.
  - If equal, return the index.
  - If less, narrow the search to the right half.
  - If greater, narrow the search to the left half.
- If `left > right`, the target is not in the array.

---

### **15. Balanced Parentheses**
**Problem**: Write a function that checks if a string has balanced parentheses.

```javascript
function isBalanced(str) {
  const stack = [];
  const pairs = { ')': '(', ']': '[', '}': '{' };

  for (const char of str) {
    if (['(', '[', '{'].includes(char)) {
      stack.push(char); // Push opening brackets to the stack
    } else if ([')', ']', '}'].includes(char)) {
      if (stack.pop() !== pairs[char]) {
        return false; // Mismatched or unbalanced
      }
    }
  }

  return stack.length === 0; // Check if all brackets are balanced
}

// Test cases
console.log(isBalanced('(a + b) * (c - d)')); // Output: true
console.log(isBalanced('(a + b * (c - d)')); // Output: false
console.log(isBalanced('[{()}]')); // Output: true
console.log(isBalanced('[{(}]')); // Output: false
```

**Explanation**:
- A `stack` is used to track opening brackets.
- For each character:
  - Push it onto the stack if it’s an opening bracket.
  - If it’s a closing bracket, pop the stack and check if it matches the expected opening bracket.
- At the end, if the stack is empty, all brackets are balanced.

---

The 15 problems presented are **diverse** and cover many **core concepts** at an intermediate level of JavaScript, including array and object manipulation, recursion, functional programming, promises, and algorithmic problem-solving. However, JavaScript is a vast language, and there are additional intermediate-level concepts that might not have been addressed in these problems.

Here’s a list of **additional topics** and problem types that you might consider exploring to ensure a comprehensive understanding:

---

### **1. Asynchronous Programming**
- **Problem**: Create a custom implementation of `Promise.all()`.
- **Problem**: Implement a retry mechanism for failed API calls with exponential backoff.

### **2. Prototype and Inheritance**
- **Problem**: Write a function to demonstrate prototypal inheritance.
- **Problem**: Implement a custom `new` operator in JavaScript.

---

### **3. Advanced Array and Object Operations**
- **Problem**: Group an array of objects by a specific key (e.g., `age`).
- **Problem**: Create a function to deeply merge two objects.

---

### **4. Functional Programming**
- **Problem**: Implement a custom version of `Array.prototype.filter()`.
- **Problem**: Write a function to compose multiple functions.

---

### **5. Error Handling**
- **Problem**: Write a function to safely access deeply nested object properties without throwing errors.
- **Problem**: Implement a function that retries an operation on failure up to a maximum number of attempts.

---

### **6. Regular Expressions**
- **Problem**: Write a regex to validate an email address.
- **Problem**: Create a function to extract all hashtags from a given string.

---

### **7. Advanced DOM Manipulation**
- **Problem**: Write a function to implement a simple dropdown menu with JavaScript.
- **Problem**: Implement a custom event listener for delegating events to dynamically created elements.

---

### **8. Memory Management and Closures**
- **Problem**: Explain and demonstrate how closures can lead to memory leaks and how to prevent them.
- **Problem**: Create a function that caches results of expensive calculations (memoization).

---

### **9. Performance Optimization**
- **Problem**: Write a function to compare the execution times of two functions using `performance.now()`.
- **Problem**: Optimize a function that processes a large dataset efficiently.

---

### **10. Advanced ES6+ Features**
- **Problem**: Use destructuring and rest/spread operators to clone and manipulate objects/arrays.
- **Problem**: Demonstrate the use of `Symbol` and `WeakMap` in real-world scenarios.

---

### **11. Testing and Debugging**
- **Problem**: Write unit tests for a function using a popular testing library like Jest.
- **Problem**: Debug and fix a script that has asynchronous race conditions.

---

### **12. Advanced Algorithms**
- **Problem**: Write a function to solve the "Knapsack Problem."
- **Problem**: Implement a basic Least Recently Used (LRU) cache.

---

### **13. Modular JavaScript**
- **Problem**: Write a small module using ES6 modules and demonstrate how to import/export it.
- **Problem**: Create a singleton in JavaScript and demonstrate its use.

---

### **14. Advanced String Manipulation**
- **Problem**: Create a function to convert a string to CamelCase, snake_case, or kebab-case.
- **Problem**: Implement a text justification algorithm.

---

### **15. JavaScript in the Browser**
- **Problem**: Write a script to lazily load images as the user scrolls down.
- **Problem**: Create a simple to-do app using localStorage for persistence.

---

### **Next Steps**
To comprehensively master **intermediate JavaScript**, you should:
1. Explore **framework-specific challenges** (e.g., React, Node.js).
2. Delve deeper into **design patterns** like the Singleton, Factory, or Observer.
3. Work on **real-world applications** (e.g., building APIs or front-end features).
4. Learn **tooling and debugging techniques** (e.g., using Chrome DevTools effectively).

Would you like me to expand on any of these topics or create challenges for them?

Below are **best-practice solutions and detailed explanations** for the newly listed **15 JavaScript intermediate problems**. These solutions are structured for clarity, performance, and real-world applicability.

---

### **1. Custom `Promise.all()` Implementation**
**Problem**: Implement a custom `Promise.all()` function.

```javascript
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
```

**Explanation**:
- Resolves all promises and collects their results in the original order.
- If any promise fails, the entire function rejects immediately.
- Handles non-Promise inputs by wrapping them with `Promise.resolve()`.

---

### **2. Prototypal Inheritance**
**Problem**: Demonstrate prototypal inheritance with a `Person` and `Student`.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
};

function Student(name, age, grade) {
  Person.call(this, name, age); // Call the parent constructor
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype); // Inherit prototype
Student.prototype.constructor = Student;

Student.prototype.study = function () {
  return `${this.name} is studying in grade ${this.grade}.`;
};

// Test cases
const student = new Student("Alice", 20, "10th");
console.log(student.greet()); // Output: "Hi, I'm Alice and I'm 20 years old."
console.log(student.study()); // Output: "Alice is studying in grade 10th."
```

**Explanation**:
- `Object.create()` creates a new object with the parent's prototype.
- `call()` invokes the parent constructor in the child’s context.
- `Student.prototype.constructor` is reassigned to avoid breaking the prototype chain.

---

### **3. Group Array of Objects**
**Problem**: Group an array of objects by a specific key.

```javascript
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
```

**Explanation**:
- The `reduce()` function iterates through the array.
- Groups objects based on the provided `key`, storing them in the accumulator.

---

### **4. Deep Merge Objects**
**Problem**: Write a function to deeply merge two objects.

```javascript
function deepMerge(obj1, obj2) {
  const result = { ...obj1 };

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (typeof obj2[key] === "object" && !Array.isArray(obj2[key])) {
        result[key] = deepMerge(result[key] || {}, obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }

  return result;
}

// Test cases
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

console.log(deepMerge(obj1, obj2)); 
// Output: { a: 1, b: { c: 2, d: 3 }, e: 4 }
```

**Explanation**:
- Recursively merges objects while avoiding reference sharing for nested objects.
- Handles conflicts by prioritizing `obj2`.

---

### **5. Custom `Array.prototype.filter()`**
**Problem**: Implement a custom filter function.

```javascript
function customFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

// Test cases
const nums = [1, 2, 3, 4];
console.log(customFilter(nums, (n) => n % 2 === 0)); // Output: [2, 4]
```

**Explanation**:
- Iterates through the array, applying the `callback` to each element.
- Pushes elements for which the callback returns `true`.

---

### **6. Safe Nested Access**
**Problem**: Safely access deeply nested object properties.

```javascript
function getSafe(obj, path, defaultValue) {
  return path.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : defaultValue), obj);
}

// Test cases
const data = { a: { b: { c: 42 } } };
console.log(getSafe(data, ["a", "b", "c"], null)); // Output: 42
console.log(getSafe(data, ["a", "x", "y"], null)); // Output: null
```

**Explanation**:
- Uses `reduce()` to traverse the object path, returning the default value if any key is missing.

---

### **7. Regular Expression for Emails**
**Problem**: Validate an email address.

```javascript
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// Test cases
console.log(validateEmail("test@example.com")); // Output: true
console.log(validateEmail("invalid-email")); // Output: false
```

**Explanation**:
- Matches typical email patterns with support for common edge cases.

---

Let's continue with solutions for the remaining problems:

---

### **8. Custom `new` Operator**
**Problem**: Implement a custom `new` operator in JavaScript.

```javascript
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
```

**Explanation**:
- Creates a new object, sets its prototype to the constructor’s prototype, and invokes the constructor with the provided arguments.
- Ensures that the function behaves similarly to the built-in `new` operator.

---

### **9. Retry Mechanism with Exponential Backoff**
**Problem**: Implement a retry mechanism for failed API calls with exponential backoff.

```javascript
function retryWithExponentialBackoff(fn, retries, delay) {
  return new Promise((resolve, reject) => {
    const attempt = (retriesLeft, delayLeft) => {
      fn()
        .then(resolve)
        .catch((err) => {
          if (retriesLeft === 0) {
            reject(err);
          } else {
            setTimeout(() => attempt(retriesLeft - 1, delayLeft * 2), delayLeft);
          }
        });
    };

    attempt(retries, delay);
  });
}

// Test case
const apiCall = () => new Promise((resolve, reject) => Math.random() > 0.7 ? resolve('Success') : reject('Failed'));

retryWithExponentialBackoff(apiCall, 3, 1000).then(console.log).catch(console.error);
```

**Explanation**:
- Recursively calls the function with increasing delay (exponential backoff) on failure.
- Stops after the specified retries or resolves if the function succeeds.

---

### **10. Compose Functions**
**Problem**: Write a function to compose multiple functions.

```javascript
function compose(...fns) {
  return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
}

// Test case
const add5 = (x) => x + 5;
const multiply2 = (x) => x * 2;

const composedFunction = compose(add5, multiply2);
console.log(composedFunction(2)); // Output: 9 (2 * 2 + 5)
```

**Explanation**:
- `reduceRight()` applies the functions from right to left (from last to first).
- This creates a function that applies each function in sequence, passing the result to the next function.

---

### **11. Object Destructuring and Rest/Spread Operators**
**Problem**: Use destructuring and rest/spread operators to clone and manipulate objects.

```javascript
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
```

**Explanation**:
- Destructuring extracts specific properties from an object.
- The spread operator (`...`) copies all properties into a new object.
- The rest operator (`...`) collects the remaining properties into a new object.

---

### **12. Text Justification Algorithm**
**Problem**: Implement a text justification algorithm.

```javascript
function fullJustify(words, maxWidth) {
  let result = [];
  let currentLine = [];
  let currentLength = 0;

  for (let word of words) {
    if (currentLength + word.length + currentLine.length > maxWidth) {
      let spaces = maxWidth - currentLength;
      if (currentLine.length === 1) {
        result.push(currentLine[0] + " ".repeat(spaces));
      } else {
        let spaceBetween = Math.floor(spaces / (currentLine.length - 1));
        let extraSpaces = spaces % (currentLine.length - 1);

        for (let i = 0; i < currentLine.length - 1; i++) {
          currentLine[i] += " ".repeat(spaceBetween);
          if (i < extraSpaces) {
            currentLine[i] += " ";
          }
        }
        result.push(currentLine.join(''));
      }
      currentLine = [];
      currentLength = 0;
    }
    currentLine.push(word);
    currentLength += word.length;
  }

  result.push(currentLine.join(" ") + " ".repeat(maxWidth - currentLength - (currentLine.length - 1)));
  return result;
}

// Test case
const words = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth = 16;
console.log(fullJustify(words, maxWidth));
```

**Explanation**:
- Justifies text by adjusting spaces between words to ensure each line is exactly `maxWidth` characters.
- For the last line, words are left-aligned and the remaining space is distributed at the end.

---

### **13. LRU (Least Recently Used) Cache**
**Problem**: Implement an LRU cache.

```javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value); // Move to end to show it was recently used
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value); // Remove least recently used
    }
    this.cache.set(key, value);
  }
}

// Test case
const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // Output: 1
lru.put(3, 3);
console.log(lru.get(2)); // Output: -1
```

**Explanation**:
- Uses a `Map` to maintain insertion order.
- Moves accessed keys to the end of the `Map` and removes the oldest (least recently used) when the cache exceeds its capacity.

---

### **14. Optimizing Performance with `performance.now()`**
**Problem**: Compare the execution times of two functions.

```javascript
function measureTime(fn) {
  const start = performance.now();
  fn();
  const end = performance.now();
  return end - start;
}

const slowFunction = () => {
  let sum = 0;
  for (let i = 0; i < 1e6; i++) sum += i;
  return sum;
};

const fastFunction = () => 42;

console.log(measureTime(slowFunction)); // Output: Time taken for slowFunction
console.log(measureTime(fastFunction)); // Output: Time taken for fastFunction
```

**Explanation**:
- Uses `performance.now()` to measure the time (in milliseconds) taken to execute a function.
- Useful for performance benchmarking.

---

### **15. Singleton Pattern**
**Problem**: Implement a Singleton pattern in JavaScript.

```javascript
const Singleton = (function () {
  let instance;

  function createInstance() {
    return { value: Math.random() };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// Test case
const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2); // Output: true (same instance)
```

**Explanation**:
- The `Singleton` pattern ensures that a class has only one instance and provides a global point of access to it.
- The `getInstance` method checks if an instance already exists, otherwise, it creates one.

---

