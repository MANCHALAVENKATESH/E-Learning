const db = require('./conn').db
const mongoose = require('./conn').mongoose

const Instructor = {
    FullName:{
        type:String,
        required:true
    },
    Email: {
        type:String,
        unique: true 
    },
    File:{
        type:String
    },
    Message:{
        type:String
    },
    Linked:{
        type:String
    },
    State:{
        type:String
    },
    Status:{
        type:String
    },
    Courses:{
        type:[]
    },
    Password:{
        type:String
    }
}

let InstructorModel = mongoose.model('INSTRUCTOR_INFORMATION', Instructor,'INSTRUCTOR_INFORMATION')
module.exports = {InstructorModel}