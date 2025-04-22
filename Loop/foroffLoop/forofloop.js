let arr = [1,2,3,4,5,6]
for( let key  of arr) {
    // console.log(key);
    
}
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
// console.log(txt);

const Name = "W3Schools";

for (const x of Name) {
  // code block to be executed
//   console.log(x);
  
}

const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters) {
  text += x;
}
console.log(text);
