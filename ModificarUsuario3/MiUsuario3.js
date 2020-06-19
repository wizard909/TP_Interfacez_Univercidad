
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

    <img class="avatarTextEdit3" src="${datos.Usuarios[2].Avatar} ">
    <input type="date" name="fecha" min="1900-01-01" max="3000-12-31" value="${datos.Usuarios[1].FechaIngreso}" class="fechaTextEdit"></input>
    <textarea name="" id="" cols="30" rows="2" maxlength="100" class="nombreTextEdit" >${datos.Usuarios[2].Nombre}</textarea>
    <textarea name="" id="" cols="30" rows="2" maxlength="50" class="contraceniaTextEdit" >${datos.Usuarios[2].Contrasenia}</textarea>

    <div class="activoTextEdit">
    <select name="Estados" id="">
        <option value="">${datos.Usuarios[1].Activo}</option>
        <option value="">True</option>
        <option value="">False</option>
    </select> 
    </div>

    <input type="button" class="guardarText" onclick="guardar();" value="Guardar">
    <input type="button" class="cancelarText" onclick="cancelar();" value="Cancelar">
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

function guardar(){
    location.href =`${html.Redireccion[2].Guardar}`;
}

function cancelar(){
    location.href =`${html.Redireccion[2].Cancelar}`;
}