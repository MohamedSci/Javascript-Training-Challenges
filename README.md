---

# **Complete JavaScript Syllabus: 30 Essential Intermediate Problems with Solutions and Explanations**

JavaScript is one of the most popular and versatile programming languages today. Mastering it involves understanding key concepts and techniques essential for building robust web applications. In this guide, we will explore **30 intermediate JavaScript problems** that focus on various fundamental concepts, algorithms, and best practices.

This comprehensive syllabus covers **functions**, **asynchronous programming**, **prototypes**, **advanced array manipulations**, and more. Each problem comes with a **solution** and a **clear explanation** to ensure you can tackle any JavaScript challenge with confidence.

---

### **1. Custom `Promise.all()` Implementation**

#### Problem:
Create your own version of `Promise.all()` that resolves an array of promises and returns their results in the same order.

#### Solution:
```javascript
function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedPromises = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((value) => {
        results[index] = value;
        completedPromises++;
        if (completedPromises === promises.length) {
          resolve(results);
        }
      }).catch(reject);
    });

    if (promises.length === 0) resolve(results);
  });
}
```

#### Explanation:
- `Promise.all()` resolves an array of promises in order.
- This custom implementation uses a `forEach` loop to resolve each promise and store the result.
- The promise resolves when all promises are completed.

---

### **2. Prototypal Inheritance Demonstration**

#### Problem:
Demonstrate **prototypal inheritance** by creating a `Person` constructor and extending it with a `Student` constructor.

#### Solution:
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
};

function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  return `${this.name} is studying in grade ${this.grade}.`;
};
```

#### Explanation:
- `Person.call(this, name, age)` calls the parent constructor within the child constructor.
- The `Object.create()` method sets up inheritance so the `Student` prototype is based on `Person`.

---

### **3. Grouping Objects by Key**

#### Problem:
Group an array of objects by a specified key.

#### Solution:
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
```

#### Explanation:
- Uses `reduce()` to iterate through the array, grouping objects based on a common key.
- Efficient grouping ensures data remains organized based on a dynamic key.

---

### **4. Deep Merging Objects**

#### Problem:
Merge two objects deeply, combining nested properties into one object.

#### Solution:
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
```

#### Explanation:
- Uses recursion to deeply merge nested objects, preserving original data structure.
- Ensures conflicts are handled by prioritizing the second object (`obj2`).

---

### **5. Custom `Array.prototype.filter()`**

#### Problem:
Write your own `filter()` function to replicate its behavior.

#### Solution:
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
```

#### Explanation:
- Iterates through the array, applies the `callback` function to each item.
- Adds elements to the result array if the callback returns `true`.

---

### **6. Safe Nested Property Access**

#### Problem:
Safely access a deeply nested object without risking errors.

#### Solution:
```javascript
function getSafe(obj, path, defaultValue) {
  return path.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : defaultValue), obj);
}
```

#### Explanation:
- Uses `reduce()` to safely traverse the object path.
- Returns the default value if any key does not exist at any depth.

---

### **7. Email Validation with Regular Expressions**

#### Problem:
Create a regex pattern to validate email addresses.

#### Solution:
```javascript
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
```

#### Explanation:
- The regex checks for the general structure of email addresses, ensuring that only valid formats pass.

---

### **8. Custom `new` Operator**

#### Problem:
Implement your own version of the `new` keyword in JavaScript.

#### Solution:
```javascript
function customNew(constructor, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  const result = constructor.apply(obj, args);
  return result instanceof Object ? result : obj;
}
```

#### Explanation:
- `customNew` creates an object, sets the prototype, and calls the constructor with the arguments.
- Ensures correct behavior like the built-in `new`.

---

### **9. Retry Mechanism with Exponential Backoff**

#### Problem:
Implement a retry mechanism for API calls with exponential backoff.

#### Solution:
```javascript
function retryWithExponentialBackoff(fn, retries, delay) {
  return new Promise((resolve, reject) => {
    const attempt = (retriesLeft, delayLeft) => {
      fn().then(resolve).catch((err) => {
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
```

#### Explanation:
- This function retries a failed API call with an exponentially increasing delay.
- It stops after the specified number of retries.

---

### **10. Function Composition**

#### Problem:
Compose multiple functions together so that the output of one function becomes the input of the next.

#### Solution:
```javascript
function compose(...fns) {
  return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
}
```

#### Explanation:
- `reduceRight()` executes the functions from right to left.
- This ensures that the last function in the sequence is called first.

---

### **11. Destructuring and Spread/Rest Operators**

#### Problem:
Use destructuring and spread/rest operators for object manipulation.

#### Solution:
```javascript
const person = { name: "Alice", age: 25, country: "USA" };
const { name, age } = person;
const personCopy = { ...person };
const { country, ...rest } = person;
```

#### Explanation:
- Destructuring extracts values directly from objects.
- Spread (`...`) copies an entire object, and rest (`...`) collects the remaining keys.

---

### **12. Text Justification**

#### Problem:
Implement a text justification algorithm that aligns text to the left and right.

#### Solution:
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
```

#### Explanation:
- This algorithm distributes spaces between words in each line, ensuring lines are exactly `maxWidth` characters.

---

### **13. LRU Cache Implementation**

#### Problem:
Implement an **LRU (Least Recently Used)** cache with basic functionality

.

#### Solution:
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
```

#### Explanation:
- The cache uses `Map` to maintain insertion order.
- The least recently used (LRU) item is removed when the cache exceeds its capacity.

---

### **14. Performance Benchmarking with `performance.now()`**

#### Problem:
Measure the execution time of a function using `performance.now()`.

#### Solution:
```javascript
function measureTime(fn) {
  const start = performance.now();
  fn();
  const end = performance.now();
  return end - start;
}
```

#### Explanation:
- Uses `performance.now()` for high-resolution timing.
- Measures the time in milliseconds for the function execution.

---

### **15. Singleton Design Pattern**

#### Problem:
Implement a Singleton pattern in JavaScript.

#### Solution:
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
```

#### Explanation:
- Ensures only one instance of the object is created.
- The `getInstance()` method ensures access to that instance.

---

### **Final Words**

These **30 JavaScript problems** cover various essential topics, including **asynchronous programming**, **prototypal inheritance**, **algorithmic challenges**, and **design patterns**. By practicing and mastering these problems, you will solidify your understanding of **intermediate JavaScript** and be well-equipped to tackle real-world projects.

### **16. Flatten Nested Arrays**

#### Problem:
Write a function to flatten a deeply nested array.

#### Solution:
```javascript
function flatten(arr) {
  return arr.reduce((flat, item) => 
    Array.isArray(item) ? flat.concat(flatten(item)) : flat.concat(item), []);
}
```

#### Explanation:
- Uses recursion to handle arrays within arrays.
- The `reduce()` method iterates through the array and concatenates nested elements, flattening them into a single array.

---

### **17. Debouncing a Function**

#### Problem:
Implement a debounced function, which limits the rate at which a function is invoked.

#### Solution:
```javascript
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}
```

#### Explanation:
- The `debounce()` function ensures that the function `func` is called only after a specified delay (e.g., after the user stops typing).
- `clearTimeout()` is used to cancel the previous timer before starting a new one.

---

### **18. Throttling a Function**

#### Problem:
Implement a throttling function, which limits the number of times a function can be called within a specified time period.

#### Solution:
```javascript
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function(...args) {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
```

#### Explanation:
- `throttle()` ensures the function `func` is executed only once within a given `limit` period (e.g., once every 100ms).
- It uses `setTimeout()` and `clearTimeout()` to control the execution frequency.

---

### **19. Deep Clone an Object**

#### Problem:
Write a function to create a **deep copy** of an object, without affecting the original object.

#### Solution:
```javascript
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```

#### Explanation:
- The function uses `JSON.stringify()` to convert the object to a string and `JSON.parse()` to create a new object from that string.
- This method works for objects without methods, `undefined`, or circular references.

---

### **20. Find Duplicate Elements in an Array**

#### Problem:
Write a function that identifies and returns all duplicate elements in an array.

#### Solution:
```javascript
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  arr.forEach(item => {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  });
  return [...duplicates];
}
```

#### Explanation:
- Uses two sets: `seen` to store unique items, and `duplicates` to store items that appear more than once.
- The function runs in linear time (`O(n)`), which is efficient for large arrays.

---

### **21. Calculate Fibonacci Numbers (Memoization)**

#### Problem:
Write a function that calculates Fibonacci numbers using **memoization** for improved performance.

#### Solution:
```javascript
function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}
```

#### Explanation:
- Memoization caches results to avoid recalculating Fibonacci numbers multiple times.
- The `memo` object stores previously computed values, improving efficiency.

---

### **22. Implementing `Array.prototype.map()`**

#### Problem:
Write a custom implementation of `Array.prototype.map()`.

#### Solution:
```javascript
function customMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}
```

#### Explanation:
- The function iterates through each element in the array, applying the `callback` function and storing the result in a new array.
- It mimics the behavior of the built-in `map()` function.

---

### **23. Counting Occurrences of Characters in a String**

#### Problem:
Write a function that counts the occurrences of each character in a string.

#### Solution:
```javascript
function countOccurrences(str) {
  return str.split('').reduce((count, char) => {
    count[char] = (count[char] || 0) + 1;
    return count;
  }, {});
}
```

#### Explanation:
- `split('')` converts the string into an array of characters.
- `reduce()` aggregates the count of each character in an object.

---

### **24. Palindrome Check**

#### Problem:
Write a function to check if a string is a **palindrome** (reads the same forwards and backwards).

#### Solution:
```javascript
function isPalindrome(str) {
  const cleanStr = str.replace(/\W/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}
```

#### Explanation:
- `replace(/\W/g, '')` removes non-alphanumeric characters.
- `split('').reverse().join('')` reverses the string and compares it to the original cleaned string.

---

### **25. Counting Vowels in a String**

#### Problem:
Write a function that counts the number of vowels in a string.

#### Solution:
```javascript
function countVowels(str) {
  const vowels = 'aeiou';
  return str.split('').filter(char => vowels.includes(char.toLowerCase())).length;
}
```

#### Explanation:
- The function splits the string into characters and filters out vowels using `filter()` and `includes()`.
- It then returns the length of the filtered array.

---

### **26. Sum of Digits in a Number**

#### Problem:
Write a function that computes the sum of digits in a given number.

#### Solution:
```javascript
function sumDigits(num) {
  return Math.abs(num).toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}
```

#### Explanation:
- `Math.abs(num)` ensures the number is positive.
- `split('')` converts the number into an array of digits, and `reduce()` sums them.

---

### **27. Convert a String to Title Case**

#### Problem:
Write a function that converts a string to **title case** (capitalizing the first letter of each word).

#### Solution:
```javascript
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
```

#### Explanation:
- `toLowerCase()` ensures all words start in lowercase.
- `map()` is used to capitalize the first letter of each word.

---

### **28. Convert a String to Camel Case**

#### Problem:
Write a function that converts a string into **camel case** (e.g., `"hello world"` to `"helloWorld"`).

#### Solution:
```javascript
function toCamelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase())
    .replace(/\s+/g, '');
}
```

#### Explanation:
- This function replaces spaces and capitalizes the first letter of each word except the first one.

---

### **29. Merge Sorted Arrays**

#### Problem:
Write a function that merges two **sorted** arrays into one sorted array.

#### Solution:
```javascript
function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0, j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  
  return result.concat(arr1.slice(i), arr2.slice(j));
}
```

#### Explanation:
- This function compares elements from both arrays and merges them in sorted order.
- The `concat()` method is used to append any remaining elements from either array.

---

### **30. Implementing a Simple Event Emitter**

#### Problem:
Write a simple **EventEmitter** class to handle custom events.

#### Solution:
```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(...args));
    }
  }

  off(event, listener) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(l => l !== listener);
    }
  }
}
```

#### Explanation:
- The `EventEmitter` class allows registering, emitting, and removing event listeners.
- The `on()` method adds listeners, `emit()` triggers the event, and `off()` removes a specific listener.

---

### **Conclusion**

These 30 JavaScript problems cover a wide range of topics from **functional programming** and **
**object-oriented design** to **algorithmic challenges** and **advanced techniques** like **debouncing** and **throttling**. They provide a comprehensive overview of the **intermediate JavaScript** level and are designed to help you master the key concepts that are essential for real-world development. 

### **Key Takeaways:**
- **Advanced JavaScript Techniques**: You will learn essential techniques like **debouncing**, **throttling**, **memoization**, and **event handling**.
- **Algorithmic Problem-Solving**: The problems test your ability to solve complex algorithmic challenges, such as flattening arrays, calculating Fibonacci numbers, and merging sorted arrays.
- **Functional Programming**: The problems focus on understanding concepts such as **map**, **reduce**, **filter**, and recursion.
- **Asynchronous Programming**: Topics like **debouncing** and **throttling** will help you handle asynchronous operations more effectively.
- **Design Patterns**: You’ll explore concepts like the **Singleton** and **LRU Cache**, which are essential for building scalable applications.

### **Practice and Application:**
- The problems are designed to help you practice and refine your problem-solving skills. By implementing the solutions and understanding the underlying principles, you’ll improve your understanding of JavaScript and be well-prepared for both technical interviews and real-world projects.
- To solidify your knowledge, try solving the problems with different approaches, optimizing for performance, or applying them to actual use cases (e.g., building a small application or working on an open-source project).

By working through these challenges, you’ll gain a deeper understanding of JavaScript and its capabilities, preparing you for more advanced topics such as frameworks (React, Vue, Angular), Node.js, and full-stack development.

---

### **Further Learning Resources:**
- **MDN Web Docs**: The go-to reference for all JavaScript documentation and examples.
- **JavaScript.info**: A comprehensive guide for both beginners and intermediate learners.
- **Eloquent JavaScript** (book): An excellent resource for mastering JavaScript and exploring more advanced topics.
- **LeetCode**, **Codewars**, and **HackerRank**: Online platforms to practice more algorithmic challenges and improve your problem-solving skills.

Good luck with your JavaScript journey!
