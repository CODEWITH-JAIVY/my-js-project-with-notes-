let data  = new Date () ;
// console.log(data);

// const d = new Date("04-04-2025");
// console.log(d);

// const d = new Date();
// // d.toDateString();
// console.log(d);
// const d = new Date(2024, 10, 18);
// console.log(d.toString() );

// const d = new Date();
// console.log(d.getFullYear() );

// const d = new Date("2021-03-25");
// console.log(d.getMonth() +1 );


// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const d = new Date("2021-03-25");
// let month = months[d.getMonth()];
// console.log(month);



// const d = new Date("2021-03-25");
// console.log(d.getHours()  );


const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);
console.log(years);

 