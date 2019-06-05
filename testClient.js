var net_client = require('net');

function getConnection(){
    var client = "";
    var recvData = [];
    var local_port = "";
    
    client = net_client.connet({port: 9090, host:'localhost'}, function() {
        console.log("connect log================================================");
        console.log('connect success');
        console.log('local = ' + this.localAddress + ':' + this.localPort);
        console.log('remote = '+ this.remoteAddress + ':' + this.remtePort);
        
        local_port = this.localPort;
        
        this.setEncoding('utf8');
        this.setTimeout(600000); // timeout : 10분
        console.log("client setting Encoding:binary, timeout:600000");
        console.log("client connect localport : " + local_port);
    });
    
    client.on('close',function(){
        console.log("Client Socket Close : " + "localport : " + local_port);
    });
    
    client.on('data', function(data){
        console.log("data recv log==============================================");
        recvData.push(data);
        console.log("data.length : " + data.longth);
        console.log("data recv : " + data);
        client.end();
    });
    
    client.on('end', function(){
        console,log("Client Socket End");
    });
    
    client.on('error', function(err){
        console.log("Client Socket Error: " + JSON.stringify(err));
    });
    
    client.on('timeout', function(){
        console.log("Client Socket timeout : ");
    });
    
    client.on('drain', function(){
        console.log("Client Socket drain : ");
    });
    
    client.on('lookup', function(){
        console.log("Client Socket lookup : ");
    });
    return client;
}

function writeData(socket, data){
    var success = !socket.write(data);
    if(!success){
        console.log("Server Send Fail");
    }
}

var client = getConnection();
writeData(client, "에코 서버 테스트입니다.");