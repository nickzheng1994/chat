var express = require('express');
var app = express();
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({
        port: 8181
    });

wss.broadcast = function broadcast(s, ws) {

    if (wss.clients.size) {
       
        wss.clients.forEach(function each(client) {
            if (s == 1) {
                client.send(ws.name + ':' + ws.value);
            }
            if (s == 0) {

                client.send(`当前聊天室：${wss.clients.size}人`);
            }

        });
    }
};

wss.on('connection', function (ws) {

    console.log('client connected');

    console.log(`当前聊天室：${wss.clients.size}人`);

    wss.broadcast(0);

    ws.on('message', function (message) {

        const data = JSON.parse(message);

        this.user = data;

        console.log(data.name + ':' + data.value);

        wss.broadcast(1, data);

    });

    ws.on('error', function (error) {
        console.log(error)

    });

    ws.on('close', function (close) {
        console.log(`当前聊天室：${wss.clients.size}人`)
       
    });

});



app.use(express.static(__dirname));

var server = app.listen(3000, function () {
    console.log('server start')
    var host = server.address().address;
    var port = server.address().port;
});