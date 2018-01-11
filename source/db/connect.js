module.exports.connect = (env)=>{
    const MongoClient = require('mongodb').MongoClient;

    const dbName = 'users';
    
    // Connection URL

    const ip = env ? '39.106.0.53':'127.0.0.1';

    const url = `mongodb://${ip}:27017`;

    if(!global.db){
            return new Promise((resolve)=>{
                MongoClient.connect(url, function (err, client) {
                    if(!err){
                        console.log("Connected successfully to server");
            
                        const db = client.db(dbName);

                        resolve(db)
            
                    }else{
                        console.log("Connected unsuccessfully");
                        resolve(false)
                    }
            
                })
            })
    }

}