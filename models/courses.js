const db = require('./conn').db
const mongoose = require('./conn').mongoose


const courseSchema = new mongoose.Schema({
  course_name: {
    type: String,
    required: true
  },
  course_description: {
    type: String,
    required: true
  },
  sections: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Section'
    }

  ],
  Instrutor_Email:{
    type: String
  },
  Students_Enrolled:{
    type:[]
  }

});


const Course = mongoose.model('Course_A', courseSchema,'Course_A');

module.exports = {Course};
