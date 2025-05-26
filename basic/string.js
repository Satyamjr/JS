const name = "Satyam"
const repoCount = 50

// console.log(name + repoCount)

// string interpolation
console.log(` Hello my name is ${name} and my repo count is ${repoCount} `);



const studentName = new String('SatyamSingh')

// console.log(studentName[0]);
// console.log(studentName.length);
// console.log(studentName.toUpperCase());
 console.log(studentName.charAt(2));
 console.log(studentName.indexOf('a'));


const newString = studentName.substring (0, 4)
console.log (newString);


const anotherString = studentName.slice (-8, 4)
console.log(anotherString);