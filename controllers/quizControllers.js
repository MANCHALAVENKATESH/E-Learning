const quizCTRl = require('../models/quize')
  

function addQuiz(req, res){
    // courseModule = []
    console.log(req.body)

    o1=req.body.Options[0].opt_A
    o2=req.body.Options[0].opt_B
    o3=req.body.Options[0].opt_C
    o4=req.body.Options[0].opt_D
    news = [{opt_A:o1,
        opt_B:o2,
        opt_C:o3,
        opt_D:o4,}]
    let addQuizData = quizCTRl.Quiz({
        question:req.body.question,
        Options:news,
        CorrectOption:req.body.CorrectOption
        // Student_Enrolled: req.body.Students_Enrolled
    })
    

    console.log(addQuizData)   
    addQuizData.save((err,result)=>{
        if(err){
            console.log("5000")
            res.send(err)
        }else{
            console.log("1000")
            res.send("Full Course added")
        }
    })
}

function findQuiz(req, res){
    quizCTRl.Quiz.findOne({Question: req.body.Question},(err,docs)=>{
        res.send(docs._id)
    })
}

module.exports = {addQuiz, findQuiz}


// let x ={name:"first",modules:[]}
// db.ALL_USERS.updateOne({email:"priyanshu@gmail.com"},{$push:{"coursesEnrolled":x}})