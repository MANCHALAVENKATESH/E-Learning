const db = require('./conn').db
const mongoose = require('./conn').mongoose


const quizSchema = new mongoose.Schema({
  quize:[{
    question: {
     type: String
   },   
   Options:[
   ],
   CorrectOption:{
     type:String
   }
}]
});
  
  const Quiz = mongoose.model('Quiz', quizSchema, 'Quiz');
module.exports = {Quiz}