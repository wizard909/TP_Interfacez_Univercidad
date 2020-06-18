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

function darSolicitud(){
    let res = document.getElementById("solicitudes");
    res.innerHTML=`
    <img class="iconMas" src="images/iconMas.png" >
    <div class="crearSolicitudText">Crear solictud</div>
    <div class="eliminarText">Eliminar</div>
    <div class="modificarText">Modificar</div>
    
    <div class="cuadroDescripcion1"></div>
    <div class="cuadroEstado1"></div>
    <div class="cuadroFecha1"></div>
    <div class="cuadroSeleccionar1"></div>
    <input type="checkbox" class="circuloSelect" onclick="funcion;">
    <div class="descripcionTextEdit">${datos.Solicitudes[0].Descripcion}</div>
    <div class="estadoTextEdit">${datos.Solicitudes[0].Estado}</div>
    <div class="fechaTextEdit">${datos.Solicitudes[0].FechaSolicitud}</div>

    <div class="cuadroDescripcion2"></div>
    <div class="cuadroEstado2"></div>
    <div class="cuadroFecha2"></div>
    <div class="cuadroSeleccionar2"></div>
    <input type="checkbox" class="circuloSelect2" onclick="funcion;">
    <div class="descripcionTextEdit2">${datos.Solicitudes[1].Descripcion}</div>
    <div class="estadoTextEdit2">${datos.Solicitudes[1].Estado}</div>
    <div class="fechaTextEdit2">${datos.Solicitudes[1].FechaSolicitud}</div>

    <div class="cuadroDescripcion3"></div>
    <div class="cuadroEstado3"></div>
    <div class="cuadroFecha3"></div>
    <div class="cuadroSeleccionar3"></div>
    <input type="checkbox" class="circuloSelect3" onclick="funcion;">
    <div class="descripcionTextEdit3">${datos.Solicitudes[2].Descripcion}</div>
    <div class="estadoTextEdit3">${datos.Solicitudes[2].Estado}</div>
    <div class="fechaTextEdit3">${datos.Solicitudes[2].FechaSolicitud}</div>

    <div class="cuadroDescripcion"></div>
    <div class="cuadroEstado"></div>
    <div class="cuadroFecha"></div>
    <div class="cuadroSeleccionar"></div>
    <div class="descripcionText">Descripcion</div>
    <div class="estadoText">Estado</div>
    <div class="fechaText">Fecha</div>
    
    `;
    var usuarios = document.getElementById("miSolicitud");
    usuarios.value = "";
}
