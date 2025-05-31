
//++++++++++++++++++++++++++ deep copy ++++++++++++++++++++++++++++++++++++++++

//A deep copy of an object is a copy whose properties do not share the 
//same references (point to the same underlying values) as those of the source 
//object from which the copy was made.


//++++++++++++++++++++++++++ shallow copy ++++++++++++++++++++++++++++++++++++++++

// A shallow copy of an object is a copy whose properties share the 
// same references (point to the same underlying values) 
// as those of the source object from which the copy was


//JavaScript arrays are resizable and can contain a mix of different data
// types(char, int array).

// JavaScript arrays are zero-based, meaning the first element is at index 0.
// JavaScript arrays are dynamic, meaning they can grow or shrink as elements are added or removed.
// JavaScript arrays are ordered, meaning the order of elements is preserved.
// JavaScript arrays are mutable, meaning they can be modified after creation.


//++++++++++++++++++++++++++ ProtoTypes ++++++++++++++++++++++++++++++++++++++++
// PropTypes are a mechanism in JavaScript, specifically in the context of React, 
// for typechecking the props passed to components. They help developers ensure that 
// components receive props of the correct type, and if not, they provide warnings 
// during development


const myArry = [1, 2, 3, 4, 5];
const myArry2 = new Array(1,2,3,4);
console.log(myArry[0]);

// Array method

myArry.push(6)
myArry.push(7)
console.log(myArry);
myArry.pop()
myArry.unshift(0)
myArry.unshift(8)
console.log(myArry);
myArry.shift()
console.log(myArry);

const newArry = myArry.join()
console.log(newArry);
console.log(typeof newArry);


// slice, splice

// slice don't manipulate original array
// splice  manipulate original array

const myn1 = myArry.slice(1, 3);
console.log(myn1)

const myn2 = myArry.splice(1, 3);
console.log(myArry)
console.log(myn2)

// In JavaScript, the spread operator is denoted by three consecutive dots (...).
// It allows an iterable (like an array or string) to be expanded, or "spread out," 
// into individual elements. It can also be used to spread the properties of an object
// into a new object. 
// This operator is particularly useful for combining arrays, copying arrays, 
// and merging objects.
// Example of using the spread operator with arrays

const Marvel_heros = ["Iron-man",  "Spiderman", "Hulk", "Thor"];
const DC_heros = ["Batman", "Superman", "Flash", "Wonder woman"]

const allHeros = Marvel_heros.concat(DC_heros)
console.log(allHeros);

//spread

const all_heros = [...Marvel_heros, ...DC_heros]
console.log(all_heros)


const anotherArray = [1, 2, 3,[4, 5, 6], 7, [6, 7,[2, 4]]]
console.log(anotherArray.flat(2));


console.log(Array.from("Satyam Singh"));

// you have to decleare from which you have to make the array keys or value
console.log(Array.from({name: "Satyam Singh"}));//important

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

