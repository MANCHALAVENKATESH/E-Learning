// var btn = document.getElementById("signup-button")


// function post_req2(){
// $.ajax({
//     type: "POST",
//     url: "http://localhost:9999/registerUser",
//     data:     {
//         "User_Name": "name",
//         "Email": "email",
//         "Password": "password"
//       },
//     success: console.log("Successfully registered"),
//   });
// }


function login_req2(){
  var obj = {
    Email: document.getElementById("lemail").value,
    Password: document.getElementById("lpassword").value
  }
  
  if(obj.Email=="admin@gmail.com" && obj.Password=="admin"){
    location.href="/admin/index.html"
  }else{
  data = JSON.stringify(obj)
  $.ajax({
    "method": "POST", contentType: "application/json", "data": data, "url": "http://localhost:9999/registerUser/login",
    "success": (e) => {
      // alert("Successfully loggedin")
      window.localStorage.setItem("k",obj.Email)
      location.href="index.html"
  }, error:(e)=>{alert("Wrong Id of Password")
  location.reload()}
  })
  }}
  
  
  function post_req(){
    var data = {
      User_Name: document.getElementById("uname").value,
      Email: document.getElementById("uemail").value,
      Password: document.getElementById("password").value,
      Status:"offline"
    }
    console.log(data)
    data = JSON.stringify(data)
    $.ajax({
      "method": "POST", contentType: "application/json", "data": data, "url": "http://localhost:9999/registerUser",
      "success": (e) => {
        alert("Successfully registered")
        // location.href="index.html"
    }, error:(e) => {alert(e)}
  });
  }
  