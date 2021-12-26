var person={
    firstName:"Janusz",
    lastName:"Nowak",
    wiek:21,
    adres:"Kościan"
};
var xhr=new XMLHttpRequest();
var data= new FormData();
xhr.open("POST","odbierz.php",true);
xhr.onreadystatechange=function (e) {
    if (this.readyState===4 && this.status===200) {
        console.log(this.response);
        
    }
};
var newString=JSON.stringify(person,null,4);
data.append("Person",newString);
xhr.send(data);

//jesli przysyłamy dane bez Formdata musimy dodać content type nagłówek
   // xhr.setRequestHeader("Content-Type","link to co mamy w przegladarce")