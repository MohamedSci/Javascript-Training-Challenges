// Prototypal Inheritance
// Problem: Demonstrate prototypal inheritance with a Person and Student.

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


// Explanation:
// -Object.create() creates a new object with the parent's prototype.
// -call() invokes the parent constructor in the child’s context.
// -Student.prototype.constructor is reassigned to avoid breaking the prototype chain.