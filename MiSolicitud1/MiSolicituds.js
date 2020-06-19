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

function seleccionarSolicitud(numero){
    let res = document.getElementById("solicitud");
    res.innerHTML=`
    <div class="cuadroDescripcion1"></div>
    <div class="cuadroEstado1"></div>
    <div class="cuadroFecha1"></div>
    <div class="cuadroSeleccionar1"></div>
    <textarea class="descripcionTextEdit" name="" id="" cols="30" rows="10" maxlength="100" >${datos.Solicitudes[numero].Descripcion}</textarea>
    <div class="estadoTextEdit">
        <p id="estados" ></p>
    </div>
    <input type="date" class="fechaTextEdit" name="fecha" min="1900-01-01" max="3000-12-31" value="${datos.Solicitudes[numero].FechaSolicitud}"></input>

    <div class="cuadroDescripcion"></div>
    <div class="cuadroEstado"></div>
    <div class="cuadroFecha"></div>
    <div class="cuadroSeleccionar"></div>
    <div class="descripcionText">Descripcion</div>
    <div class="estadoText">Estado</div>
    <div class="fechaText">Fecha</div>

    <input type="button" class="guardarText" onclick="guardar();" value="Guardar">
    <input type="button" class="cancelarText" onclick="cancelar();" value="Cancelar"></input>
    
    `; 
    seleccionEstado(datos.Solicitudes[numero].Estado);
    
}

function seleccionEstado(estado){
    let res = document.getElementById("estados");
    res.innerHTML='';

    if(estado == "Abierta"){
        res.innerHTML+=`
        <select name="Estados" id="">
            <option value="">Abierto</option>
            <option value="">En progreso</option>
            <option value="">Cerrado</option>
        </select> 
        `;
    }else if(estado == "En progreso"){
        res.innerHTML+=`
        <select name="Estados" id="">
            <option value="">En progreso</option>
            <option value="">Cerrado</option>
            <option value="">Abierto</option>
        </select> 
        `;
    }else{
        res.innerHTML+=`
        <select name="Estados" id="">
            <option value="">Cerrado</option>
            <option value="">Abierto</option>
            <option value="">En progreso</option>
        </select> 
        `;
    }

}


function inicio(){
    console.log("a");
}

function misSolicitudes(){
    console.log("a");
}

function usuarios(){
    console.log("a");   
}

function salir(){
    console.log("a");
}

function guardar(){
    console.log("a");
}

function cancelar(){
    console.log("a");
}