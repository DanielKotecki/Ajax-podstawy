/*

AJAX({
    type: "POST",
    url: "odbierz.php",
    data: {
        firstName: "Piotr",
        lastName: "Kowalski"
    },
    headers: {
        "X-My-Header": "123#asdf"
    },
    success: function(response, xhr) {
        console.log("Udało się! Status: " + xhr.status);
    },
    failure: function(xhr) {
        console.log("Wystąpił błąd. Status: " + xhr.status);
    }
});

 */

function AJAX(config) {
    if(!(this instanceof AJAX))
    {return new AJAX(config);}
    this._xhr=new XMLHttpRequest();
    this._config=this._extendOption(config);
    this._addevent();
    this._Open();
    this._UserHeaders();
    this._send();
};
AJAX.prototype._extendOption=function(config){
    var defaultConfig=JSON.parse(JSON.stringify(this._defaultConfig));

    for(var key in defaultConfig)
    {
        if(key in config)
        {
           defaultConfig[key]=config[key];
        }
        
    }
    return defaultConfig;
};
//ustawienia domyślene
AJAX.prototype._defaultConfig={
    type:"GET",
    url:window.location.href,
    data:{},
    options:{
        async:true,
        timeout:0,
        username:null,
        password:null
    },
    headers:{},
};
AJAX.prototype._UserHeaders=function(){
 if(Object.keys(this._config.headers).length)
    {
        for(var key in this._config.headers) {
            this._xhr.setRequestHeader(key, this._config.headers[key]);
        }
    }
 
};
AJAX.prototype._Open=function(){

    this._xhr.open(
        this._config.type,
        this._config.url,
        this._config.options.async,
        this._config.options.username,
        this._config.options.password
    );

    this._xhr.timeout = this._config.options.timeout;

};
AJAX.prototype._send=function(){
 this._xhr.send();
};
AJAX.prototype._Response=function(e){
    if(this._xhr.readyState === 4 && this._xhr.status === 200) {
        console.log("Otrzymano odpowiedź");
    }
}
AJAX.prototype._Error=function(e){
    
}
AJAX.prototype._addevent=function(){
    this._xhr.addEventListener("readystatechange", this._Response.bind(this), false);
    this._xhr.addEventListener("abort", this._Error.bind(this), false);
    this._xhr.addEventListener("error", this._Error.bind(this), false);
    this._xhr.addEventListener("timeout", this._Error.bind(this), false);
}
//wywołanie
AJAX({
    type: "POST",
    url: "odbierz.php",
    data: {
        firstName: "Piotr",
        lastName: "Kowalski"
    },
    headers: {
        "X-My-Header": "123#asdf"
    },
    success: function(response, xhr) {
        console.log("Udało się! Status: " + xhr.status);
    },
    failure: function(xhr) {
        console.log("Wystąpił błąd. Status: " + xhr.status);
    }
});

















