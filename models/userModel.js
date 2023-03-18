const db = require('./conn').db
const mongoose = require('mongoose')

const user = {
    User_Name:{
        type:String,
        required:true
    },
    Email: {
        type:String
    },
    Password: {
        type:String
    },
    Status:{
        type:String
    },
    Course_Name:{
        type:[]
    }
}

let userModel = mongoose.model('USER_INFORMATION', user, 'USER_INFORMATION')
module.exports = {userModel}