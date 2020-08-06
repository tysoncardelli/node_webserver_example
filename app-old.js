const http = require('http');

http.createServer((req,res)=>{ 


    //res.write('Hola Mundo');
    //res.end();
    res.writeHead(200,{'Content-Type': 'application/json'});
    let salida = {
        nombre: 'Tyson',
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();

})
.listen(8080)

console.log("Listening 8080 port")