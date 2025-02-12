// importing of the module
const http = require('http');
const fs = require('fs/promises');

// creating server
const server = http.createServer(async(req,res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('contentType','text/html');
    res.write("");
    const data = await fs.readFile("./Home.html","utf8")
    res.end(data);


});
port=3005;
server.listen(port,()=> {
    console.log(`Server is running on port ${port}`);

});