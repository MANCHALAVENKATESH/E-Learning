
function ShowIns(){
    var Ins_Email=$('#Ins_Email').val()
    var obj={Email:Ins_Email}
    $.ajax({
        "method":"POST",contentType:"application/json",'data':JSON.stringify({Email:Ins_Email}),'url':'http://127.0.0.1:9999/getInstructorInfoA',
      "success":function(data,status){
        for(i=0;i<data.length;i++){
        document.querySelector('#table').innerHTML+=`<tbody>
        <tr>
          <td>${data[i].Course_Name}</td>
          <td>
            <label class="badge badge-gradient-success">${data[i].Course_Description}</label>
          </td>
          <td>${data[i].Students_Enrolled}</td>
          <td>${data[i].Course_Category}</td>
        </tr>
        
      </tbody>`
        }

      },error:(e)=>{alert(e)}
    });
}