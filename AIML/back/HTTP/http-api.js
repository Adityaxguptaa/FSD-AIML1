const http = require('http');
const axios = require('axios');
const port = 3003;
const server = http.createServer(async(req,res)=>{
    console.log("Hello from the server");
    res.writeHead(200,{"Content-type":"text/html"});
    // const response = await fetch("https://dummyjson.com/products");
    // // data comes in form of promises from api
    // const data = await response.json();
    const response = await axios.get("https://dummyjson.com/products");
    
    const productsdata = response.data.products;
    let frontdata = `<html><head></head><body>`
    productsdata.forEach((product)=>{
        frontdata+=`<div><img src= "${product.thumbnail}" ></div>`
    });
    frontdata+=`</body></html>`;
    // in axios we don't want to parse 
    res.end(frontdata);
});
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});
