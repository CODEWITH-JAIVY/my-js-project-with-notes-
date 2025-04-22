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