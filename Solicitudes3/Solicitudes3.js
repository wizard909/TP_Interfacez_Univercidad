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
    <a href="";" ><div class="crearSolicitudText">Crear solictud</div></a>
    `;

    var usuarios = document.getElementById("miSolicitud");
    usuarios.value = "";
}

function valorCheck1(sujeto){
    var funcion = document.getElementById("funciones");

    if(sujeto.checked){
        funcion.innerHTML=`
        <input type="button" class="eliminarText" value="Eliminar" onclick="eliminar(1);">
        <a href=""><div class="modificarText">Modificar</div></a>
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
    var cuadro = document.getElementById(`solicitud${numero}`);

    funcion.innerHTML="";
    cuadro.innerHTML="";

    contador++;
    if(contador == 3){
        /*otra pagina*/
    }
}