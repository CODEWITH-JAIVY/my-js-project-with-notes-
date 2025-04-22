// inheritance is the property of  oop that inherit the property and behavior of the parent class 
//  extend using of chaining the class
/*super ()   is used to inherit the propery of the parent class it should be must 1st line of the 
 chind class 

*/

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  class Employee extends Person {
    constructor(name, age, position) {
      super(name, age); // Call the parent constructor (Person)
      this.position = position;
    }
  
    describe() {
      console.log(`${this.name} works as a ${this.position}`);
    }
  }
//   const emp = new Employee("Jaivy", 23, "Software Engineer");
const emp = new Employee("Jaivy", 23, "Software Engineer");
emp.greet();     // From Person class
emp.describe();  // From Employee class


