const p= new XMLHttpRequest();
p.open("GET","https://reqres.in/api/users?page=2");
p.onload=function(){
    dt=JSON.parse(p.responseText);
    for(let i = 0; i < dt.data.length; i++){
        document.querySelector('#add_user').innerHTML+=`<tr class="tr-shadow">
        
        <td id="fname">${dt.data[i].first_name}</td>
        <td>
            <span class="block-email" id="email">${dt.data[i].email}</span>
        </td>
        <td class="desc" id="phone">${dt.data[i].id}238476${dt.data[i].id}</td>
        
        <td>
            <span class="status--process" id="address"></span>
        </td>
        <td>DarwinBox</td>
        <td>
            <div class="table-data-feature">
                <button class="item" data-toggle="tooltip" data-placement="top" title="Send">
                    <i class="zmdi zmdi-mail-send"></i>
                </button>
                <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                    <i class="zmdi zmdi-edit"></i>
                </button>
                <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                    <i class="zmdi zmdi-delete"></i>
                </button>
                <button class="item" data-toggle="tooltip" data-placement="top" title="More">
                    <i class="zmdi zmdi-more"></i>
                </button>
            </div>
        </td>
    </tr>`
    }
};


p.send();

document.getElementById("extra").onclick = post_req;
function post_req(){ 
data ={
        email:"Priyanshu chaudhary",
        pass:"Hello"
    }
    data=JSON.stringify(data)
    p.open("POST", "https://reqres.in/api/users")
    p.setRequestHeader("content-type", 'application/Json')
    p.send(data)
    p.onload = function(){
        console.log(data)
    }
    alert("Data Sent successfully")
}
let ar2=[]
if(localStorage.getItem("usd")) ar2=JSON.parse(localStorage.getItem("usd"))
for(let {fname,lname,email,username,phone,address} of ar2)
{
    document.querySelector('#add_user').innerHTML+=`<tr class="tr-shadow">
                                    
                                    <td id="fname">${fname}</td>
                                    <td>
                                        <span class="block-email" id="email">${email}</span>
                                    </td>
                                    <td class="desc" id="phone">${phone}</td>
                                    
                                    <td>
                                        <span class="status--process" id="address"></span>
                                    </td>
                                    <td>${address}</td>
                                    <td>
                                        <div class="table-data-feature">
                                            <button class="item" data-toggle="tooltip" data-placement="top" title="Send">
                                                <i class="zmdi zmdi-mail-send"></i>
                                            </button>
                                            <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                                <i class="zmdi zmdi-edit"></i>
                                            </button>
                                            <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                <i class="zmdi zmdi-delete"></i>
                                            </button>
                                            <button class="item" data-toggle="tooltip" data-placement="top" title="More">
                                                <i class="zmdi zmdi-more"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>`}



