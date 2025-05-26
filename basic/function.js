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
