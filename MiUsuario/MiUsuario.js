
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

function desplegarUsuario(numero){
    let res = document.getElementById("abrirUsuario");
    res.innerHTML=`
    <div class="cuadroNombre"></div>
    <div class="cuadroActivo"></div>
    <div class="cuadroAvatar"></div>
    <div class="cuadroContracenia"></div>
    <div class="cuadroFecha"></div>
 
    <div class="nombreText">Nombre</div>
    <div class="activoText">Activo</div>
    <div class="avatarText">Avatar</div>
    <div class="contraceniaText">Contrasenia</div>
    <div class="fechaText">Fecha</div>

    <div class="miUsuarioText">Mi usuario</div>

    
    <div class="cuadroAvatar1"></div>
    <div class="cuadroFecha1"></div>
    <div class="cuadroNombre1"></div>
    <div class="cuadroContracenia1"></div>
    <div class="cuadroActivo1"></div>

    <img class="avatarTextEdit2" src="${datos.Usuarios[0].Avatar} ">
    <input type="date" name="fecha" min="1900-01-01" max="3000-12-31" value="${datos.Usuarios[0].FechaIngreso}" class="fechaTextEdit"></input>
    <textarea name="" id="" cols="30" rows="2" maxlength="100" class="nombreTextEdit" >${datos.Usuarios[0].Nombre}</textarea>
    <textarea name="" id="" cols="30" rows="2" maxlength="50" class="contraceniaTextEdit" >${datos.Usuarios[0].Contrasenia}</textarea>
    <textarea name="" id="" cols="30" rows="2" maxlength="50" class="activoTextEdit" >${datos.Usuarios[0].Activo}</textarea>

    <div class="guardarText">Guardar</div>
    <div class="cancelarText">Cancelar</div>
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

function inicio(){

}

function  misSolicitudes(){

}

function usuarios(){

}

function 