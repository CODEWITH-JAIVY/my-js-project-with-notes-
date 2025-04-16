let Array  = [ "Apple" , "Banana" , "grava" , "Mango"] 
// console.log(Array.join(" *  ")) 
// console.log(Array.toString());
 
let num  = 10 ;
// console.log(num.toString());
// console.log(typeof(num));

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
// console.log(myChildren);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
// console.log(fruits);


const fruit = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruit.copyWithin(2, 0, 2);
console.log(fruit);
