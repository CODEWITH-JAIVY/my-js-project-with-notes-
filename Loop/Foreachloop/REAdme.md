# 🔁 JavaScript `forEach()` Loop

The `forEach()` method in JavaScript is used to iterate over the elements of an array. Unlike the traditional `for` loop, it **does not return a new array**. Instead, it **executes a callback function once for each array element**.

---

## ✅ Key Points

- `forEach()` is a method available on arrays.
- It takes a **callback function** as an argument.
- The callback function is **invoked once for each array element**.
- Commonly used for tasks like logging, DOM manipulation, or performing actions without modifying the original array.

---

## 📄 Basic Example: `forEach()` Loop  
📋 **Copy Me!**

```javascript
// forloop.js

let arr = [1, 2, 3, 4, 5];  // Define an array

// Call display function for each element in the array
arr.forEach(display);

// Callback function
function display(variableValue) {
  console.log(variableValue);
}
```


## 📄 Example Using Arrow Function 
```javascript 
let arr = [1, 2, 3, 4, 5, 6];

// Arrow function with forEach
arr.forEach((value) => {
  // value is a parameter passed into the arrow function
  console.log(value);
});

```
##   🌐 Real-Life Example Using forEach() in the Web (DOM Manipulation)
### 📋 Copy Me! 
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>forEach Example</title>
</head>
<body>
  <h2>Usernames:</h2>
  <ul id="userList"></ul>

  <script>
    const users = ["Aman", "Ravi", "Simran", "Priya", "Sahil"];
    const listElement = document.getElementById("userList");

    users.forEach(function(user) {
      // Create a new <li> element
      const listItem = document.createElement("li");

      // Set the text to the user's name
      listItem.textContent = user;

      // Add the <li> to the <ul>
      listElement.appendChild(listItem);

      // Optional: log in console
      console.log("User added:", user);
    });
  </script>
</body>
</html>

 

``` 


 ### 

 ## 📚 Related Methods

| Method         | Returns New Array | Supports Early Exit | Use Case                                              |
|----------------|-------------------|----------------------|--------------------------------------------------------|
| `forEach()`    | ❌                | ❌                   | Perform actions for each item (side-effects)           |
| `map()`        | ✅                | ❌                   | Transform each element and return new array            |
| `filter()`     | ✅                | ❌                   | Return array with items that match a condition         |
| `reduce()`     | ✅                | ❌                   | Accumulate a single result from the array              |
| `for` / `for...of` | ✅ / ❌        | ✅                   | More control over iteration (e.g., `break`, `continue`) |
