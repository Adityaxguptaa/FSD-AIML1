import express from 'express';
const users = [{
    id: 1,
    name: 'Aditya',
    email: 'aditya@abes.ac.in'
}]
const app = express();
const port = 3000;
app.get("/",(req,res)=>{
    res.send("Welcome to my API");

});
app.get("/getusers",(req,res)=>{
    res.send(users);
})
app.get("/api",(req,res)=>{
    res.send("Welcome to my new API");

});
app.use(express.json())
app.post("/api/users",(req,res)=>{
    const bodydata = req.body;
    console.log(bodydata)
    res.send("Data received successfully");

});
app.post("/api/createuser",(req,res)=>{
    const {name,email} = req.body;
    const newid = users.length>0?users[users.length-1].id+1:1;
    users.push({id: newid , name , email});
    res.status(201).send("user created successfully");

});
app.get("/getusers/:id",(req,res)=>{
    const{ id } = req.params;
    const user = users.find(user => user.id == id);
    res.send(user);

});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

// Middleware example express.txt(converts the data to respective text format and send it to server)

