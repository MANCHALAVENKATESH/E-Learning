const express = require('express')
const UserCTRl = require('../models/allUsers')

function addUser(req, res){
    let addUserData = UserCTRl.User({
        userName:req.body.userName,
        password:req.body.password,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        coursesEnrolled:req.body.coursesEnrolled,
        role:req.body.role
    })
    // if(req.file){
    //     addUserData.File = 'Uploads'+req.file.path
    // }

    console.log(addUserData)   
    addUserData.save((err,result)=>{
        if(err){
            console.log("5000")
            res.send(err)
        }else{
            console.log("1000")
            res.send("User added")
        }
    })
}



function authUser(req, res){
    UserCTRl.User.findOne({email:req.body.email}, (err,docs) => {
        if(err){
            console.log("100")
            console.log(err)}
        else{
            console.log("200")
            console.log(docs)
            if(docs === null){
                res.send(err)
            }else{
            if(docs.password === req.body.password){
                if(err){
                    console.log(err)
                }
                else{
                    res.send(docs)
                }
            }}
        }
})
}


function instructorInfo(req, res){
    UserCTRl.User.find({},(err,docs) =>{
        if(err){
            console.log(err)
        }else{
            res.send(docs)
    }
})
}

function studentToUserStep1(req, res){
    UserCTRl.User.find({email:req.body.email},(err,docs) =>{
        if(err){
            console.log(err)
        }else{
            console.log(docs)
            // let message = req.body.Message
            // let Files = req.body.File
            // let Linked = req.body.Linked
            // console.log(typeof(req.body.Message))
            console.log(req.body)
            
            UserCTRl.User.updateOne({email:req.body.email},
                {$set:{isInstructor:"pending",Message:req.body.Message,File:req.file.location,Linked:req.body.Linked}},(err,docs) =>{
                if(err){
                    console.log(err)
                }else{
                    res.send(docs)
                }
            })
                // res.send(docs)
            }
        })
}


function getinstructorInfo(req, res){
    UserCTRl.User.findOne({email:req.body.email},(err,docs) =>{
        // console.log(req.body.email.docs)
        // console.log(docs)
        if(err){
            console.log(err)
        }else{
            res.send(docs.isInstructor)
            //res.send(docs.State)

    }
})
}

function acceptInstructor(req, res){
    console.log(req.body)
    if(req.body.task == "Approve"){
        UserCTRl.User.updateOne({_id:req.body._id},{$set:{isInstructor:"Approved"}},(err,docs) =>{
        if(err){
            console.log(err)
        }else{
            console.log("accc")
            res.send(docs)
        }
})
    UserCTRl.User.updateOne({_id:req.body._id}, {$set:{role:"Instructor"}},(err,docs) =>{
        if(err) console.log(err)
        else{
            console.log(docs)
            console.log("ins")
        }
    })
    // UserCTRl.User.updateOne({_id:req.body._id}, {$unset:{coursesEnrolled:""}},(err,docs) =>{
    //     if(err) console.log(err)
    //     else{
    //         console.log(docs)
    //         //res.send(docs)
    //     }
    // })
    }else if(req.body.task ==="Decline"){
        UserCTRl.User.updateOne({_id:req.body._id},{$set:{isInstructor:"Declined"}},(err,docs) =>{
            if(err){
                console.log(err)
            }else{
                console.log(req.body.id)
                res.send(docs)
        }
    })        
    }
}

function courseCompletion(req,res){
    console.log(req.body)
    // course= req.body.course_name
    UserCTRl.User.findOne({email:req.body.email},(err,data) =>{
        if(err){
            res.send("error");
        }
        else{
            // if(data != null){
            //     res.send("already completed the module");
            // }
            // else{
                console.log(data)
                courses = data.coursesEnrolled
                // console.log(courses)
                for(var i=0; i<courses.length; i++){
                    if(courses[i].name === req.body.course_name){
                        console.log(courses[i].name)
                        for(var j=0; j < courses[i].modules.length; j++){
                            if(courses[i].modules[j] === req.body.module){
                                var flag = 1;
                                res.send("Already enrolled")
                                break;
                            }
                        }
                    }
                }
                if(flag != 1){
                for(let i = 0; i < courses.length; i++) {
                    if(courses[i].name === req.body.course_name){
                        console.log(courses[i])
                        courses[i].modules.push(req.body.module)
                        console.log(courses[i])
                        UserCTRl.User.updateOne({email: req.body.email}, {$set:{coursesEnrolled: courses}},(err,docs) =>{
                            if(err){
                                console.log(err)
                            }else{
                                res.send(docs)
                        }
                    })       
                    }
                // }
                // UserCTRl.User.updateOne(
                //     {email:req.body.k,"coursesEnrolled.name":req.body.course_name},
                //     {$push:{"coursesEnrolled.0.modules":req.body.module}},(err,docs) =>{
                //         if(err){
                //             console.log(err)
        
                //         }else{
                //             console.log(docs)
                //         }
                //     }
                // )
            }
        }
            //res.send("not found")
        }
    })
}

function userProfileDetails(req, res){
    UserCTRl.User.find({email:req.params.email},(err,docs) =>{
        if(err){
            console.log(err)
        }else{
            console.log(docs)
            res.send(docs)
        }
    })
}


/* db.collection.update(
    { "_id": ID, "playlists._id": "58"},
    { "$push": 
        {"playlists.$.musics": 
            {
                "name": "test name",
                "duration": "4.00"
            }
        }
    }
) */


module.exports ={addUser, authUser, acceptInstructor, studentToUserStep1 , instructorInfo, getinstructorInfo , courseCompletion, userProfileDetails}