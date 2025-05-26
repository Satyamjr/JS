// Global execution context
// Function execution context
// Eval execution context

//global execution context in browser the value of .this is window 

//memory creation phase

//execution phase

// js is single tread
// Single-threaded vs multithreaded programs. In computer programming, 
//single-threading is the processing of one command at a time.
//Multithreading is the processing of multiple commands at the same time.

// js is synchronous
// js is loosely typed
// js is case sensitive
// js is first class function
// js is prototype based
// js is dynamic

//Synchronous:
//This means code executes line by line, one operation after another. Each operation 
// must complete before the next one starts.
//Asynchronous:
//This means certain operations can be started and then continue in the background 
// while other code executes. When the asynchronous operation completes, it can
//  trigger a callback function or resolve a promise.

//  IIFE is a function which execute immediatly we use IIFE to reduce global scope
// pollution
// IIFE eg.
(function calculate(){
    console.log(`DB CONNECTED`);
})();

((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})(`SATYAM`)


// It happens because var has function scope, not block scope. So by the time 
// setTimeout runs, the loop is already done, and i becomes 6. You can fix this 
// using let or an IIFE.
// Example (Wrong❌ with var):
for (var i = 1; i <= 5; i++) {
 setTimeout(() => console.log(i), 1000);
}
// prints: 6, 6, 6, 6, 6
//✅Fixed with let✅:
for (let i = 1; i <= 5; i++) {
 setTimeout(() => console.log(i), 1000);
}
// prints: 1, 2, 3, 4, 5
