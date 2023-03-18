const queriesCTRl = require('../models/queries')

function queriesController(req,res){
    let addQueriesData = queriesCTRl.queriesModel({
        name:req.body.name,
        description:req.body.description,
        subject:req.body.subject,
        email:req.body.email
    })
    console.log(addQueriesData)
    console.log("something")
    addQueriesData.save((err,result)=>{
        if(err){
            res.send("error")
        }else{
            res.send("Course added")
        }
    })
}

module.exports = {queriesController}