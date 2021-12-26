var xhr=new XMLHttpRequest();
var data=new FormData();
xhr.open("POST","odbierz.php",true);
xhr.onreadystatechange=function(e){
if (this.readyState===4 && this.status===200 ) {
    console.log(this.response);
    }
};
data.append("firstName","Daniel");
data.append("lastName","Kotecki");
xhr.send(data);























