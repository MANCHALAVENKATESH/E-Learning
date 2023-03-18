function Instructor(){
    var obj = {
      Email: document.getElementById("iemail").value,
      Password: document.getElementById("ipassword").value
    }
    console.log(obj)
    data = JSON.stringify(obj)
    $.ajax({
      "method": "POST", contentType: "application/json", "data": data, "url": "http://localhost:9999/Instructor/login",
      "success": (e) => {
        alert("Successfully loggedin")
        window.localStorage.setItem("Ins",obj.Email)
        location.href="Instructor_index.html"
    }, error:(e) => {alert("Wrong Id of Password")}
    })
    }
