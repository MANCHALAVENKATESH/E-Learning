

get_req()

function retrieveSelectedCourse() {
  return localStorage.getItem("selectedCourseIndex"); 
}

function get_req(){  
  $.post("http://127.0.0.1:9999/quiz/course", function(data, status){
  
    
     console.log(data);
      for(let i=0; i<data.length; i++){
        document.querySelector('#courseslist').innerHTML+=`
		
       <div class="card";>
	<div class="card-img"  >
	<img src="/frontend/img/cat-1.jpg" alt="Image 1">
		<div class="overlay">
			<div class="overlay-content">
     
			</div>
		</div>
	</div>
	
	<div class="card-content">
		<a href="#!">
			<h2 class="name">${data[i].course_name}</h2>
			<p>${data[i].course_description}</p>
		</a>
    <button class="view-course-button" onclick="fun1()" data-index="${data[i].course_name}" id="button">View Course</button>

		

	</div>
</div>


        `


      }
    })
}



//  <div class="card-container">
//         <div class="card">
//           <img src="/frontend/img/cat-1.jpg" alt="Image 1">
//           <h3 class="card-title">${data[i].Course_Name}</h3>
//           <p class="card-desc">${data[i].Course_Description} </p>
//           <button class="view-course-button" onclick="fun1()" data-index="${data[i].Course_Name}" id="button">View Course</button>
//         </div>
//         </div>