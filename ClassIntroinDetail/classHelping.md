# 🆚 Key Differences Between the Two


| Feature           | Animal Class                                | User Class                                 |
|-------------------|----------------------------------------------|---------------------------------------------|
| **Definition Type** | Class Expression                            | Class Declaration                            |
| **Syntax**          | `const Animal = class {}`                   | `class User {}`                              |
| **Name Availability** | Class name is stored in a variable (`Animal`) | Class name is hoisted as `User`             |
| **Hoisting**        | ❌ Not hoisted – must be defined before use | ✅ Hoisted – can be used before its definition |
| **Use Case**        | Useful for dynamic or inline definitions    | Used when defining a class in a standard way |

```javascript 
// User class — defined using a class declaration 


class User   {
  constructor( Name , age )  {
    this.Name  =  Name  ;
    this.age = age  ;
}
// greet is method which can be access popr of the user class 
 greet() {
    console.log(` hii , my name is ${this.Name}  and my age is ${this.age}`);
    
 }

}
let p  = new User ( 'jaivy' , 23 ) 
let p2  = new User ( "sanjeet " , 24 ) ;
let p3  = new User ( "sanjeet  kumar  " , 24 ) ;
// p2.greet() ; 
// p.greet() ;
p3.greet() ;

```

# class Expression   
```javascript  

// Define the class using a class expression
const Animal = class {
  constructor(type, sound) {
    this.type = type;
    this.sound = sound;
  }

  speak() {
    console.log(`${this.type} makes a sound: ${this.sound}`);
  }

  info() {
    console.log(`This is a ${this.type}.`);
  }
};

// Create instances of Animal
const dog = new Animal("Dog", "Woof!");
const cat = new Animal("Cat", "Meow!");
const cow = new Animal("Cow", "Moo!");

// Call their methods
dog.speak();  // Dog makes a sound: Woof!
dog.info();   // This is a Dog.

cat.speak();  // Cat makes a sound: Meow!
cat.info();   // This is a Cat.

cow.speak();  // Cow makes a sound: Moo!
cow.info();   // This is a Cow.

```

