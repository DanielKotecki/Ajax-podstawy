var xhr=new XMLHttpRequest();
//console.log(xhr.readyState);
 xhr.open("GET","Plik_1.html",true);//Otwieramy połączenie
// console.log(xhr.readyState);//Status
 xhr.onreadystatechange=function(e){
     console.log(this.readyState);
     if(this.readyState==4 && this.status==200){
     console.log(this.response);
        }
 };
function logType(e) {
    console.log(e.type);
};
 xhr.send(null);//wysyłamy




























