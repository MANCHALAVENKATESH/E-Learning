const db = require('./conn').db

const mongoose = require('./conn').mongoose

const Courses = {
    Course_Name:{
        type:String,
        required:true
    },
    Course_Description: {
        type:String,
    },
    Course_Modules:
    [{
        module_Name:{
            type:String
        },
        YouTube_Link:{
            type:String
        },
        Quize:[
            {
                Question:{
                    type:String
                },
                Options:[{
                    opt_A:{
                        type:String
                    },
                    opt_B:{
                        type:String
                    },
                    opt_C:{
                        type:String
                    },
                    opt_D:{
                        type:String
                    }
                }
            ],
                CorrectOption:{
                    type:String
                }
            }
        ]
    }],
    Instrutor_email:{
        type:String
    },
    Course_Img:{
        type:String
    },
    category_name:{
        type:String
    },
    
    Students_Enrolled:[]
}

let Course = mongoose.model('COURSE_INFORMATION', Courses ,'COURSE_INFORMATION')
module.exports = {Course}


// {
//        "Course_Name": String,
//        "Course_Description": String,
//        "Course_Modules": [
//            {
//                "Module_Number": Number,
//                "YouTube_Link": String,
//                "Quiz": {
//                    "Question": String,
//                    "Options": [
//                        String,
//                        String,
//                        String,
//                        String
//                    ],
//                    "Correct_Option": Number
//                }
//            },
//            {
//                "Module_Number": Number,
//                "YouTube_Link": String,
//                "Quiz": {
//                    "Question": String,
//                    "Options": [
//                        String,
//                        String,
//                        String,
//                        String
//                    ],
//                    "Correct_Option": Number
//                }
//            },
//            ...
//        ],
//        "Students_Enrolled": Number
//    }
   