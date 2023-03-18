// const { json } = require("express");

      const sign_in_btn = document.querySelector("#sign-in-btn");
      const sign_up_btn = document.querySelector("#sign-up-btn");
      const container = document.querySelector(".container");
      
      sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });
      
      sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
      
          

window.onload=function(){
    localStorage.setItem("k",1);
  }
  

  function addUser(){
    if(localStorage.getItem("usd")==null){
      localStorage.setItem("usd",JSON.stringify([]))
    }
    var usda=JSON.parse(localStorage.getItem("usd"));
    var userName=$("#userName").val();
    var email=$("#email").val();
    var phone=$("#phone").val();
    var password=$("#password").val();
    var address=$("#address").val();
    var obj={
      userName:userName,
      email:email,
      phone:phone,
      address:address,
      password:password,
      role:'student'
    }
    usda.push(obj);
    let us=JSON.stringify(obj);
    console.log(us)
    $.ajax({
      "method":"POST",contentType:"application/json",'data':us,'url':'http://localhost:9999/a',
      "success":(e)=>{alert("sucessfully added")},error:(e)=>{alert(e)}
    });
  

    // var dat=JSON.stringify(usd);
    // window.localStorage.setItem(email,dat);
    window.localStorage.setItem("usd",JSON.stringify(usda));
    
    // window.localStorage.setItem("log",);

     window.alert("sign Up Successful");
    var jobj=JSON.stringify(obj);
    window.localStorage.setItem(email,jobj);
    window.localStorage.setItem("k",window.localStorage.getItem(email));
    
    window.location.href="index.html";
  }

  
  function validate(){
            
    var email=$("#user_email").val();
    var password=$("#user_pass2").val();
    let udl={
      email:email,
      password:password
    }
    if(udl.email=="admin@gmail.com" && udl.password=="admin"){
      window.location.href="../admin/index.html";
    }else{
    let login = JSON.stringify(udl);
    $.ajax({
      "method":"POST",contentType:"application/json",'data':login,'url':'http://localhost:9999/a/login',
      "success":function(e){
        if(e){
          // console.log(e.role)
          localStorage.setItem('ROLL',e.role)
          localStorage.setItem("k",email)
          console.log(localStorage.getItem('k'))
          // alert("success")
          // if(localStorage.getItem('ROLL')=='Instructor'){
          //   window.location.href="Instructor_index.html";
          // }else{
           window.location.href="index.html";
        }else{
          alert("wrong credintials")
        }
      },error:(e)=>{
        alert("wrong...")
      }
    })
  }

  }



