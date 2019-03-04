let http = require('http');
let port = 3000;

http.createServer((req, res) =>{
    
    //Normalizzazione dell'URL
    //(ripassare le espressioni regolari)
    var path = req.url.replace(/\/?(?:\?.*)?$/,'');

    switch(path)
    {
        case '' : 
                 res.writeHead(200,{'Content-Type':'text/html'})
                 res.end('<h1>Homepage</h1>');
                 break;
        
        case '/about' : 
                 res.writeHead(200,{'Content-Type':'text/html'})
                 res.end('<h1>About</h1>');
                 break;
        default:
         
                res.writeHead(400,{'Content-Type':'text/html'})
                res.end('<h1 style="color:red">Pagina non trovata!</h1>');
        break;
    }

   
}).listen(port);

console.log("Server avviato sulla porta " + port + ". CTRL+C per terminare il server");
















