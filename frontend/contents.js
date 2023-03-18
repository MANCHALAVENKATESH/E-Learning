$(document).ready(function() {
    // Get course ID from URL or from another source
    // var coursename = "Introduction to Programming";
    var coursename = localStorage.getItem("selectedCourseIndex")
    
    // Make AJAX request to retrieve course data
    $.ajax({
      url: 'http://localhost:9999/' + coursename,
      type: 'POST',
      dataType: 'json',
      success: function(data) {
        console.log("hi")
         console.log(data)
       var courseData = data;
        // Populate course data in HTML elements
           // Uspdate the course data container with the course name and description
           
    $('#course-data').append(`<h1>${courseData.course_name}</h1>`);
    $('#course-data').append(`<p>${courseData.course_description}</p>`);

    $('#course-data').append(`<p>INSTRUCTOR EMAIL : ${courseData.Instrutor_Email}</p>`);
    $('#course-data').append(`<p id="something">hola</p>`)
    console.log(courseData.sections)
    // Loop through the sections and modules to add them to the HTML
    for (const section of courseData.sections) {
      const sectionHtml = `
        <section class="section">
          <div class="section-header">
            <h2>${section.section_name}</h2>
            </div>
              <button id="showpdf" onclick="showpdf()" class="quiz-button">Show PDF</button>
              <object id="pdfobject" class="pdfobject" style="visibility: hidden;" data="https://teamrocket.s3.us-east-1.amazonaws.com/1677414657052f1040.pdf" width="800px" height="100%">
              </object>
           
                    

      `
    


      $('#course-data').append(sectionHtml);
    //when i click on the button pdf should be displayed

      for (const module of section.modules) {
      

        let moduleHtml = `
          <div class="module" onclick="location.href='#'">
            <div class="module-name">${module.module_name}</div>
            <div class="module-buttons">
              <button class="play-button" onclick="showVideo('${module.youtube_link}')">Play Video</button>
              <button class="quiz-button" onclick="showQuiz('${module.module_name}')">Take Quiz</button>
            </div>
        
            <div id="video-modal" class="modal">
              <div class="modal-content">
                <span class="close-button" onclick="closeVideo()">&times;</span>
                <div id="video-container"></div>
                <button class="quiz-button" onclick="showQuiz('${module.module_name}')">Take Quiz</button>
              </div>
            </div>    
        
            <div id="quiz-modal" class="modal">
              <div class="modal-content">
                <span class="close-button" onclick="closeQuiz()">&times;</span>
                <div id="quiz-container"></div>
              </div>
            </div>
        
            <div class="quiz" id="${module.module_name}" style="display: none; margin-right: 2001px; height: 3850px; width: 341px;">
              <div class="quizc">
                <h3>Quiz: ${module.module_name}</h3>
        `
        const correctOptions = [];
        for (let i = 0; i < module.quiz[0].quize.length; i++) {
          correctOptions.push(module.quiz[0].quize[i].CorrectOption);
          console.log(correctOptions)
         
          moduleHtml += `
            <div class="quiz-question" id="quiz-question-${i}" style="display: ${i === 0 ? 'block' : 'none'};">
              <h4>Question ${i+1}: ${module.quiz[0].quize[i].question}</h4>
              <div class="quiz-options">
                <input type="radio" name="question${i+1}" value="1" id="${i+1}a">
                <label for="${i+1}a">${module.quiz[0].quize[i].Options[0]}</label><br>
                <input type="radio" name="question${i+1}" value="2" id="${i+1}b">
                <label for="${i+1}b">${module.quiz[0].quize[i].Options[1]}</label><br>
                <input type="radio" name="question${i+1}" value="3" id="${i+1}c">
                <label for="${i+1}c">${module.quiz[0].quize[i].Options[2]}</label><br>
                <input type="radio" name="question${i+1}" value="4" id="${i+1}d">
                <label for="${i+1}d">${module.quiz[0].quize[i].Options[3]}</label><br>
                <button id="close-button" class="close-button" onclick="closeQuiz('${module.module_name}')">Close</button>
                
              </div>
              <div class="quiz-buttons">
              
                ${i > 0 ? `<button class="prev-button" onclick="showQuizQuestion('${module.module_name}', ${i-1})">Previous</button>` : ''}
                ${i < module.quiz[0].quize.length-1 ? `<button class="next-button" onclick="showQuizQuestion('${module.module_name}', ${i+1})">Next</button>` : ''}
                ${i === module.quiz[0].quize.length-1 ? `<button class="submit-button" id="submit" onclick="submitQuiz('${module.module_name}', [${correctOptions}])">Submit</button>` : ''}
               
              </div>
            </div>
          `;
        }
      console.log(correctOptions)
        
        moduleHtml += `
          </div>
         
       
        </div>
        `;
         
        
        
        $('#course-data').append(moduleHtml);
      }
   
      $('#course-data').append('</section>');
    }
  ;
  }  });
 
})
var closeButtonExists = false;

function showpdf() {
  $('#pdfobject').css('visibility', 'visible');
  if (!closeButtonExists) {
    var closeButton = $('<button>Close</button>').appendTo('body');
    closeButton.on('click', function() {
      $('#pdfobject').css('visibility', 'hidden');
      closeButton.remove();
      closeButtonExists = false;
    });
    closeButtonExists = true;
  }
}



function submitQuiz(quizId, correctOptions) {
  var module = document.getElementById(quizId); 
   console.log(correctOptions)
  var length = $('.quizc').length;
  const selectedOptions = [];
  const optionElements = [];

  // Get all the selected options for each question
  for (let i = 1; i <= length; i++) {
    const questionId = 'question' + i;
    const options = module.querySelectorAll(`[name=${questionId}]`);
    optionElements.push(options);
  }

  for (let i = 0; i < optionElements.length; i++) {
    for (let j = 0; j < optionElements[i].length; j++) {
      if (optionElements[i][j].checked) {
        selectedOptions.push(optionElements[i][j].value);
        break;
      }
    }
  }    

  // If the user hasn't selected an option for every question, show an error message
  if (selectedOptions.length !== length) {
    alert("Please answer all questions before submitting.");
    return;
  }

  // Check the user's selected options against the correct answers
  let numCorrect = 0;
  for (let i = 0; i < selectedOptions.length; i++) {
    console.log(correctOptions[i])
    console.log(selectedOptions[i])
    if (selectedOptions[i] == correctOptions[i]) {
      numCorrect++;
      console.log(numCorrect)
    }
  }
  console.log(numCorrect)

  // Show the user's score
  const score = (numCorrect / selectedOptions.length) * 100;
  alert(`You scored ${score}% on the quiz.`);
  if (score ==100){
    update={
  email:localStorage.getItem('k'),
 course_name :localStorage.getItem("selectedCourseIndex"),
  module:quizId,
}
console.log(update)
 update =JSON.stringify(update)
        $.ajax({
      url: 'http://localhost:9999/a/CourseComplete',
      type: 'POST',
      contentType: 'application/json',
      data:update,
success: function(data) {
  console.log(data);
},error: function(err) {
alert(err);   }})
 


  } 
  }

  const email =  window.localStorage.getItem("k")
  $.ajax({
    method: 'GET',
    url: " http://127.0.0.1:9999/userProfile/"+email,
    success: (data) => {
      console.log(data)
      var course_name = localStorage.getItem("selectedCourseIndex")
      console.log(course_name)
      courses = data[0].coursesEnrolled
      console.log(courses)
      // console.log(courses)
      for(var i=0; i<courses.length; i++){
          if(courses[i].name === course_name){
              console.log(courses[i].name)
              const numCompletedModules= courses[i].modules.length
              console.log(numCompletedModules)
              // Get course ID from URL or from another source
// var coursename = "Introduction to Programming";
var coursename = localStorage.getItem("selectedCourseIndex")

// Make AJAX request to retrieve course data
$.ajax({
  url: 'http://localhost:9999/' + coursename,
  type: 'POST',
  dataType: 'json',
  success: function(data) {
    var courseData = data;
    // Count the total number of modules in the course
    var totalNumOfModules = 0;
    for (const section of courseData.sections) {
      totalNumOfModules += section.modules.length;
    }
    console.log("Total number of modules in the course: " + totalNumOfModules);

    // Populate course data in HTML elements
    // ...
    const progressPercentage = (numCompletedModules / totalNumOfModules) * 100;
                      console.log(progressPercentage)
                     
                      var s = document.getElementById("s")

                  s.style.width = progressPercentage + '%'
               
 // Set the progress value here

function updateProgressBar() {
  progressBar.style.width = progressPercentage + '%';
}

updateProgressBar();

  }
});

                      
                  }
              }
          }
      }
      
    
     
    
  )
// Fetch the number of completed modules from the user database
// const numCompletedModules = 80;

// // Calculate the progress percentage
// const progressPercentage = (numCompletedModules / totalModules) * 100;

// Update the width of the progress bar
const progressBar = document.querySelector('.progress');
progressBar.style.width = progressPercentage + '%';

// function checkAnswer(quizId, correctAnswer ,course_name,module) {
//   var quiz = document.getElementById(quizId);
//   var selectedAnswer = quiz.querySelector('input[name=question1]:checked').value;
//   console.log(selectedAnswer)

// update={
//   email:localStorage.getItem('k'),
//   course_name:course_name,
//   module:module,
// }
// console.log(update)
//   if (selectedAnswer === correctAnswer) {
//  update =JSON.stringify(update)
//         $.ajax({
//       url: 'http://localhost:9999/a/CourseComplete',
//       type: 'POST',
//       contentType: 'application/json',
//       data:update,
// success: function(data) {
//   console.log(data);
// },error: function(err) {
// alert(err);   }})
 
//     alert('Correct answer!');

//   } else {
//     alert('Incorrect answer. Please try again.');
//   }
  
//   window.location.href="coursecontent.html"
// }

