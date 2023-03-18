const db = require('./conn').db
const mongoose = require('./conn').mongoose

const InstructorA = {
    FullName:{
        type:String,
        required:true
    },
    Email: {
        type:String,
        unique: true 
    },
    State:{
        type:String
    },
    Courses:{
        type:[]
    }
}

let InstructorModelA = mongoose.model('INSTRUCTOR_INFORMATION', InstructorA,'INSTRUCTOR_INFORMATION')
module.exports = {InstructorModelA}