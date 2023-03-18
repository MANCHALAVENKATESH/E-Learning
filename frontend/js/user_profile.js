console.log("Done")

var user_email = window.localStorage.getItem('k')
console.log("UserEmail",user_email)
console.log(typeof user_email)

let roll=window.localStorage.getItem('ROLL')
if (roll!='Instructor'){
    document.getElementById("instructorButton").className="instructorButton intro";
}
if(roll=='Instructor'){
    document.getElementById("requestButton").className="instructorButton intro";
}

$.get("http://127.0.0.1:9999/userProfile/"+user_email, function(data, status){
    console.log(data)
    console.log(data[0].userName)
    let main_name = document.getElementById("main_name")
    let main_name2 = document.getElementById("left-uname")
    main_name.innerHTML =data[0].userName
    main_name2.innerHTML =data[0].userName
    let main_email = document.getElementById("main_email")
    main_email.innerHTML =data[0].email
    console.log(data[0].phone)
    
    let phone = document.getElementById("phone")
    phone.innerHTML=data[0].phone
    let add = document.getElementById("address")
    add.innerHTML=data[0].address
    // let add1 = document.getElementById("adress")
    // add1.innerHTML=data[0].address
    let Courses_enrolled = document.getElementById("courses")
    for (i=0;i<data[0].coursesEnrolled.length;i++){
    Courses_enrolled.innerHTML = Courses_enrolled.innerHTML+"::"+data[0].coursesEnrolled[i].name}
    
    for (i=0;i<data[0].coursesEnrolled.length;i++){
    document.querySelector('#progress').innerHTML+=`<small>${data[0].coursesEnrolled[i].name}</small>
    <div class="progress mb-3" style="height: 5px">
    <div class="progress-bar bg-primary" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    </div>`}
})