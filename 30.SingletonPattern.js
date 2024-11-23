// 30.Singleton Pattern
// Problem: Implement a Singleton pattern in JavaScript.

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



// Explanation:
// -The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.
// -The getInstance method checks if an instance already exists, otherwise, it creates one.