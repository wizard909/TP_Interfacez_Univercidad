//TEXTO JSON LINKS//
var xhttp = new XMLHttpRequest();
let html;

xhttp.open("GET","https://my-json-server.typicode.com/kevinmatias120/linkTest/db", true);
xhttp.send();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        /*usamos los datos del archivo json*/
        html = JSON.parse(this.responseText);
        /*console.log(datos);
        console.log(datos.Solicitudes[0]);*/
    }
}

function inicio(){
    location.href =`${html.Redireccion[1].Inicio}`;
}

function misSolicitudes(){
    location.href =`${html.Redireccion[1].MisSolicitudes}`;
}

function usuarios(){
    location.href =`${html.Redireccion[1].Usuarios}`;
}

function salir(){
    location.href =`${html.Redireccion[1].Salir}`;
}

function guardar(){
    location.href =`${html.Redireccion[0].Guardar}`;
}

function cancelar(){
    location.href =`${html.Redireccion[0].Cancelar}`;
}
