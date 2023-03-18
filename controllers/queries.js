const QueriesCtrl = require('../models/queries')


function queriesController(req,res){
    let addQueriesData = QueriesCtrl.QueriesModel({
        User_Name:req.body.name,
        Email:req.body.email,
        Subject:req.body.subject,
        Message:req.body.message
    })
    console.log(addQueriesData)
    console.log("something")
    addQueriesData.save((err,result)=>{
        if(err){
            res.send("error")
        }else{
            res.send("Query send")
        }
    })
}

function noofqueries(req,res){
    QueriesCtrl.QueriesModel.countDocuments({},(err,count) =>{
        if(err) throw err
        return res.send({count})
    })

}
function queriestable(req,res){
    QueriesCtrl.QueriesModel.find({},(err,data) =>{
        if(err) throw err
        return res.json(data)
    })
}

module.exports = {noofqueries,queriestable , queriesController}