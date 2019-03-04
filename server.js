let http = require('http');
let port = 3000;

http.createServer((req, res) =>{

    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Ciao Mondo!');
}).listen(port);

console.log("Server avviato sulla porta " + port + ". CTRL+C per terminare il server");