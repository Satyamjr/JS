//A callback function in JavaScript is a function passed as an argument to another function, which is then invoked or executed inside the outer function. This mechanism enables asynchronous programming, where tasks like network requests or file operations can be handled without blocking the main thread. 
// It allows for more flexible and modular code, as the callback can be defined separately and reused in different contexts.
// Example of a callback function
function sayName(name, callback){
    console.log(`My name is ${name}`);
    callback();
}
function sayHello(){
    console.log("Hello, how are you?");
}
// sayName("Satyam", sayHello);
// In the above example, sayName is a function that takes a name and a callback function as arguments.
// It logs the name and then calls the callback function, which in this case is sayHello.
// Function declaration
function greet(name){
    console.log(`Hello, ${name}!`);
}
// Function expression
const greetUser = function(name){
    console.log(`Welcome, ${name}!`);
}
// Function expression with a callback
function greetWithCallback(name, callback){
    console.log(`Hi, ${name}!`);
    callback();
}
// greetWithCallback("Satyam", function(){
//     console.log("This is a callback function.");
// });
// Function expression with an arrow function
const greetArrow = (name) => {
    console.log(`Greetings, ${name}!`);
}
// Function expression with an arrow function and a callback
const greetArrowWithCallback = (name, callback) => {
    console.log(`Hey, ${name}!`);
    callback();
}
// greetArrowWithCallback("Satyam", () => {
//     console.log("This is an arrow function callback.");
// });
// Function with default parameters
function greetWithDefault(name = "Guest"){
    console.log(`Hello, ${name}!`);
}
// greetWithDefault(); // Will use the default parameter "Guest"
// Function with rest parameters
// Rest parameters allow a function to accept an indefinite number of arguments as an array
function greetWithRest(...names){
    names.forEach(name => {
        console.log(`Hello, ${name}!`);
    });
}
// greetWithRest("Satyam", "John", "Doe"); // Will greet all names passed as arguments
// Function with a return value
// A function can return a value using the return statement
function sayGoodbye(name){
    return `Goodbye, ${name}!`;
}
// const farewell = sayGoodbye("Satyam");
// console.log(farewell); // Will log "Goodbye, Satyam!"
// Function with parameters and return value    

// this is sayName reference 
function addNumber(num1, num2){
//   let result = num1 + num2;
//   return result
return num1 + num2
}

const result = addNumber(3,8)
// console.log(result);

function loginUser(username){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUser(Satyam));
// if call function like this it will tell it is undefined console.log(loginUser());

function calculate(...price){
    return price
}
console.log(calculate(400, 2000, 10));

//arrow function in JavaScript is a concise syntax for writing function expressions
const add = (num1, num2) => {
    return num1 + num2
}



//implict return in arrow function
// when an arrow function has a single expression, you can omit the curly braces and the return keyword. This is known as implicit return.
const add2 = (num1, num2) => num1 + num2;
// console.log(add(3, 4)); // Will log 7