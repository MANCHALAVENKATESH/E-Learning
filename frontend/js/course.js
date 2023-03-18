

get_req()

function retrieveSelectedCourse() {
  return localStorage.getItem("selectedCourseIndex"); 
}

function get_req(){  
  $.get("http://127.0.0.1:9999/get_Courses", function(data, status){
  
    
     console.log(data);
      for(let i=0; i<data.length; i++){
        document.querySelector('#courseslist').innerHTML+=`
        <div class="card-container">
        <div class="card">
          <img src="/frontend/img/cat-1.jpg" alt="Image 1">
          <h3 class="card-title">${data[i].Course_Name}</h3>
          <p class="card-desc">${data[i].Course_Description} </p>
          <button class="view-course-button" onclick="fun1()" data-index="${data[i].Course_Name}" id="button">View Course</button>
        </div>
        </div>
      

        `


      }
    })
}