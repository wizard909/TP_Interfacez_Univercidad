/* Texto del JSON*/
var xhttp = new XMLHttpRequest();
let datos;

xhttp.open("GET","https://my-json-server.typicode.com/kevinmatias120/mockjson/db", true);
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

function darSolicitud(){
    let res = document.getElementById("solicitudes");
    res.innerHTML=`
    <img class="iconMas" src="images/iconMas.png" >
    <div class="crearSolicitudText">Crear solictud</div>

    <div id="solicitud1" >
        <div class="cuadroDescripcion1"></div>
        <div class="cuadroEstado1"></div>
        <div class="cuadroFecha1"></div>
        <div class="cuadroSeleccionar1"></div>
        <input type="checkbox" value="1"id="check1" class="circuloSelect" onclick="valorCheck1(this)";>
        <div class="descripcionTextEdit">${datos.Solicitudes[0].Descripcion}</div>
        <div class="estadoTextEdit">${datos.Solicitudes[0].Estado}</div>
        <div class="fechaTextEdit">${datos.Solicitudes[0].FechaSolicitud}</div>
    </div>

    <div id="solicitud2">
        <div class="cuadroDescripcion2"></div>
        <div class="cuadroEstado2"></div>
        <div class="cuadroFecha2"></div>
        <div class="cuadroSeleccionar2"></div>
        <input type="checkbox" value="2" id="check2" class="circuloSelect2" onclick="valorCheck2(this);">
        <div class="descripcionTextEdit2">${datos.Solicitudes[1].Descripcion}</div>
        <div class="estadoTextEdit2">${datos.Solicitudes[1].Estado}</div>
        <div class="fechaTextEdit2">${datos.Solicitudes[1].FechaSolicitud}</div>
    </div>

    <div id="solicitud3">
        <div class="cuadroDescripcion3"></div>
        <div class="cuadroEstado3"></div>
        <div class="cuadroFecha3"></div>
        <div class="cuadroSeleccionar3"></div>
        <input type="checkbox" id="check3" class="circuloSelect3" onclick="valorCheck3(this);">
        <div class="descripcionTextEdit3">${datos.Solicitudes[2].Descripcion}</div>
        <div class="estadoTextEdit3">${datos.Solicitudes[2].Estado}</div>
        <div class="fechaTextEdit3">${datos.Solicitudes[2].FechaSolicitud}</div>
    </div>

    <div class="cuadroDescripcion"></div>
    <div class="cuadroEstado"></div>
    <div class="cuadroFecha"></div>
    <div class="cuadroSeleccionar"></div>
    <div class="descripcionText">Descripcion</div>
    <div class="estadoText">Estado</div>
    <div class="fechaText">Fecha</div>
    
    <img class="iconMas" src="images/iconMas.png" >
    <input type="button" class="crearSolicitudText" value="Crear Solicitud" onclick="crearSolicitud();">
    `;

    var usuarios = document.getElementById("miSolicitud");
    usuarios.value = "";
}

function valorCheck1(sujeto){
    var funcion = document.getElementById("funciones");

    if(sujeto.checked){
        funcion.innerHTML=`
        <input type="button" class="eliminarText" value="Eliminar" onclick="eliminar(1);">
        <input type="button" class="ModificarText" value="Modificar" onclick="modificar(1);">
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
        <input type="button" class="ModificarText" value="Modificar" onclick="modificar(2);">
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
        <input type="button" class="ModificarText" value="Modificar" onclick="modificar(3);">
        `;
        var check1=document.getElementById("check1").checked = false; 
        var check1=document.getElementById("check2").checked = false; 
    }else{
        funcion.innerHTML='';
    }
}

function eliminar(numero){
    var funcion = document.getElementById("funciones");
    var cuadro = document.getElementById(`solicitud${numero}`);

    funcion.innerHTML="";
    cuadro.innerHTML="";

    contador++;
    if(contador == 3){
        location.href =`${html.Redireccion[0].NoHaySolicitudes}`;
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

function modificar(numero){
    var solActual = `sol${numero}`;

    if(solActual == "sol1"){
        location.href =`${html.Redireccion[0].Solicitud1}`;
    }else if(solActual == "sol2"){
        location.href =`${html.Redireccion[0].Solicitud2}`;
    }else{
        location.href =`${html.Redireccion[0].Solicitud3}`;
    }

}

function crearSolicitud(){
    location.href =`${html.Redireccion[0].NuevoSolicitud}`;
}
