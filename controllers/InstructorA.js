const InstructorCTRL = require('../models/instructorA')

function instructorInfoA(req, res){
    InstructorCTRL.InstructorModelA.find({},(err,docs) =>{
        if(err){
            console.log(err)
        }else{
            res.send(docs)
    }
})
}
function getinstructorInfoA(req, res){
    InstructorCTRL.InstructorModelA.findOne({'Email':req.body.Email},(err,docs) =>{
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

module.exports = {instructorInfoA, getinstructorInfoA}