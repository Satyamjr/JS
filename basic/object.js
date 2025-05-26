// object literals

const mySymbol = Symbol("key1")

const Jsobject = {
    Name : "Satyam",
    Age : 23,
    Address :{
        city: "New Delhi",
        zip: 110001
      },
    Email : "satyam@gmail.com",
    Phone : 1234567890,
    Skills : ["java","python","c++"],
    [mySymbol] : "mykey1",
}
console.log(Jsobject.Email);
console.log(Jsobject["Email"]);
console.log(Jsobject[mySymbol]);

Jsobject.greeting = function(){
    console.log("hello hello");
}

console.log(Jsobject.greeting());

Jsobject.greetingTwo = function(){
    console.log(`hello hello my name, ${this.Name}`);
}

console.log(Jsobject.greetingTwo());

//  Destructuring start from here
// this line of code is used when you have to write the same code again and again
const {Name} = Jsobject;
console.log(Name);
console.log(Name)

//You can also assign default values to variables in case the property does not 
// exist in the object:
const {  country = "India" } = Jsobject;
console.log(country);
 
//If the object has nested objects, you can destructure them as well:
const { address: { city, zip } } = Jsobject;

console.log(city);  
console.log(zip); 

// you can Rename(nickname) any variable
const {Address: Pata} = Jsobject;
console.log(Pata)
console.log(Pata)

const { Email, Age } = Jsobject;
console.log(Age)
//  Destructuring start from here

// Jsobject.Email = "satyam@hotmail.com"

// freeze is use when you have to freeze the object so no one can make any changes 
// to the object.
// Object.freeze(Jsobject)

// Jsobject.Email = "satyam@yahoo.com"
// console.log(Jsobject);

const regularuser = {
    email : "satyam@gh.com",
    fullname : {
        userfullname : {
            firstname : "Satyam",
            lastname : "singh"
        }
    }
}
console.log(Object.keys(regularuser))
console.log(regularuser.fullname);
console.log(regularuser.fullname.userfullname)
console.log(regularuser.fullname?.userfullname.firstname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = Object.assign({}, obj1, obj2);
const obj3 ={...obj1, ...obj2}
console.log(obj3);


// singleton
 const tinderUser = new Object;

 console.log(tinderUser);



