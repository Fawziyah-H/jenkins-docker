const http = require('http');

const server = http.createServer((req, res) =>{

    res.write("Welcome to NODE App");
    res.end();
});

//server.listen(process.env.PORT);
server.listen(3000);