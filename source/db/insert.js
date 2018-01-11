/**
 * 
 * @param {String} name 
 * @param {Array} data 
 */

module.exports.insert = function(name,data){
    const db = global.db;
    if(db){
        const collection = db.collection(name);

        return new Promise((resolve)=>{

            collection.insert(data, (err, result) => {

                if(!err){
                    console.log("insert successful")
                    resolve(result)
                }else{
                    console.log("insert unsuccessfully")
                    resolve(false)
                }
            });
        })

    }else{
        console.log('Please connect server')
    }

}