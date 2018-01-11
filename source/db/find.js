/**
 * 
 * @param {String} name 
 * @param {Objec} query 
 */

module.exports.find = function(name,query){
    const db = global.db;
    if(db){
        const collection = db.collection(name);

        return new Promise((resolve)=>{

            collection.find(query).toArray(function(err, data) {
                console.log(data)
                if(!err){
                    console.log('find successful')
                    resolve(data)
                }else{
                    console.log('find unsuccessful')
                }

              });
        })

    }else{
        console.log('Please connect server')
    }

}
