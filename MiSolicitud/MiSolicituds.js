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

function desplegarMiSolicitud(){
    let res = document.getElementById("abrirMiSolitud");
    res.innerHTML=`
    <div class="cuadroDescripcion1"></div>
        <div class="cuadroEstado1"></div>
        <div class="cuadroFecha1"></div>
        <div class="cuadroSeleccionar1"></div>
        <div class="descripcionTextEdit">Holasdasfa</div>
        <div class="estadoTextEdit">-</div>
        <div class="fechaTextEdit">-</div>
    
        <div class="cuadroDescripcion"></div>
        <div class="cuadroEstado"></div>
        <div class="cuadroFecha"></div>
        <div class="cuadroSeleccionar"></div>
        <div class="descripcionText">Descripcion</div>
        <div class="estadoText">Estado</div>
        <div class="fechaText">Fecha</div>

        <div class="guardarText">Guardar</div>
        <div class="cancelarText">Cancelar</div>
    `;
}
