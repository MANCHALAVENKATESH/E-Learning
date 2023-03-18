

get_req()


function get_req(){ return new Promise((res, rej) => {
    email=window.localStorage.getItem("k")
console.log(email)

    $.get("http://127.0.0.1:9999/course/"+email, function(data, status){
        res(console.log(data));
        count=1
        for(let i=0; i<data.length; i++){

         
 
            
            document.querySelector('#all_instructors').innerHTML+=`<tr class="inner-box">
            <th scope="row">
            <div class="event-date">
            <p>${count}</p>
            </div>
             </th>
            
            <td>
            <div class="event-wrap" >
            <p>${data[i].course_name}</p>
            <div class="meta">
            </td>
            <td>
            <div class="organizers">
            <p>${data[i].course_description}</p>
            </div>
            </td>
            <td>
            <div class="categories">
            <p>${data[i].Students_Enrolled.length}</p>
            </div>
            </td>
          
            </div>`
            count=count+1
        }
    })
})}
