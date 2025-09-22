// Base class: Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display basic info
  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Subclass: Student
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // Call the parent constructor
    this.course = course;
  }

  // Overriding method
  displayInfo() {
    return `${super.displayInfo()}, Course: ${this.course}`;
  }
}

// Subclass: Teacher
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); // Call the parent constructor
    this.subject = subject;
  }

  // Overriding method
  displayInfo() {
    return `${super.displayInfo()}, Subject: ${this.subject}`;
  }
}

// Create instances
const student1 = new Student("Alice", 20, "Computer Science");
const teacher1 = new Teacher("Mr. Smith", 45, "Mathematics");

// Demonstrating inheritance and method overriding
console.log(student1.displayInfo());
// Output: Name: Alice, Age: 20, Course: Computer Science

console.log(teacher1.displayInfo());
// Output: Name: Mr. Smith, Age: 45, Subject: Mathematics
