//TEXTO JSON USUARIOS//
var xhttp = new XMLHttpRequest();
let datos;

xhttp.open("GET","https://my-json-server.typicode.com/kevinmatias120/users/db", true);
xhttp.send();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        /*usamos los datos del archivo json*/
        console.log(this.responseText);
        datos = JSON.parse(this.responseText);
        /*console.log(datos);
        console.log(datos.Solicitudes[0]);*/
    }
}

function login(){
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if(usuario == `${datos.Usuarios[0].Nombre}` && password == `${datos.Usuarios[0].Contrasenia}`){
        console.log("usuario1");
    }else if(usuario == `${datos.Usuarios[1].Nombre}` && password == `${datos.Usuarios[1].Contrasenia}`){
        console.log("usuario2");
    }else if(usuario == `${datos.Usuarios[2].Nombre}` && password == `${datos.Usuarios[2].Contrasenia}`){
        console.log("usuario3");
    }else{
        console.log("no hay usuario");
    }

}

function vaciarUsuario(){
    var tipo = document.getElementById("usuario");
    if(tipo.value == "Usuario"){
        tipo.value = "";
    }
}

function vaciarContrasena(){
    var tipo = document.getElementById("password");
    if(tipo.type == "text"){
        tipo.type = "password";
        tipo.value= "";
    }
}