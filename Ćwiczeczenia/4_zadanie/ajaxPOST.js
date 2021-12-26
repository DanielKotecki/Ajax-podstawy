

function ajaxPOST() {   
var xhr= new XMLHttpRequest();
var data=new FormData();
var firstName1=document.querySelector("#firstName").value;
var lastName1=document.querySelector("#lastName").value;
var age1=document.querySelector("#age").value;
var btn=document.querySelector("#btn");
function person(fN,lN,aG) {
    this.firstName=fN;
    this.lastName=lN;
    this.age=aG;
}

var person=new person(firstName1,lastName1,age1);    
var test=JSON.stringify(person,null,4);
xhr.open("POST","odbierz.php",true);
xhr.onreadystatechange=function (e) {
if (this.readyState===4 && this.status===200) {
        console.log(xhr.response);
   }


    }
data.append("send",test);
xhr.send(data);
}
btn.addEventListener("click",ajaxPOST,false);


