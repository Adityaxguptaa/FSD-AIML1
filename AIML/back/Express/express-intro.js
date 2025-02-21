// const express = require('express');
// // type = commonjs then will use require in package.json
import express from 'express';

// change type in json to module to use express
const app = express();
const port = 3000;
// it will do the same as http create server functionality
app.get('/',(req,res)=>{
    res.send("Welcome to express");
});
app.get('/api/:name/:rollno',(req,res)=>{
    try{
        const {name,rollno} = req.params;
        // using params to send values
        // name will be used to access details
        // http://localhost:3000/api/Aditya this will return welcome Aditya
        res.send(`Welcome ${name} and Your roll no is ${rollno}`);
        // http://localhost:3000/api/Aditya/220032
        // this will return Welcome Aditya and Your roll no is 220032

    }
    catch(error){
        console.log(`Error: ${error.message}`);
    }
})
app.get('/api',(req,res)=>{

try{
    const{name,rollno} = req.query;
    // we can also give default values to name and roll number and then we donn't have to pass any parameter it will show that
    if (!name){
        return res.status(400).send("Name is Required");
    }

    else{
        res.send(`Welcome to ABES : ${name} and Roll number : ${rollno}`);

    }
    // storing the result of api call

    } catch(error){
        console.log(`Error: ${error.message}`);

    }
    
    
    // now whenever i will run http://localhost:3000/api?name=rajesh&rollno=97463469 then it will return Welcome to abes and the name of user and also the roll  number
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
