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

function desplegarSolicitudes(){
    let res = document.getElementById("abrirSolicitudes");
    res.innerHTML=`
    <img class="iconMas" src="images/iconMas.png" >
    <div class="crearSolicitudText">Crear solictud</div>
    <div class="eliminarText">Eliminar</div>
    <div class="modificarText">Modificar</div>
    
    <div class="cuadroDescripcion1"></div>
    <div class="cuadroEstado1"></div>
    <div class="cuadroFecha1"></div>
    <div class="cuadroSeleccionar1"></div>
    <input type="checkbox" value="1"id="check1" class="circuloSelect" onclick="valorCheck()";>
    <div class="descripcionTextEdit">${datos.Solicitudes[0].Descripcion}</div>
    <div class="estadoTextEdit">${datos.Solicitudes[0].Estado}</div>
    <div class="fechaTextEdit">${datos.Solicitudes[0].FechaSolicitud}</div>

    <div class="cuadroDescripcion2"></div>
    <div class="cuadroEstado2"></div>
    <div class="cuadroFecha2"></div>
    <div class="cuadroSeleccionar2"></div>
    <input type="checkbox" value="2" id="check2" class="circuloSelect2" onclick="valorCheck();">
    <div class="descripcionTextEdit2">${datos.Solicitudes[1].Descripcion}</div>
    <div class="estadoTextEdit2">${datos.Solicitudes[1].Estado}</div>
    <div class="fechaTextEdit2">${datos.Solicitudes[1].FechaSolicitud}</div>


    <div class="cuadroDescripcion"></div>
    <div class="cuadroEstado"></div>
    <div class="cuadroFecha"></div>
    <div class="cuadroSeleccionar"></div>
    <div class="descripcionText">Descripcion</div>
    <div class="estadoText">Estado</div>
    <div class="fechaText">Fecha</div>
    
    <img class="iconMas" src="images/iconMas.png" >
    <a href=""><div class="crearSolicitudText">Crear solictud</div></a>
    <a href=""><div class="eliminarText">Eliminar</div></a>
    <a href=""><div class="modificarText">Modificar</div></a>
    `;

    var usuarios = document.getElementById("desSolicitudes");
    usuarios.value = "";
}

var bit= 0;

function valorCheck(){ 
    var check1 = document.getElementById("check1");
    var check2 = document.getElementById("check2");
    var check3 = document.getElementById("check3");

    if(check1.checked == true){
        check2.checked == false;
        check2.checked == false;

    }else if(check2.checked == true){
        check1.checked == false;
        check3.checked == false;
    }else{
        check1.checked == false;
        check2.checked == false;
    }
}
