/* Texto del JSON*/
var xhttp = new XMLHttpRequest();
let datos;

xhttp.open("GET","https://my-json-server.typicode.com/kevinmatias120/users/db", true);
xhttp.send();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        /*usamos los datos del archivo json*/
        datos = JSON.parse(this.responseText);
        /*console.log(datos);*/
    }
}

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

var contador = 0;

function desplegarUsuarios(){
    let res = document.getElementById("abrirUsuarios");
    res.innerHTML=`

    <img class="iconMas" src="images/iconMas.png" >

    <div class="cuadroNombre"></div>
    <div class="cuadroActivo"></div>
    <div class="cuadroAvatar"></div>
    <div class="cuadroSeleccionar"></div>
    <div class="nombreText">Nombre</div>
    <div class="activoText">Activo</div>
    <div class="avatarText">Avatar</div>

    <div id="cuadro1">
        <div class="cuadroSeleccionar1"></div>
        <input type="checkbox" id="check1" class="circuloSelect" onclick="valorCheck1(this);">
        <div class="cuadroNombre1"></div>
        <div class="cuadroActivo1"></div>
        <div class="cuadroAvatar1"></div>
        <div class="nombreTextEdit">${datos.Usuarios[0].Nombre}</div>
        <div class="activoTextEdit">${datos.Usuarios[0].Activo}</div>
        <img class="avatarTextEdit" src="${datos.Usuarios[0].Avatar} ">
    </div>

    <div id="cuadro2">
        <div class="cuadroSeleccionar2"></div>
        <input type="checkbox" id="check2" class="circuloSelect2" onclick="valorCheck2(this);">
        <div class="cuadroNombre2"></div>
        <div class="cuadroActivo2"></div>
        <div class="cuadroAvatar2"></div>
        <div class="nombreTextEdit2">${datos.Usuarios[1].Nombre}</div>
        <div class="activoTextEdit2">${datos.Usuarios[1].Activo}</div>
        <img class="avatarTextEdit2" src="${datos.Usuarios[1].Avatar} ">
    </div>

    <div id="cuadro3">
        <div class="cuadroSeleccionar3"></div>
        <input type="checkbox" id ="check3" class="circuloSelect3" onclick="valorCheck3(this);">
        <div class="cuadroNombre3"></div>
        <div class="cuadroActivo3"></div>
        <div class="cuadroAvatar3"></div>
        <div class="nombreTextEdit3">${datos.Usuarios[2].Nombre}</div>
        <div class="activoTextEdit3">${datos.Usuarios[2].Activo}</div>
        <img class="avatarTextEdit3" src="${datos.Usuarios[2].Avatar} ">
    </div>

    <input type="button" class="crearUsuarioText" onclick="crearUsuario();" value="Crear Usuario">

    `;

    var usuarios = document.getElementById("desplegarUsuarios");
    usuarios.value = "";
}



function valorCheck1(sujeto){
    var funcion = document.getElementById("funciones");

    if(sujeto.checked){
        funcion.innerHTML=`
        <input type="button" class="eliminarText" value="Eliminar" onclick="eliminar(1);">
        <input type="button" class="modificarText" value="Modificar" onclick="modificar(1);">
        `;
        var check1=document.getElementById("check2").checked = false; 
        var check1=document.getElementById("check3").checked = false; 
    }else{
        funcion.innerHTML='';
    }
    
}

function valorCheck2(sujeto){
    var funcion = document.getElementById("funciones");

    if(sujeto.checked){
        funcion.innerHTML=`
        <input type="button" class="eliminarText" value="Eliminar" onclick="eliminar(2);">
        <input type="button" class="modificarText" value="Modificar" onclick="modificar(2);">
        `;
        var check1=document.getElementById("check1").checked = false; 
        var check1=document.getElementById("check3").checked = false; 
    }else{
        funcion.innerHTML='';
    }
}

function valorCheck3(sujeto){
    var funcion = document.getElementById("funciones");

    if(sujeto.checked){
        funcion.innerHTML=`
        <input type="button" class="eliminarText" value="Eliminar" onclick="eliminar(3);">
        <input type="button" class="modificarText" value="Modificar" onclick="modificar(3);">
        `;
        var check1=document.getElementById("check1").checked = false; 
        var check1=document.getElementById("check2").checked = false; 
    }else{
        funcion.innerHTML='';
    }
}

function eliminar(numero){
    var funcion = document.getElementById("funciones");
    var cuadro = document.getElementById(`cuadro${numero}`);

    funcion.innerHTML="";
    cuadro.innerHTML="";

    contador++;
    if(contador == 3){
        location.href =`${html.Redireccion[2].NoHayUsuario}`;
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

function crearUsuario(){
    location.href =`${html.Redireccion[2].CrearNuevoUsuario}`;
}

function modificar(numero){
    var userActual = `user${numero}`;

    if(userActual == "user1"){
        location.href =`${html.Redireccion[2].Usuario1}`;
    }else if(userActual == "user2"){
        location.href =`${html.Redireccion[2].Usuario2}`;
    }else{
        location.href =`${html.Redireccion[2].Usuario3}`;
    }

}