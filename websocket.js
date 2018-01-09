
var WebSocketServer = require('ws').Server,

wss = new WebSocketServer({ port: 8181 });

wss.broadcast = function broadcast(s,ws) {  
    // console.log(ws);  
    // debugger;  
    wss.clients.forEach(function each(client) {  
        // if (typeof client.user != "undefined") {   
        client.send(ws.name + ':' + ws.value);  
        // }  
    });  
};

wss.on('connection', function (ws) {
    
    console.log('client connected');

    ws.on('message', function (message) {

        const data = JSON.parse(message);

        console.log(data.name + ':' + data.value);

        wss.broadcast(1,data);  

    });
});



var express = require('express');
var app = express();

//指定启动服务器到哪个文件夹，我这边指的是dist文件夹
app.use(express.static(__dirname));

//监听端口为3000
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
});