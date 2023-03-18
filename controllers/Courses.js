// const CourseCTRl = require('../models/Course')

// function addCourseController(req,res){
//     let addCourseData = CourseCTRl.CourseModel({
//         Instrutor_email:req.body.Instrutor_email,
//         Course_Name:req.body.Course_Name,
//         Course_Img:req.body.Course_Img,
//         Course_Description : req.body.Course_Description,
//         Course_Modules:req.body.Course_Modules,
//         category_name:req.body.category_name
//     })
//     console.log(addCourseData)
//     addCourseData.save((err,result)=>{
//         if(err){
//             res.send("error")
//         }else{
//             res.send("Course added")
//         }
//     })
// }

// function getCourseController(req,res){
//     var Course_Name = req.params.Course_Name;
//     CourseCTRl.CourseModel.find({Course_Name:Course_Name},(err,docs) =>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(docs)
//         }
//     })
// }


// function getCoursesController(req,res){
//     CourseCTRl.CourseModel.find({},(err,docs) =>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(docs)
//         }
//     })
// }

// function noofcourse(req,res){
//     CourseCTRl.CourseModel.countDocuments({},(err,count) =>{
//         if(err) return res.send(err)
//     return res.send({count})
//     })
// }
// function tablecoursedetails(req,res){
//     CourseCTRl.CourseModel.find({},(err,data) =>{
//         if(err) throw err;
//     return res.json(data);
//     })
// }
// function coursemodulesdetails(req,res){
//     console.log("hi");
//     CourseCTRl.CourseModel.find({Course_Name:'Blockchain Fundamentals'},(err, courses) => {
        
//         if (err) {
//           return res.send(err);
//         }
//         console.log(courses);
//         return res.send(courses);
//       });
// }


// function courseNamesDetails(req,res){

//     CourseCTRl.CourseModel.find({Instrutor_email:req.params.Instrutor_email},(err,courses) =>{
//         if(err){
//             res.send(err)
//         }
//         else{
//             res.send(courses)
//         }
//     })


// }

// function addquizquestions(req,res){

//     const courseName = req.body.courseName;

// // New quiz question data
// const newQuizQuestion = {
//   question: req.body.quizquestion,
//   options: [
//     { option: req.body.quizoption1, isCorrect: req.body.correctOption === 'option1' },
//     { option: req.body.quizoption2, isCorrect: req.body.correctOption === 'option2' },
//     { option: req.body.quizoption3, isCorrect: req.body.correctOption === 'option3' },
//     { option: req.body.quizoption4, isCorrect: req.body.correctOption === 'option4' },
//   ],
// };

// // Query to find and update the course module
// const query = {
//   Course_Name: courseName
// };
// const update = {
//   $push: { 'Course_Modules.$[].quizQuestions': newQuizQuestion }
// };
// const options = {
//   new: true
// };

// CourseCTRl.CourseModel.findOneAndUpdate(query, update, options, (err, updatedCourse) => {
//   if (err) {
//     console.error(err);
//     res.send('Error updating course module');
//   } else if (!updatedCourse) {
//     res.send('Course not found');
//   } else {
//     res.send('Quiz question added to course module');
//   }
// });
// }
// module.exports = {addCourseController,getCourseController,getCoursesController,noofcourse,tablecoursedetails,coursemodulesdetails,courseNamesDetails,addquizquestions }