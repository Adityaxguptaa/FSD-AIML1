// asynchronous file system have two types promise and call back
// Synchronous file system
// in synchronous task will be performed step by step no-one can interrupt each other
const fs = require('fs'); //we can also write nods.fs in place of fs both are same
const data = fs.readFileSync("./data.txt"); //returns the content of path in buffer form 
// const data = fs.readFileSync("./data.txt","utf-8"); we can use encoding utf-8 so that data will be returned in string form and we don't have to use tostring()
// const data = fs.readFileSync("./data.txt","encoding.utf-8");
// console.log(data); it will return in form of buffer output in hexadecimal forms of character
console.log(data.toString()); //this will return in form of string
//output : Hello Cse Aiml students 


