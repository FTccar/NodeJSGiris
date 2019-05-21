var http = require('http')
var log = require('./log.js')


http.createServer(function(request,response){

        if(request.url=="/admin"){
            response.writeHead(200,{'Content-Type' : 'text/html'})
            response.write('admin sayfası')
        }else if(request.url=='/'){
            response.writeHead(200,{'Content-Type' : 'text/html'})
            response.write('ana sayfası')
        }else if (request.url=="/customer")
        {
            response.writeHead(200,{'Content-Type' : 'application/json'})
            response.write(JSON.stringify({name:'Ferdi', lastName:'Tuccar'}))
        }
        //response.end('Merhaba')
    }
).listen(8080)


log.information('Sunucu yayına geçti');

