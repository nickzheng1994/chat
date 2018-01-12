/**
 * 
 * @param {Object} app 
 */
module.exports.getWareList = (app)=>{
    var find = require('./../db/find');
    
    app.get('/getWareList', function(req, res){

        const params = req.query;

        find.find('users',{}).then((result)=>{
            console.log(result)
            res.send(result)
        })
    });

}