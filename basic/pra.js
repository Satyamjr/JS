/*
prefer not to use var because of issue in block scope and functional scope
*/


/* type checking takes place at runtime or execution time. 
This means that variables are checked against types only 
when the program is executing. Some examples of programming
languages that belong to this category are Python, JavaScript, 
Lisp, PHP, Ruby */


/* Statically typed languages: Statically typed languages are the languages 
like C, C++, Java, etc, In this type of language the data type of a variable 
is known at the compile time which means the programmer has to specify the
data type of a variable at the time of its declaration. */


"use strict";//treat all JS code as newer version

//alert("3+9")//we are using nodejs, not browser

//console.log(3+9)//we are using nodejs, not browser

console.log(typeof undefined);// undefined

console.log(typeof null);// object

let score = "33"

console. log (typeof score); 
console. log (typeof (score))

let convertInNumber = Number(score)
console. log (typeof convertInNumber); 

//"33" => 33
//33aj => NaN =>not a number
//True => 1 False => 0
//Satyam => NaN
//null => 1
//undefined => NaN
  

// ***************************** OPERATIONS **********************************

// console. log (2+2)
// console. log (2-2)
// console. log (2*2)
// console. log (2/2)
// console. log (2%2)


// there is two type of data type 1-> primitive 2-> non-primitive
// primitive data type(call by value)

// 7 type

// 1-> number
// 2-> string
// 3-> boolean
// 4-> null
// 5-> undefined
// 6-> symbol
// 7-> bigInt



// non-primitive data type(call by reference)

//  type

// 1-> array
// 2-> object
// 3-> set
// 4-> map
// 5-> weakset
// 6-> weakmap
// 7-> function
// 8-> date
// 9-> regExp

// null means empty
// null datatype is object
// object datatype is function
// object datatype is fuction object




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (primitive), Heap (non-primitive)


//Stack

let myYoutubename = "satyamsingh.com"

let anothername = myYoutubename
anothername = "chaiaurcode"

console. log (myYoutubename) ;
console. log (anothername);

//Heap

let userOne = {
email: "user@google.com",
 upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "satyam@google.com"

console.log(userOne.email);
console.log(userTwo.email);


