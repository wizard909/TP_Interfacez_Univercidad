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

var contador = 0;

function desplegarUsuarios(){
    let res = document.getElementById("abrirUsuarios");
    res.innerHTML=`

    <img class="iconMas" src="images/iconMas.png" >
    <input type="button" class="crearUsuarioText" value="Crear Usuario" onclick="crearUsuario();" >

    <div class="cuadroNombre"></div>
    <div class="cuadroActivo"></div>
    <div class="cuadroAvatar"></div>
    <div class="cuadroSeleccionar"></div>
    <div class="nombreText">Nombre</div>
    <div class="activoText">Activo</div>
    <div class="avatarText">Avatar</div>

    <div id="cuadro1">
        <input type="checkbox" id="check1" class="circuloSelect" onclick="valorCheck1(this)";>
        <div class="cuadroNombre1"></div>
        <div class="cuadroActivo1"></div>
        <div class="cuadroAvatar1"></div>
        <div class="cuadroSeleccionar1"></div>
        <div class="nombreTextEdit">${datos.Usuarios[0].Nombre}</div>
        <div class="activoTextEdit">${datos.Usuarios[0].Activo}</div>
        <img class="avatarTextEdit" src="${datos.Usuarios[0].Avatar} ">
    </div>

    <div id="cuadro2">
        <input type="checkbox" id="check2" class="circuloSelect2" onclick="valorCheck2(this);">
        <div class="cuadroNombre2"></div>
        <div class="cuadroActivo2"></div>
        <div class="cuadroAvatar2"></div>
        <div class="cuadroSeleccionar2"></div>
        <div class="nombreTextEdit2">${datos.Usuarios[1].Nombre}</div>
        <div class="activoTextEdit2">${datos.Usuarios[1].Activo}</div>
        <img class="avatarTextEdit2" src="${datos.Usuarios[1].Avatar} ">
    </div>

    <div id="cuadro3">
        <input type="checkbox" id ="check3" class="circuloSelect3" onclick="valorCheck3(this);">
        <div class="cuadroNombre3"></div>
        <div class="cuadroActivo3"></div>
        <div class="cuadroAvatar3"></div>
        <div class="cuadroSeleccionar3"></div>
        <div class="nombreTextEdit3">${datos.Usuarios[2].Nombre}</div>
        <div class="activoTextEdit3">${datos.Usuarios[2].Activo}</div>
        <img class="avatarTextEdit3" src="${datos.Usuarios[2].Avatar} ">
    </div>
    `;

    var usuarios = document.getElementById("desplegarUsuarios");
    usuarios.value = "";
}

function valorCheck1(sujeto){
    var funcion = document.getElementById("funciones");

    if(sujeto.checked){
        funcion.innerHTML=`
        <input type="button" class="eliminarText" value="Eliminar" onclick="eliminar(1);">
        <input type="button" class="modificarText" value="Modificar" onclick="modificar();">
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
        <a href=""><div class="modificarText">Modificar</div></a>
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
        <a href=""><div class="modificarText">Modificar</div></a>
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
        /*otra pagina*/
    }
}



function inicio() {
    
}

function misSolicitudes() {
    
}

function usuarios() {
    
}

function salir() {
    
}

function modificar(){

}
