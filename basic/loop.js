//never use var always use let const
//var can be tricky because its scope is either global or within a function, 
//which can lead to bugs. To avoid these issues: Use let when you know a variable's 
//value might change later in your code. Use const for variables that should never
//change once you set them

// falsy values
//false,0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
//"0", 'false', " ", these are string thar why they are true
// [], {}, function(){}


// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }


// for (let i = 0; i <=10; i++) {
//     console.log(`${i}`);
//     for (let j = 0; j <=10; j++) {
//         //console.log(`inner loop value ${j} inner loop ${i}`);
//         console.log(i + '*' + j + '=' +i*j );
//     }
// }



// While loop

// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2    
// }


//do while loop

// let text = "";
// let i = 0;
// do {
//   text += i + "<br>";
//   i++;
// }
// while (i < 5);


//for of

// const arr = [1,2,3,4,5,6,7,8]
// for (const num of arr) {
//   console.log(num);
// }


// const greetings = "Hello world!"
// for (const greet of greetings) {
//   console.log(greet);
// }


// Maps
const map =new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")
console.log(map);


//forEach

const coding = ["js", "ruby", "java", "python", "cpp", "c"]
//coding.forEach (function (val){
//console.log(val);
//})

coding.forEach( (item) => {
  console.log(item);
} )