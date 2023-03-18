const userModelCtrl = require('../models/InstrictorModel')

function loginVerification(req, res){
    userModelCtrl.InstructorModel.findOne({Email:req.body.Email},(err,docs) =>{
        if(err){
            console.log(err)
        }else{
            console.log(docs);
            if(docs.Password === req.body.Password && docs.State === "Approved"){
                userModelCtrl.InstructorModel.updateOne({Email:req.body.Email},{$set:{Status:"online"}},(err,docs) =>{
                    if(err){
                        console.log(err)
                    }else{
                        res.send(docs)
                }
            })
                // res.send(docs)
            }
    }
})
}

module.exports = {loginVerification}