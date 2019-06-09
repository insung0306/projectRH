var rh_http = require('http');
var rh_fs = require('fs');

var rh_server = rh_http.createServer(function(req,res){
    rh_fs.readFile('test.html',function(err, data){
        res.writeHead(200, {'Content-Type' : 'test/html'});
        res.write(data);
        res.end();    
    });
}).listen(3000);



