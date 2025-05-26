const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision (4));
console.log(otherNumber.toPrecision (3));


// +++++++++++++++++++++ Math  ++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.8));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.8));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));
console.log(Math.cbrt(27));
console.log(Math.sin(0));
console.log(Math.cos(0));

// console.log(Math.max(4, 3, 9, 7));
// console.log(Math.min(4, 3, 8, 2));
// console.log(Math.random());
// console.log (Math.floor (Math.random() * (max - min + 1)) + min)



// +++++++++++++++++++++++++ Date +++++++++++++++++++++++++++++++++++++++

let myDate = new Date()
console.log(myDate.toUTCString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());

//date type --> object
//month started from 0 when you take single digit for eg. --> 2024, 0, 19
//but when your write in DD/mm/yy format it start from 1 eg. --> 2024-01-19
console.log(typeof myDate);


//check
let newDate = new Date(2024, 9, 11)
console.log(newDate.toISOString());
console.log(newDate.toDateString());

// time stamp

let timeStamp = Date.now()
console.log(timeStamp);
console.log(newDate.getTime());
