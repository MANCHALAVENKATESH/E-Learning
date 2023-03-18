localStorage.setItem('links', JSON.stringify([]));
localStorage.setItem('quiz', JSON.stringify([]));
// if (localStorage.getItem('k')!=1){

saveAndNext = $("#next")

// saveAndNext.addEventListener("click", nextbtn())
// saveAndNext.addEventListener("click",nextbtn)
saveAndNext.click(nextbtn)
function nextbtn() {
  console.log("hey");
  var quize = JSON.parse(localStorage.getItem('quiz'));

  const data = {
    module_name: $("#module-name").val(),
    youtube: $("#youtube").val(),
    quiz: quize,
  };
  var store = JSON.parse(localStorage.getItem("links"));
  store.push(data);
  console.log(data);
  localStorage.setItem("links", JSON.stringify(store));
  $.ajax({
    url: 'instructor_AddCourses.html #modules', // URL of the page that contains the element you want to reload
    success: function(data) {
      $('.modules').html($(data).find('.modules').html()); // Replace the contents of the .modules element with the reloaded contents
    }
  });
  
  // window.location.reload();
  alert("Successfully added module");

  localStorage.setItem('quiz', JSON.stringify([]));
  console.log(localStorage.getItem('quiz'))
}
sectionN = $("#sectionC")
sectionN.click(sName);
function sName(){
  // sname = $("#section-name").val()
  console.log("sdfsd")
}
var Instrutor_Email = window.localStorage.getItem("k")
console.log(Instrutor_Email)
function addCourse() {
  localStorage.clear()
  var courseName = $("#courseName").val();
  console.log(courseName);
  var courseDescription = $("#courseDescription").val();
  
  

  var data = {
    Course_Name: courseName,
    Course_Description: courseDescription,
    Instrutor_Email : Instrutor_Email
    
  };
  localStorage.setItem('courseName', data.Course_Name);
  let dat = JSON.stringify(data);
  $.ajax({
    method: "POST",
    contentType: "application/json",
    data: dat,
    url: "http://localhost:9999/c",
    success: (result) => {
      alert("sucessfully added");
    },
    error: (result) => {
      alert(result);
    },
  });
  localStorage.setItem("links", JSON.stringify([]));
}


 function addquestion() {
 
  // get the values of the form inputs
  console.log("hi")
  // var quiz = []
  let question = document.getElementById('question').value;
  let option1 = document.getElementById('option1').value;
  let option2 = document.getElementById('option2').value;
  let option3 = document.getElementById('option3').value;
  let option4 = document.getElementById('option4').value;
  let correctOption = document.getElementById('correct-option').value;
  let quiz = JSON.parse(localStorage.getItem('quiz'));
  if (!quiz) {
    quiz = [];
  }
  const qui = [{
    op1: option1,
    op2: option2,
    op3: option3,
    op4: option4
  }]
  const quizz = {
    question: question,
    Options : qui,
    cor: correctOption

  }
  // create a new question object
  // let newQuestion = {
  //   question: question,
  //   options: [option1, option2, option3, option4],
  //   correctOption: correctOption
  // };
  console.log(quizz)
  // var quiz = JSON.parse(localStorage.getItem('quiz'));
  console.log(quiz)
  // push the new question object into the questions array
  quiz.push(quizz);
  console.log( JSON.stringify(quiz))
  localStorage.setItem('quiz', JSON.stringify(quiz));
  

  alert("Successfully added")
  // // store the updated questions array in local storage

  
  // clear the form inputs
  document.getElementById('question').value = '';
  document.getElementById('option1').value = '';
  document.getElementById('option2').value = '';
  document.getElementById('option3').value = '';
  document.getElementById('option4').value = '';
};








function addSection() {
  var course_name = localStorage.getItem('courseName');
  var section_name = $("#section-name").val();
  var sdata = {
    course_name: course_name,
    section_name: section_name,
    modules: localStorage.getItem("links"),
  };
  let sdat = JSON.stringify(sdata);
  console.log(sdat)
  console.log("fff",sdata.modules);
  $.ajax({
    method: "POST",
    contentType: "application/json",
    data: sdat,
    url: "http://localhost:9999/quiz/section",
    success: (result) => {
      alert("sucessfully added");
      window.location.reload()
   
    },
    error: (result) => {
      alert(result);
    },
  });
  localStorage.setItem("links", JSON.stringify([]));
}



// function gen() {
//   store = [];
//   const data = {
//     module_name: $("#module-name").val(),
//     youtube: $("#youtube").val(),
//     question: $("#question").val(),
//     op1: $("#op1").val(),
//     op2: $("#op2").val(),
//     op3: $("#op3").val(),
//     op4: $("#op4").val(),
//     cor: $("#co").val(),
//   };
//   store.append(data);
//   console.log(store);
//   $("#module-name").val(),
//     $("#youtube").val(),
//     $("#question").val(),
//     $("#op1").val(),
//     $("#op2").val(),
//     $("#op3").val(),
//     $("#op4").val(),
//     $("#co").val();
// }