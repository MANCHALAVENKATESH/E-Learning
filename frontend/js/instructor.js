localStorage.setItem('links', JSON.stringify([]));


function addInstructor(){
    var email = localStorage.getItem('k');
    var Message = $('#Message').val();

   var Linked=$('#Linked').val()
   
    
        // var tempFile = $("#File")
        var tempFile = document.getElementById("File")
        
        console.log(tempFile.files[0]);
        
        let formData = new FormData(); 
        formData.append("file", tempFile.files[0]);
        formData.append("email", email);
        formData.append("Message", Message);
        formData.append("Linked", Linked);
        console.log(formData.Message)
        for (var pair of formData.entries()) {
            console.log(pair[0]+ '-,-' + pair[1]); 
        }
        $.ajax({
                method:"POST",
                contentType:false,
                processData : false,
                data:formData,
                url:'http://127.0.0.1:9999/a/instructorUpdate',
                success:(e)=>{
                    alert("sucessfully added")
                },
                error:(e)=>{
                    alert(e)
                }
            });
        // alert('The file has been uploaded successfully.');
        // }
    //console.log(obj)
    // let ins=JSON.stringify(obj);
    // $.ajax({
    //     "method":"POST",contentType:"application/json",'data':ins,'url':'http://127.0.0.1:9999/a/instructorUpdate',
    //   "success":(e)=>{alert("sucessfully added")},error:(e)=>{alert(e)}
    // });

}

function Show(){
    var Ins_Email=localStorage.getItem('k');
    var obj={email:Ins_Email}
    console.log("400")
    console.log(obj)
    //alert(Ins_Email)
    // $.post('http://127.0.0.1:9999/getInstructorInfo/get',obj,(xhr,status,responseText)=>{
    //     alert(responseText.responseText)

    // })
    $.ajax({
        "method":"POST",contentType:"application/json",'data':JSON.stringify({email:Ins_Email}),'url':'http://127.0.0.1:9999/a/status',
      "success":function(e) {
        console.log(e)
        if (e=='Approved'){
            document.querySelector('#showState').innerHTML=`<h6 class="">Your Resume Shortlisted Wait for the Interview Call</h6>`

        }else if (e=='pending'){
            document.querySelector('#showState').innerHTML=`<h6 class="mb-0">Your Profile is in Processing State</h6>`

        }else if(e == 'Declined'){
            document.querySelector('#showState').innerHTML=`<h6 class="mb-0">Your Resume isn't shortlisted Thanks for the Interest better luck for the future</h6>`

        }else{
            document.querySelector('#showState').innerHTML=`<h6 class="mb-0">Submit the Application to know the status</h6>`
        }
    },error:(e)=>{alert(e)}
    });
}