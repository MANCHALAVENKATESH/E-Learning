const userModelCtrl = require('../models/allUsers')

function userRegistrationController(req, res){
    console.log(req.body)
    let userData = userModelCtrl.userModel({
        User_Name: req.body.User_Name,
        Email: req.body.Email,
        Password: req.body.Password,
        Status:req.body.Status
    })
    userData.save((err,result) =>{
        if(err){
            res.send("errrrrrrror")
        }else{
            res.send("User registered successfully")
        }
    })
}

function loginVerification(req, res){
    console.log(req.body)
    userModelCtrl.userModel.find({email:req.body.Email},(err,docs) =>{
        if(err){
            console.log(err)
        }else{
            console.log(docs)
            if(docs[0].Password === req.body.Password){
                userModelCtrl.userModel.updateOne({Email:req.body.Email},{$set:{Status:"online"}},(err,docs) =>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log(req.body)
                        res.send(docs)
                }
            })
                // res.send(docs)
            }
    }
})
}

function LogOutUser(req, res){
    console.log("100")
    // console.log(req.body.k)
    userModelCtrl.User.find({email:req.body.email},(err,docs) =>{
        if(err){
            console.log(err)
        }else{
            console.log(docs)
            userModelCtrl.User.updateOne({email:req.body.email},{$set:{Status:"offline"}},(err,docs)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(req.body)
                    res.send(docs)
                }
            })
        }
    })
}


function userProfileDetails(req, res){
    userModelCtrl.userModel.find({email:req.params.Email},(err,docs) =>{
        if(err){
            console.log(err)
        }else{
            console.log(docs)
            res.send(docs)
        }
    })
}


function getusercount(req,res){
    userModelCtrl.User.countDocuments({},(err,count) =>{
        if (err) return res.send(err);
    return res.send({ count });
    })
}

function tableuserdata(req,res){
    userModelCtrl.User.find({},function(err,users){
        if(err) throw err;
    return res.json(users)
    })

}
module.exports = {userRegistrationController, loginVerification,LogOutUser, userProfileDetails ,getusercount,tableuserdata}