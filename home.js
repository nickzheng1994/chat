var express = require('express');
var connect = require('./source/db/connect');
var find = require('./source/db/find');
var wareList =  require('./source/routes/getWareList');
var app = express();

let env_dev = false;

app.use(express.static(__dirname));

var server = app.listen(3000, function () {
    console.log('server 3000  start')
    var host = server.address().address;
    var port = server.address().port;
});

const connectMongoDB = async function (){
    if(!global.db){
        const db = await connect.connect(env_dev);
        if(db) global.db = db
    }
}

connectMongoDB();
wareList.getWareList(app);
