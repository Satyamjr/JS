// promise three state 
// - pending
// - fulfilled
// - rejected 

// do an async task 
// DB calls, cryptography, network

//The Fetch API provides a JavaScript interface for making HTTP requests and 
// processing the responses.

//The Fetch API is a modern interface in JavaScript that allows you to make HTTP
//  requests. It replaces the older XMLHttpRequest method and provides a cleaner 
// and more flexible way to fetch resources asynchronously. The Fetch API uses 
// Promises, making it easier to work with asynchronous data.

// Fetch is the modern replacement for XMLHttpRequest: unlike XMLHttpRequest, which
//  uses callbacks, Fetch is promise-based and is integrated with features of the 
// modern web such as service workers and Cross-Origin Resource Sharing (CORS).

// With the Fetch API, you make a request by calling fetch(), which is available
//  as a global function in both window and worker contexts. You pass it a Request
//  object or a string containing the URL to fetch, along with an optional argument 
// to configure the request.

// The fetch() function returns a Promise which is fulfilled with a Response 
// object representing the server's response. You can then check the request status 
// and extract the body of the response in various formats, including text and JSON,
//  by calling the appropriate method on the response.

const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log ('Async task is complete');
        resolve()
    }, 1000)
})

promise.then(function(){
    console.log("promise consumed");
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log ('Async task 2 is complete');
        resolve()
    }, 1000)
}).then(function(){
    console.log("promise 2 consumed");
})



const promisethree = new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Satyam", email: "singhsatyam.work@gmail.com"})
    }, 1000)
})
promisethree.then(function(user){
    console.log(user);
})



const promisefour = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Satyam", email: "singhsatyam.work@gmail.com"})
        } else {
            reject('ERROR: Something went wrong')
        }  
    }, 1000)
})
 promisefour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("finally"))




const promiseFive = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }  
    }, 1000)
})
async function consumedPromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumedPromiseFive()


async function getAlluser() {
 try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
 } catch (error) {
    console.log("E: ", error);
 }
}
getAlluser()