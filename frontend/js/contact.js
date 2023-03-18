let buttons = document.getElementById('submit-button');
buttons.addEventListener('click',clicks);


function clicks(){

let names = document.getElementById('name').value;
let emails = document.getElementById('email').value;
let messages = document.getElementById('message').value;
let subjects = document.getElementById('subject').value;


data = {
    name:names,
    email:emails,
    message:messages,
    subject:subjects
}

$.ajax({
    "method":"POST",contentType:"application/json",'data':JSON.stringify(data),'url':'http://localhost:9999/query/insert',
  "success":(e)=>{console.log("added")},error:(e)=>{alert(e)}
});
alert("Query sucessfully added")
}




