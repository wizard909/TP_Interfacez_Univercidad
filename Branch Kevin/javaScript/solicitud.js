
var xhttp = new XMLHttpRequest();
let datos;

xhttp.open("GET","https://my-json-server.typicode.com/kevinmatias120/mockjson/db", true);
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
function obtenerValor(){
    var select=document.getElementById("select");
    var value= select.value;
    selecionarSolicitud(value);
}


function selecionarSolicitud(numero){
    let res = document.getElementById("step1");
    res.innerHTML=`
    <label for="">Fecha</label>
    <input type="date" name="fecha" min="1900-01-01" max="3000-12-31" value="${datos.Solicitudes[numero].FechaSolicitud}"></input>
    <br>
    <label for="">Descripcion</label>
    <br>
    <textarea name="" id="" cols="30" rows="10" maxlength="100" >${datos.Solicitudes[numero].Descripcion}</textarea>
    <br>
    <label for="">Estado</label>
    <p id="next" ></p>
    <button>Guardar</button>
    <button>Cancelar</button>
    `;
    selecionEstado(datos.Solicitudes[numero].Estado);
}

function selecionEstado(estado){
    let res = document.getElementById("next");
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

function guardar(){

}

function cancelar(){

}