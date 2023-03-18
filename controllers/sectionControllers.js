const moduleCTRl = require("../models/section");
const courseCTRL = require("../models/courses");
const quizCTRl = require("../models/quize");
// const { application } = require('express')


async function getCourse(req, res) {
  try {
    const data = await courseCTRL.Course.find({})
    .populate({
      path: 'sections',
      populate: {
        path: 'modules.quiz',
        model: 'Quiz',
      },
    })
      .exec();

    res.send(data);
  } catch (e) {
    console.log(e);
  }
}

// async function get(req, res) {
//   console.log("hi")
//   // const courseName = req.body.course_name;
//   try{
//   let data=await courseCTRL.Course.find()
//     .populate({
//       path: "sections",
//       populate: {

//         path: "modules.quiz",
//         model: "Quiz",
//       },
//     })
//     res.send(data);
// }
// catch (e) {
//     console.log(e);
// }
//     // .exec((err, data) => {
//     //   if (err) {
//     //     res.status(500).send(err);
//     //   } else {
//     //     res.send(data);
//     //   }
//     // });
// }
async function getSection(req, res) {
  const courseName = req.params.course_name;
  try{
  let data=await courseCTRL.Course.findOne({ course_name: courseName })
    .populate({
      path: "sections",
      populate: {

        path: "modules.quiz",
        model: "Quiz",
      },
    })
    res.send(data);
}
catch (e) {
    console.log(e);
}
    // .exec((err, data) => {
    //   if (err) {
    //     res.status(500).send(err);
    //   } else {
    //     res.send(data);
    //   }
    // });
}

async function getInsCourse(req,res){
   const insName = req.params.Instrutor_Email;
  try{
  let data=await courseCTRL.Course.find({Instrutor_Email : insName })
    .populate({
      path: "sections",
      populate: {

        path: "modules.quiz",
        model: "Quiz",
      },
    })
    res.send(data);
}
catch (e) {
    console.log(e);
}
    // .exec((err, data) => {
    //   if (err) {
    //     res.status(500).send(err);
    //   } else {
    //     res.send(data);
    //   }
    // });



}



async function addSection(req, res) {
  console.log("its the body", req.body);
  

  let addSectionName = moduleCTRl.Section({
    section_name: req.body.section_name,
    modules: [],
  });

  let add_section = await addSectionName.save();
  let section_id = await moduleCTRl.Section.findOne(
    { section_name: req.body.section_name },
    { _id: 1 }
  );
  console.log("hii", section_id);

  let add_section_course = await courseCTRL.Course.updateOne(
    { course_name: req.body.course_name },
    { $push: { sections: section_id } }
  );
  console.log(add_section_course);

  let modules = JSON.parse(req.body.modules)
  

  for (let i = 0; i < modules.length; i++) {
    qui=[]
    let currentModule = {
      module_name: modules[i].module_name,
      youtube_link: modules[i].youtube,
      quiz: []
    };
    console.log(modules[i].quiz.length)

    for (let j = 0; j < modules[i].quiz.length; j++) {
      let options = [modules[i].quiz[j].Options[0].op1,
        modules[i].quiz[j].Options[0].op2,
        modules[i].quiz[j].Options[0].op3,
        modules[i].quiz[j].Options[0].op4
      ];
      // console.log(options)

      let currentQuiz = {
        question: modules[i].quiz[j].question,
        Options: options,
        CorrectOption: modules[i].quiz[j].cor
      };
      // console.log(currentQuiz)
       qui.push(currentQuiz)
       console.log(qui)

    }
    console.log(qui)
      let addQuiz = quizCTRl.Quiz({
        quize: qui
      });;
      let saved_quiz = await addQuiz.save();
      console.log("Saved quiz:", saved_quiz);

      currentModule.quiz.push(saved_quiz._id);
    
    let add_update = await moduleCTRl.Section.updateOne(
      { section_name: req.body.section_name },
      { $push: { modules: currentModule } }
    );
  }

  res.send("worked");
}
module.exports = { addSection, getSection,getCourse,getInsCourse };

// function addModule(req, res){
//     for(var i in p){
//         currentModule = p[i].
//     }
// }
