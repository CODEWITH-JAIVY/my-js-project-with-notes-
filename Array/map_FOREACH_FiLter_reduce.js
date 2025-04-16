
// // Final Summary (Visual Table):
// // Method	Use For	Returns	Modifies original?	Common Usage
// // forEach	Just loop through items	undefined	❌	Printing, side effects
// // map	Transform each item	New Array	❌	Doubling values, formatting text
// // filter	Select items based on logic	New Filtered Array	❌	Get even numbers, filter users
// // reduce	Combine into single result	Single Value	❌	Sum, product, max/min


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


let state = "Bihari";
console.log(`Prov ${state} Programmer`);
