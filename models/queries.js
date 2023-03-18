const db = require('./conn').db
const mongoose = require('./conn').mongoose

const Queries = {
    User_Name:{
        type:String,
        required:true
    },
    Email: {
        type:String,
        unique: true 
    },
    Subject:{
        type:String
    },
    Message:{
        type:String
    },
}

let QueriesModel = mongoose.model('QUERIES',Queries,'QUERIES')
module.exports = {QueriesModel}