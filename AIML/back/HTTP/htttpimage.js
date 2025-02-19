const http = require('http');
const axios = require('axios');
const port = 3002;

const server = http.createServer(async (req, res) => {
    console.log("Fetching GitHub users from Newdelhi");
    res.writeHead(200, { "Content-Type": "text/html" });

    
        const response = "https://api.github.com/search/users?q=location:newdelhi&per_page=1000";
        
        const users = response.data.items;

        let html = "<html><head></head><body>";
        users.forEach(user => {
            html += `<div><img src="${user.avatar_url}" </div>`;
        });
        html += "</body></html>";

        res.end(html);
    
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
