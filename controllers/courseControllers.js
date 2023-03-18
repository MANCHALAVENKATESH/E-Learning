const courseCTRl = require('../models/courses')
  

function addCourse(req, res){
    // courseModule = []
    console.log(req.body)
    // //console.log("inside Quiz",req.body.Course_Modules[0].Quiz)
    // //console.log("Quize Options",req.body.Course_Modules[0].Quiz[0].Options)
    // //console.log("Inside Options",req.body.Course_Modules[0].Quiz[0].Options[0].opt_A)
    // for(let i = 0; i < req.body.Course_Modules.length; i++){
    //     temp = {}

        //console.log(courseIterator.Quiz[i])
        // courseIterator = req.body.Course_Modules[i]
        // let tempuse = courseCTRl.Course({
        //     module_Name : courseIterator.Module_Name,
        //     YouTube_Link : courseIterator.YouTube_Link,
        //     // for(let j=0;j<req.body.Course_Modules;j++){}
        //     // Quize[Question] : courseIterator.Quiz[0].Question,
        //     // Quize[Options].opt_A = courseIterator.Quiz.Options.opt_A
        //     // Quize[Options].opt_B = courseIterator.Quiz.Options.opt_B
        //     // Quize[Options].opt_C = courseIterator.Quiz.Options.opt_C
        //     // Quize[Options].opt_D = courseIterator.Quiz.Options.opt_D
        //     // Quize.CorrectOption = courseIterator.Quiz.CorrectOption
        // })
        //courseModule.append(temp)
    
    let addCourseData = courseCTRl.Course({
        course_name:req.body.Course_Name,
        course_description:req.body.Course_Description,
        Instrutor_Email:req.body.Instrutor_Email
        
        // Student_Enrolled: req.body.Students_Enrolled
    })

    console.log(addCourseData)   
    addCourseData.save((err,result)=>{
        if(err){
            console.log("5000")
            res.send(err)
        }else{
            console.log("1000")
            res.send("Full Course added")
        }
    })

}

module.exports = {addCourse}


// temp[module_Name] = courseIterator.Module_Name
//         temp[YouTube_Link] = courseIterator.YouTube_Link
//         temp[Quize].Question = courseIterator.Quiz.Question
//         temp[Quiz][Options].opt_A = courseIterator.Quiz.Options.opt_A
//         temp[Quiz][Options].opt_B = courseIterator.Quiz.Options.opt_B
//         temp[Quiz][Options].opt_C = courseIterator.Quiz.Options.opt_C
//         temp[Quiz][Options].opt_D = courseIterator.Quiz.Options.opt_D
//         temp[Quize].CorrectOption = courseIterator.Quiz.CorrectOption
        