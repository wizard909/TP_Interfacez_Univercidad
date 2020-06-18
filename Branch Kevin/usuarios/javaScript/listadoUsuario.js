
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

function checkBoxUser(){
    var contador = 0;
    let res = document.getElementById("usuarios");
    res.innerHTML='';
            
    for(let item of datos.Usuarios){
        res.innerHTML+=`
        <label for=""  >Usuario ${contador + 1}</label>
        <input type="checkbox"  onclick="mostrarUsuario(${contador});">
        <p id="user${contador}" ></p>
        `
        contador++;
    }
}

function mostrarUsuario(numero){
    let res = document.getElementById(`user${numero}`);
    res.innerHTML=`
    <img class="" src="${datos.Usuarios[numero].Avatar}" alt="" width="100" height="100" >
    <p>Usuario= ${datos.Usuarios[numero].Nombre}</p>
    <p>Activo= ${estado(numero)}</p>
    <button>Modificar</button>
    <button>Eliminar</button>
    `;
}

function estado(numero){
    if(datos.Usuarios[numero].Activo == "true"){
        return "Si";
    }else{
        return "No";
    }
}