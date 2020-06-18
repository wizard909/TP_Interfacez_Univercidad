
var xhttp = new XMLHttpRequest();
let datos;

xhttp.open("GET","https://my-json-server.typicode.com/kevinmatias120/users/db", true);
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

function obtenerResultado(){
    var select = document.getElementById("select");
    var valor = select.value;
    cargarEditar(valor);
}

function cargarEditar(numero){
    let res = document.getElementById("cargar");
    res.innerHTML=`
    <img src="${datos.Usuarios[numero].Avatar} "width="100" height="100" ><br>
    <label for="">Fecha de Ingreso</label>
    <input type="date" name="fecha" min="1900-01-01" max="3000-12-31" value="${datos.Usuarios[numero].FechaIngreso}"></input>
    <br>
    <label for="">Nombre</label>
    <br>
    <textarea name="" id="" cols="30" rows="2" maxlength="100" >${datos.Usuarios[numero].Nombre}</textarea>
    <br>
    <label for="">clave</label>
    <br>
    <textarea name="" id="" cols="30" rows="2" maxlength="50" >${datos.Usuarios[numero].Contrasenia}</textarea>
    <br>
    <label for="" >Activo</label>
    <p id="estado" ></p>
    <button>Guardar</button>
    <button>Cancelar</button>
    `;
    estaActivo(datos.Usuarios[numero].Activo);
}

function estaActivo(estado){
    let res = document.getElementById("estado");
    res.innerHTML='';

    if(estado == "true"){
        res.innerHTML+=`
        <select name="" id="">
            <option value="">si</option>
            <option value="">no</option>
        </select> 
        `;
    }else{
        res.innerHTML+=`
        <select name="" id="">
            <option value="">no</option>
            <option value="">si</option>
        </select> 
        `;
    }

}