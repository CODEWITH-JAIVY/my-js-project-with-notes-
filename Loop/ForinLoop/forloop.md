# ❤️❤️ for  in loop 
- The for...in loop is used to iterate over the keys (property names or indexes) of an object or an array.
- It returns the keys (in objects) or the indexes (in arrays). 
- Commonly used when you want to access both the key and its value. 
  
  ## syntax of  for the for in loop 
```javascript 
for (let key in object_or_array) {
   // code using key and value
}

```

## example 
```javascript
const person = {
  name: "Jaivy",
  age: 21,
  course: "BCA"
};

for (let key in person) {
  console.log(`${key} ➝ ${person[key]}`);
}


```
### outpur  will bee 
```avacript 
name ➝ Jaivy
age ➝ 21
course ➝ BCA

```
# 💡 Example 2: With an Array
```javascript
const arr = [10, 20, 30];

for (let index in arr) {
  console.log(`Index ${index} ➝ Value ${arr[index]}`);
}

Index 0 ➝ Value 10
Index 1 ➝ Value 20
Index 2 ➝ Value 30
 
```
## ⚠️ Important Notes:
- for...in should not be used for array iteration if you're only interested in values. Use for...of instead. 
- It can also access inherited properties, so be cautious when using it on objects with a prototype chain