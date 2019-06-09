var rh_http = require('http');
var rh_fs = require('fs');

var rh_server = rh_http.createServer(function(req,res){
    //rh_fs.readFile('test.html',function(err, data){
        //res.writeHead(200, {'Content-Type': 'test/html'});
        //res.write(data);
        //res.end();
    if(req.url == "/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }else if(req.url == "/admin"){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    }else if(req.url == "/uproadFile"){
        //rh_fs.readFile()
        
    }
    //});
}).listen(3000);