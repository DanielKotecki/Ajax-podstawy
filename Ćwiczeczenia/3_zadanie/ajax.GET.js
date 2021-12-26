var xhr=new XMLHttpRequest();
var btn=document.querySelector("#btn");
function ajax() {
    xhr.open("GET","2_plik.html",true);
    xhr.onreadystatechange=function(e) {
        if (this.readyState===4 && this.status===200) {
            document.write(xhr.response);
            
        }
        
    }
    xhr.send();
}
btn.addEventListener("click",ajax,false);