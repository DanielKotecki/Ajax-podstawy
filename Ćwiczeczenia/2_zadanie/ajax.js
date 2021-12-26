var przycisk=document.querySelector("#przeladuj");

function prze() {
    var xhr =new XMLHttpRequest();

    xhr.open("GET","plik.html",true);
    xhr.onreadystatechange=function (e) {
        if (this.readyState===4 && this.status===200) {
            document.write(this.response);
            
        }
    
    }
    xhr.send(null);  


}

przycisk.addEventListener("click",prze,false);

