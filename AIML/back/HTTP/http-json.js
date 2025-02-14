const http = require('http');
const fs = require('fs/promises');
// const users = [{
//     id : 1,
//     name : 'Aditya',
//     email : 'Aditya@gmail.com'
// },
// {
//     id : 2,
//     name : 'Anushka',
//     email : 'Anushka@gmail.com'
// },
// {
//     id : 3,
//     name : 'Vidit',
//     email : 'Vidit@gmail.com'
// }]
const server = http.createServer(async (req,res)=>
{
    // res.statusCode=200;
    // res.setHeader('Content-Type','text/plain');
    res.writeHead(200,{'Content-type' : 'application/json'}); //sending information of json
    const jdata = await fs.readFile("./aa.json","utf8");
    const users = JSON.parse(jdata);
    // when we have to convert data from string to object then we will use json.parse and for vice versa json.stringify

    // using map to print only the names in the data
    // const data =  users.map((user)=>{
    //     return user.name;

    // })
    // using for each
    let data=""
    users.forEach((user)=>{
        data+=user.name;
    })
    res.end(JSON.stringify(users));
    // if i have to print specific data then i will pass the index inside users[index]
    // if i only have to print name 
});


    port = 3000;
    server.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    });