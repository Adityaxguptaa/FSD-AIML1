// asynchronous file system have two types promise and call back
// Synchronous file system
// in synchronous task will be performed step by step no-one can interrupt each other
const fs = require('fs'); //we can also write nods.fs in place of fs both are same
// const data = fs.readFileSync("./data.txt"); //returns the content of path in buffer form 
const data = fs.readFileSync("./data.txt","utf-8");//  can use encoding utf-8 so that data will be returned in string form and we don't have to use tostring()
// const data = fs.readFileSync("./data.txt","encoding.utf-8");
console.log(data);//  will return in form of buffer output in hexadecimal forms of character
// console.log(data.toString()); //this will return in form of string
//output : Hello Cse Aiml students
fs.writeFileSync("./dat1.txt","hey this is my work","utf-8");//it overwrites it's previous work
// to append
fs.appendFileSync("./dat1.txt" , "new work", "utf-8");
//to rename
fs.renameSync("./dat1.txt","data3.txt");
fs.unlinkSync("./data3.txt"); //for  d the data
if(data.match("H")){
console.log("h is found");
const newdata = data.replace("H","ABES");
fs.writeFileSync("./data.txt", newdata, "utf-8");
    
}
 