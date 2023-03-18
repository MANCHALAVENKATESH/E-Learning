$.get('http://localhost:9999/course/kukunuriabhiram.19.it@anits.edu.in',function(data,status){
    console.log(data)

    $(document).ready(function(){
        // $.noConflict();
     $('#users_table').DataTable({
            data:data,
       
            columns:[
                { data : 'course_name',title:'course_name'},
                { data : 'course_description',title:'course_description'},
                
            ],
            // responsive: true
        })

    })
})