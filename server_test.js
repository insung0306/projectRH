var rh_http = require('http');
var rh_fs = require('fs');
var rh_url = require('url');
var express = require('express');
var app = express();
var router = express.Router();

app.get('/',function(req, res){
    res.send('Hello World');
});

//app.post('/',function(req, res){
//    res.send('Got a POST request');
//});

app.get('/random.text', function (req, res) {
    res.send('random.text');
    console.log('/random.text');
});

app.get('/ab?cd', function(req, res) {
    res.send('ab?cd');
    console.log('abcd');
});

router.post('/user', function(req, res){
    res.send('Got a PUT request at /user');
    console.log('/user');
});

//app.delete('/user', function (req, res) {
//    res.send('Got a DELETE request at /user');
//});

app.listen(3000, function(){
    console.log('Example app listening on port 3000');
});

//var rh_server = rh_http.createServer(function(req,res){
//    //rh_fs.readFile('test.html',function(err, data){
//        //res.writeHead(200, {'Content-Type': 'test/html'});
//        //res.write(data);
//        //res.end();
//    var uri = req.url;
//    var query = rh_url.parse(uri,true).query;
//    if(req.url == "/"){
//        rh_fs.readFile('test.html', function(error,data){
//            res.writeHead(200, {'Content-Type' : 'text/html'})
//            res.write(data);
//            res.end();
//        })
//    }
//    else if(req.url == "/uploadfile"){
//        res.writeHead(200, { 'Content-Type': 'text/html' });
//        res.write('<html><body><p>Upload</p></body></html>');
//        res.end();
//    }
//    else{
//        res.write('<html><body><p>404 not found</p></body></html>');
//        res.end();
//    }
//    
//}).listen(3000);
//
