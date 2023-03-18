const InstructorCTRL = require('../models/InstrictorModel')

function instructorInfo(req, res){
    InstructorCTRL.InstructorModel.find({},(err,docs) =>{
        if(err){
            console.log(err)
        }else{
            res.send(docs)
    }
})
}
function getinstructorInfo(req, res){
    InstructorCTRL.InstructorModel.findOne({'Email':req.body.Email},(err,docs) =>{
        console.log(req.body.Email,docs)
        console.log(docs)
        if(err){
            console.log(err)
        }else{
            res.send(docs.State)
            //res.send(docs.State)

    }
})
}

function acceptInstructor(req, res){
    if(req.body.task ==="Approve"){
    InstructorCTRL.InstructorModel.updateOne({_id:req.body._id},{$set:{State:"Approved"}},(err,docs) =>{
        if(err){
            console.log(err)
        }else{
            console.log(req.body._id)
            res.send(docs)
    }
})
    }else if(req.body.task ==="Decline"){
        InstructorCTRL.InstructorModel.updateOne({_id:req.body._id},{$set:{State:"Declined"}},(err,docs) =>{
            if(err){
                console.log(err)
            }else{
                console.log(req.body._id)
                res.send(docs)
        }
    })        
    }
}

module.exports = {instructorInfo, acceptInstructor,getinstructorInfo}