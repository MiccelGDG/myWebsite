let http = require('http');
let fs = require('fs');

let port = 3000;

//Funzioni di aiuto
function serveStaticFile(res, path, contentType, responseCode)
{
    if(!responseCode) responseCode = 200;

    fs.readFile(__dirname + path,(err, data) =>{
        if(err)
        {
            res.writeHead(500,{'Content-Type':'text/html'})
            res.end('Errore interno al server');
        }
        else
        {
            res.writeHead(responseCode,{'Content-Type':contentType})
            res.end(data);
        }
    });
}

http.createServer((req, res) =>{
    
    //Normalizzazione dell'URL
    //(ripassare le espressioni regolari)
    var path = req.url.replace(/\/?(?:\?.*)?$/,'');

    switch(path)
    {
        case '' : 
                 serveStaticFile(res, "/public/home.html", "text/html",200);
                 break;
        
        case '/about' : 
                serveStaticFile(res, "/public/about.html", "text/html",200);
                break;
        case '/chicken.png' : 
                serveStaticFile(res, "/public/img/chicken.png", "image/jpeg",200);
                break;
        default:
         
                serveStaticFile(res, "/public/404.html", "text/html",400);
                break;
    
    }

   
}).listen(port);

console.log("Server avviato sulla porta " + port + ". CTRL+C per terminare il server");
















