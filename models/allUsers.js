const db = require('./conn').db
const mongoose = require('./conn').mongoose

const user = {
    userName:{
        type:String,
    },
    password: {
        type:String,
    },
    coursesEnrolled: [{
        type: Object,
      }],
    email:{
        type:String
    },
    phone:{
        type:String
    },
    address:{
        type:String
    },
    role:{
        type:String
    },
    isInstructor:{
        type:String
    },
    Message:{
        type:String
    },
    File:{
        type:String
    },
    Linked:{
        type:String
    }
}

let User = mongoose.model('ALL_USERS', user,'ALL_USERS')
module.exports = {User}