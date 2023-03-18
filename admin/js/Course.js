function Add_Course(){
    var Course=$('#Course').val();
    var desc = $('#desc').val();
    var Course_Img = $('#Course_Img').val();
    var Course_Category = $('#Course_Category').val()
    console.log(typeof Course)
    var state = "Pending"
    var obj = {
        Course_Name:Course,
        Course_Description:desc,
        Course_Img:Course_Img,
        category_name:Course_Category,
        State:state
    }
    let ins=JSON.stringify(obj);
    $.ajax({
        "method":"POST",contentType:"application/json",'data':ins,'url':'http://127.0.0.1:9999/AddCourses',
      "success":(e)=>{alert("sucessfully added")},error:(e)=>{alert(e)}
    });

}
get_Courses()
function get_Courses(){
    $.get("http://127.0.0.1:9999/get_Courses",function(data,status){
        for(let i=0;i<data.length;i++){
            document.querySelector('#adding').innerHTML+=`
            <div class="col-lg-6">
                                        <div class="au-card m-b-30">
                                            <div class="au-card-inner">
                                                <h3 class="title-2 m-b-40">${data[i].Course_Name}</h3>
                                                <p class="card-text">${data[i].Course_Description}</p>
                                                <p class="card-text">${data[i].category_name}</p>
                                            </div>
                                        </div>`
        }
        console.log('one done')
    })
}