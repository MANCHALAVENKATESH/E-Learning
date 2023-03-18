const InstructorCTRL = require('../models/InstrictorModel')

function InstructorRegistrationController(req, res) {
    // console.log(req.body)
    let InstructorData = InstructorCTRL.InstructorModel({
        FullName: req.body.FullName,
        Email: req.body.Email,
        Message: req.body.Message,
        File: req.body.File,
        Linked: req.body.Linked,
        State: req.body.State,
        Password: req.body.Password
    })
    console.log(InstructorData)
    console.log("sd")
    InstructorData.save((err, result) => {
        if (err) {
            res.send("error")
        } else {
            res.send("User registered successfully")
        }
    })
}

function instructordata(req, res) { 
    InstructorCTRL.InstructorModel.find({ State: "Approved" }, (err, data) => { 
        if (err) throw err; 
        return res.json(data) }) 
    }

module.exports = { InstructorRegistrationController,instructordata }