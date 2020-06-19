// TEXTO JSON REDIRECCION//
/* Texto del JSON*/
var xhttp = new XMLHttpRequest();
let datos;

xhttp.open("GET","https://my-json-server.typicode.com/kevinmatias120/linkTest/db", true);
xhttp.send();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        /*usamos los datos del archivo json*/
        datos = JSON.parse(this.responseText);
        /*console.log(datos);*/
    }
}


function inicio(){
    console.log("inicio");
    location.href="https://www.google.com.ar/";
}

function misSolicitudes(){
    console.log("soolicittudes");
    location.href="";
}

function usuarios(){
    console.log("usuarios");
    location.href="";
}

function crearSolicitudes(){
    console.log("crear");
    location.href="";
}

function salir(){
    console.log("salir");
    location.href="";
}