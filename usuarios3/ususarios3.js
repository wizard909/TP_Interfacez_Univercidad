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

function desplegarUsuarios(){
    let res = document.getElementById("abrirUsuarios");
    res.innerHTML=`

    <img class="iconMas" src="images/iconMas.png" >
    <div class="crearUsuarioText">Crear usuario</div>
    <div class="eliminarText">Eliminar</div>
    <div class="modificarText">Modificar</div>

    <div class="cuadroNombre"></div>
    <div class="cuadroActivo"></div>
    <div class="cuadroAvatar"></div>
    <div class="cuadroSeleccionar"></div>
    <div class="nombreText">Nombre</div>
    <div class="activoText">Activo</div>
    <div class="avatarText">Avatar</div>

    <div id="cuadro1">
        <div class="cuadroSeleccionar1"></div>
        <input type="checkbox" value="1"id="check1" class="circuloSelect" onclick="valorCheck()";>
        <div class="cuadroNombre1"></div>
        <div class="cuadroActivo1"></div>
        <div class="cuadroAvatar1"></div>
        <div class="nombreTextEdit">${datos.Usuarios[0].Nombre}</div>
        <div class="activoTextEdit">${datos.Usuarios[0].Activo}</div>
        <img class="avatarTextEdit" src="${datos.Usuarios[0].Avatar} ">
    </div>

    <div id="cuadro2">
        <div class="cuadroSeleccionar2"></div>
        <input type="checkbox" value="2" id="check2" class="circuloSelect2" onclick="valorCheck();">
        <div class="cuadroNombre2"></div>
        <div class="cuadroActivo2"></div>
        <div class="cuadroAvatar2"></div>
        <div class="nombreTextEdit2">${datos.Usuarios[1].Nombre}</div>
        <div class="activoTextEdit2">${datos.Usuarios[1].Activo}</div>
        <img class="avatarTextEdit2" src="${datos.Usuarios[1].Avatar} ">
    </div>

    <div id="cuadro3">
        <div class="cuadroSeleccionar3"></div>
        <input type="checkbox" value="3" id ="check3" class="circuloSelect3" onclick="valorCheck();">
        <div class="cuadroNombre3"></div>
        <div class="cuadroActivo3"></div>
        <div class="cuadroAvatar3"></div>
        <div class="nombreTextEdit3">${datos.Usuarios[2].Nombre}</div>
        <div class="activoTextEdit3">${datos.Usuarios[2].Activo}</div>
        <img class="avatarTextEdit3" src="${datos.Usuarios[2].Avatar} ">
    </div>
    `;

    var usuarios = document.getElementById("desplegarUsuarios");
    usuarios.value = "";
}

var bit= 0;

