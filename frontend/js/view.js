
// $(document).ready(){

// }

get_req()
function retrieveSelectedCourse() {
  return localStorage.getItem("selectedCourseIndex");
}

function get_req() {
  var ind = localStorage.getItem("selectedCourseIndex")
  console.log(ind)

  $.post("http://127.0.0.1:9999/" + ind, function (data, status) {

    console.log(data);
    // for (let i = 0; i < data.length; i++) {
      console.log("hey")
      document.querySelector('#vc').innerHTML += ` <div class="course-container">
      <div class="course-background" style="background-image: url(/frontend/img/course-1.jg)">
        <div class="course-info">
          <img class="course-image" src="/frontend/img/cat-1.jpg" alt="JavaScript course">
          <div class="course-details">
            <h2 class="course-title" id="course-title">${data.course_name}</h2>
            <p class="course-description">${data.course_description}</p>
            <p class="course-description">Instructor Email: ${data.Instrutor_Email}</p>
            <div id="viewcourse">
            <button id="enroll-button" class="enroll-button" data-index="${data.course_name}"  onclick="enroll()">Enroll</button>
        
          </div>
           
          
            <h5 class="module">SECTIONS</h5>`
            for (const section of data.sections) {
              const sectionHtml = `
            
              <p class="course-module">${section.section_name}</p>
             
            
              `
              $('.course-container').append(sectionHtml);
    }        
            

      
             
                    
         `</div>
        </div>
      </div>`
      
      
    console.log(document.getElementById('enroll-button'))

   a()
   console.log("a")
    }
  )}
  



  // <h3 class="module">Instructor</h3>
            // <h4>${data[i].Instrutor_email}<h4>



//  Retrieve the selected course index
var selectedCourseIndex = retrieveSelectedCourse();

// Update the course information on the page
// var selectedCourseIndex = retrieveSelectedCourse();

// Update the course information on the page
// document.querySelector("#course-title").innerHTML = courses[selectedCourseIndex].title;
// document.querySelector("#course-description").innerHTML = courses[selectedCourseIndex].description;

// var modulesList = "";
// for (var i = 0; i < courses[selectedCourseIndex].modules.length; i++) {
// modulesList += "<li>" + courses[selectedCourseIndex].modules[i] + "</li>";
// }
// document.querySelector("#course-modules").innerHTML = modulesList;

// document.querySele  // if(email==1){
  //   // const loginButton = document.getElementById('enroll-button');
  //   // loginButton.addEventListener('click', () => {
  //     window.location.href = 'login (2).html';
  //   // });
  //  console.log('yes')
    
  //   }
  //   else{  // if(email==1){
  //   // const loginButton = document.getElementById('enroll-button');
  //   // loginButton.addEventListener('click', () => {
  //     window.location.href = 'login (2).html';
  //   // });
  //  console.log('yes')
    
  //   }
  //   else{  // if(email==1){
  //   // const loginButton = document.getElementById('enroll-button');
  //   // loginButton.addEventListener('click', () => {
  //     window.location.href = 'login (2).html';
  //   // });
  //  console.log('yes')
    
  //   }
  //   else{ctor("#enroll-button").innerHTML = "Enroll";
// document.querySelector("#enroll-button").setAttribute("href", courses[selectedCourseIndex].enrollURL);



// document.addEventListener("DOMContentLoaded",function(){
  // if(email==1){
  //   // const loginButton = document.getElementById('enroll-button');
  //   // loginButton.addEventListener('click', () => {
  //     window.location.href = 'login (2).html';
  //   // });
  //  console.log('yes')
    
  //   }
  //   else{
    window.addEventListener('load', function() {
      console.log("hi")
    });

    const email =  window.localStorage.getItem("k")
    console.log(email)
    
a()
  function a(){
  
 if(email!=1)
 {
  

$.ajax({
  method: 'GET',
  url: " http://127.0.0.1:9999/userProfile/"+email,
  success: (data) => {
    const email =  window.localStorage.getItem("k")
    console.log(data)
    // for(const coursename of data.coursesEnrolled){
    // const courseName =coursesEnrolled.name;
    // console.log(courseName)
    // }
  
    const enrollButton = document.getElementsByClassName('enroll-button');
    console.log(enrollButton)

    // const index = enrollButton.dataset.index;
    // console.log(index);
    const course_title=window.localStorage.getItem("selectedCourseIndex")
    console.log(course_title)
    // console.log(typeof data.coursesEnrolled);
    // const course_title = document.getElementById('course-title').textContent;
    // console.log(course_title)
    console.log('Email:', email);
    console.log('course_title:',course_title);
    let course = data.coursesEnrolled;
    let isEnrolled = false;
    for(i=0;i<data[0].coursesEnrolled.length;i++){
      const courseName =data[0].coursesEnrolled[i].name;
      console.log(courseName)
    //   }
    // for (let i = 0; i < courseName.length; i++) {
    //   console.log(courseName[i])
      if (courseName== course_title) { //Coursetitle[i] data[i].Course_Name data[0].Course_name
        isEnrolled = true;
      
        break;
      }
      
    }
    console.log(isEnrolled)
    const enroll_Button = document.querySelector(`button[data-index="${course_title}"]`);
    // const enroll_Button = document.getElementById('#enroll-button')
    console.log(enroll_Button)
    
    enroll_Button.textContent = isEnrolled ? "View Course" : "Enroll";


    enroll_Button.onclick = isEnrolled ? handleView : enroll;
     
      // your function code here

    // window.addEventListener('load', function() {
     

    // })
   
    // const enroll_Button = document.querySelector('#enroll-button');
    // console.log(enroll_Button)
  
    // enroll_Button.textContent = isEnrolled ? "View Course" : "Enroll";
    // enroll_Button.onclick = isEnrolled ? handleView : enroll;
     
  }
 
      
})
  
// })


    // if (isEnrolled) {
    //   // Update button text
    //   document.getElementById("enroll-button").innerHTML = "View Course";
    
    //   // Add onclick functionality
    //   document.getElementById("enroll-button").onclick = function() {
    //     // Redirect user to course page
    //     window.location.href = "https://example.com/course";
    //   }
    // } else {
    //   // Add onclick functionality
    //   document.getElementById("enroll-button").onclick = function() {
    //     // Enroll user and redirect to course page
    //     enroll();
        
    //   }
    // }
    // const request = new XMLHttpRequest();
    // request.onreadystatechange = function() {
    //   if (this.readyState === 4 && this.status === 200) {
    //     const enrollButton = document.getElementById("enroll-Button");
    //     console.log(enrollButton)
    //     enrollButton.textContent = isEnrolled ? "View Course" : "Enroll";
    //     enrollButton.onclick = isEnrolled ? handleView : enroll;
        
    //   }
    // };
    // request.open("GET", "/path/to/button", true);
    // request.send();
    // const enrolButton = document.getElementById("enroll-Button");
    // console.log(enrolButton)
    
    // document.addEventListener('DOMContentLoaded', function() {
     
    //   });
    // }_)
    
  //   var actionButton = document.getElementById("enroll-button");
   
  // actionButton.textContent = isEnrolled ? "View Course" : "Enroll";
  // actionButton.onclick = isEnrolled ? handleView : enroll;

 

function enroll(){
  const enrollButton = document.getElementById("enroll-button");
  enrollButton.innerHTML = "You are now enrolled";
        enrollButton.style.backgroundColor = "grey";
        enrollButton.disabled = true;
        const course_title = document.getElementById('course-title').textContent;
        console.log(course_title)

        obj={
          email: email,
          coursesEnrolled:course_title,
          }
        console.log("s")
        console.log(obj)
        obj = JSON.stringify(obj)
        $.ajax({
          method: 'POST',
          contentType: "application/json",
          "data": obj,
          url: 'http://localhost:9999/enroll/e',
           success: (e) => {
            console.log('Successfully enrolled in course:', obj);
          },
          error: (error) => {
            console.error('Error enrolling in course:', error);
          }
        });
  
    }
  
  error: (error) => {
    console.error('Error fetching user details:', error);
  }

// else{
//   const loginButton = document.getElementById('enroll-button');
//   loginButton.addEventListener('click', () => {
//     window.location.href = 'login (2).html';
//   });
// }
console.log(email)


function handleView(){
  window.location.href = "coursecontent.html";
  
}


  }
  else
 {
    window.location.href="login (2).html"
  }
}
 

    // const enrollButton = document.getElementById("enroll-button");
    // if (isEnrolled) {
    //   enrollButton.innerHTML = "You are already enrolled";
    //   enrollButton.style.backgroundColor = "grey";
    //   enrollButton.disabled = true;
    // }



// function funn() {
// const email =  window.localStorage.getItem("k")
// console.log(email)

// $.ajax({
//   method: 'GET',
//   url: "http://127.0.0.1:9999/userDetails/"+email,
//   success: (data) => {
//     const email =  window.localStorage.getItem("k")
//     const courseName =data[0].coursesEnrolled;
//     console.log(courseName)
//     const enrollButton = document.querySelector('#enroll-button');
//     // console.log(enrollButton)
//     // const index = enrollButton.dataset.index;
//     // console.log(index);
//     // const Course_Name=window.localStorage.getItem("selectedCourseIndex")
//     // console.log(Course_Name)
//     const course_title = document.getElementById('course-title').textContent;
//     console.log(course_title)
//     console.log('Email:', email);
//     console.log('course_title:',course_title);

//     let isEnrolled = false;
//     for (let i = 0; i < courseName.length; i++) {
//       if (courseName[i] == course_title) { //Coursetitle[i] data[i].Course_Name data[0].Course_name
//         isEnrolled = true;
//         break;
//       }
//     }

//     // const enrollButton = document.getElementById("enroll-button");
//     if (isEnrolled) {
//       enrollButton.innerHTML = "You are already enrolled";
//       enrollButton.style.backgroundColor = "grey";
//       enrollButton.disabled = true;
//     } else {
      
//         enrollButton.innerHTML = "You are now enrolled";
//         enrollButton.style.backgroundColor = "grey";
//         enrollButton.disabled = true;
//         const course_title = document.getElementById('course-title').textContent;
//         console.log(course_title)

//         obj={
//           email: email,
//           coursesEnrolled:course_title,
//           }
//         console.log("s")
//         console.log(obj)
//         obj = JSON.stringify(obj)
//         $.ajax({
//           method: 'POST',
//           contentType: "application/json",
//           "data": obj,
//           url: 'http://localhost:9999/enroll',
          
        
//           success: (e) => {
//             console.log('Successfully enrolled in course:', obj);
//           },
//           error: (error) => {
//             console.error('Error enrolling in course:', error);
//           }
//         });
  
//     }
//   },
//   error: (error) => {
//     console.error('Error fetching user details:', error);
//   }
// });
// console.log(email)


// const Course_Name=localStorage.getItem("selectedCourseIndex")

// console.log(Course_Name)
//  
// }
  //document.getElementById("enroll-button").addEventListener("click", function() {

  






// window.onload=function(){
//     if(window.localStorage.getItem("k")!=null && window.localStorage.getItem("k")!=1){
//         document.getElementById("intro1").className="nav-item intro";
//         document.getElementById("intro2").className="nav-item";
//         // document.getElementById("intro3").className="nav-item";
//         // var ans=JSON.parse(window.localStorage.getItem("k"));
//         document.getElementById("user").innerHTML="Hello "+localStorage.getItem("k")+"!";
//     }
// }

function fun2() {
  //console.log(window.localStorage.getItem("k"))
  bhi = JSON.stringify({ Email: window.localStorage.getItem("k") })
  console.log(bhi)
  $.ajax({
    "method": "POST", contentType: "application/json", "data": bhi, "url": "http://localhost:9999/LogOutUser/logout",
    "success": (e) => {
      //alert("Successfully registered")
      window.localStorage.setItem("k", 1)
      window.localStorage.setItem("enrolled","false")
      location.href = "index.html"
    }, error: (e) => { alert(e) }
  });
  window.localStorage.setItem("k", 1);
  document.getElementById("Intro1").className = "nav-item";
  document.getElementById("intro2").className = "nav-item intro-tag";

}





// Import the necessary packages and modules
// const mongoose = require('mongoose');
// const User = require('./models/user');
// const url = 'mongodb+srv://TeamRocket:9997@project.sfwpshx.mongodb.net/LMS'

// mongoose.connect(url,  {
// useNewUrlParser: true,
// useUnifiedTopology: true
// }
// )
// Connect to the MongoDB database



