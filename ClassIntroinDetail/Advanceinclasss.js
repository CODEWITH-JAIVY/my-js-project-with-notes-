//User class — defined using a class declaration 

const Animal  = class {
    constructor ( type , sound  ) {
        this.type = type  
        this.sound = sound 
    }
    speak() {
        console.log(` ${this.type} make sound ${this.sound} `);
    }

    info() {
        console.log( ` this is  ${this.type}`);
        
    }

}
// create instances of Animal 
const dog = new Animal ( "Dog" , "Woof") ;
const  cat  = new Animal ( "Cat" , "Meow") 
const cow = new Animal ( "Cow" , "Moo") 

// Call their methods
dog.speak();  // Dog makes a sound: Woof!
dog.info();   // This is a Dog.

cat.speak();  // Cat makes a sound: Meow!
cat.info();   // This is a Cat.

cow.speak();  // Cow makes a sound: Moo!
cow.info();   // This is a Cow.
 