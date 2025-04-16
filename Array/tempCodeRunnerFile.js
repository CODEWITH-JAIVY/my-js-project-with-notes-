let number = [1, 2, 3, 4, 5, 6, 7];

number.forEach(element => {
    console.log(element);

});
number.map(element => element * 2)
console.log(number)

let evens = number.filter(element => element % 2 === 0);
console.log(evens); // [2, 4, 6]


let sum = number.reduce((acc, element) => acc + element, 0);
console.log(sum); // 28