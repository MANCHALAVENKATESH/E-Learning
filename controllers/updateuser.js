const CourseCTRl = require('../models/courses')
const UserCTRl = require('../models/allUsers')


function handleEnroll(req,res){
    const email = req.body.Email;
    const courseName = req.body.Course_Name;

  console.log(req.body)
  userModelCtrl.userModel.findOne({Email:email},(err,user) =>{
      if(err){
        res.send({
            error: 'Error while fetching user' 
            
        })
        console.log(err)
      }

      

      if (!user) return res.send({ error: 'User not found' });
      const alreadyEnrolled = user.Course_Name.includes(courseName);
      if (alreadyEnrolled) return res.status(400).send({ error: 'You have already enrolled in this course' });
      user.Course_Name.push(courseName);
      let x ={name:courseName,modules:[]}

      /* UserCTRl.User.updateOne(
                    {email:req.body.k,"coursesEnrolled.name":req.body.course_name},
                    {$push:{"coursesEnrolled.0.modules":req.body.module}},(err,docs) =>{
                        if(err){
                            console.log(err)
                        }else{
                            console.log(docs)
                        }
                    }
                ) */

                // let x ={name:"first",modules:[]}
// db.ALL_USERS.updateOne({email:"priyanshu@gmail.com"},{$push:{"coursesEnrolled":x}})

      user.save((err) => {
        if (err) return res.status(500).send({ error: 'Error while enrolling in course' });
        return res.status(200).send({ message: 'Successfully enrolled in course' });
      });


              
})}
function enroll(req,res)
{
  const email = req.body.email
  console.log(req.body)
  console.log(email)
  const courseName = req.body.coursesEnrolled;
  // alert(email)
  // alert(courseName)
console.log(req.body.email)
UserCTRl.User.findOne({email:email},(err,user) =>{
    if(err){
      res.send({
          error: 'Error while fetching user' 
          
      })
      console.log(err)
    }
    if (!user) return res.send({ error: 'User not found' });
    const alreadyEnrolled = user.coursesEnrolled.includes(courseName);
    if (alreadyEnrolled) return res.status(400).send({ error: 'You have already enrolled in this course' });
    user.coursesEnrolled.push({
      name: courseName,
      modules:[]
    });
    

    user.save((err) => {
      if (err) return res.status(500).send({ error: 'Error while enrolling in course' });
      CourseCTRl.Course.updateOne({course_name: req.body.coursesEnrolled},{$push:{Students_Enrolled:req.body.email}},(err,docs) =>{
        if(err){
            console.log(err)
        }else{
            console.log(req.body)
            res.send("success")
        }
      })
  
    
    });
  })
}

function getUserDetails(req,res){
    const email = req.body.Email;
  
    userModelCtrl.userModel.find({ email }, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).send({ message: 'User not found' });
    return res.send(user);
  });
};

module.exports={handleEnroll,getUserDetails,enroll}