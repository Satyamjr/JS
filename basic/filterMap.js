//filter
// const coding = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const mynums = coding.filter( (num) => num > 4)
// console.log(mynums);


//map
// const coding = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newnum = coding.map( (num) => num+10)
// console.log(newnum);


//chaining
// const coding = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newnum = coding
//                      .map((num) => num*10)
//                      .map((num) => num+10)
//                      .filter((num) => num > 40)
//     console.log(newnum);


 //javascript does not directly access the port so do the node.js because it build 
    // on top of javascript so here LiBUV comes

    //reduce
    const coding = [1, 2, 3, 4, 5]
    // const myTotal = coding.reduce(function(acc, currval){
    //     console.log(`acc : ${acc} and currval ${currval}`);
    //     return acc + currval
    // }, 0)
    const myTotal = coding.reduce((acc, currval) => acc + currval ,0)
    console.log(myTotal);