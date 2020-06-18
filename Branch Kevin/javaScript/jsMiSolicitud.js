
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

function checkBoxs(){
    var contador = 0;
    let res = document.getElementById("aca");
    res.innerHTML='';
            
    for(let item of datos.Solicitudes){
        res.innerHTML+=`
        <input type="checkbox"  onclick="mostrarSolicitud(${contador});">
        <label for=""  >Solicitud ${contador + 1}</label>
        <p id="soli${contador}" ></p>
        `
        contador++;
    }
}

function traerDatos(){
    let res = document.getElementById("aca");
    res.innerHTML='';
            
    for(let item of datos.Solicitudes){
        res.innerHTML+=`
        <p>${item.FechaSolicitud}</p>
        <p>${item.Descripcion}</p>
        <p>${item.Estado}</p>
        <br>
        `
    }
}

function mostrarSolicitud(numero){
    console.log(`soli${numero}`);

    let res = document.getElementById(`soli${numero}`);
    res.innerHTML=`
    <p>${datos.Solicitudes[numero].FechaSolicitud}</p>
    <p>${datos.Solicitudes[numero].Descripcion}</p>
    <p>${datos.Solicitudes[numero].Estado}</p>
    `;
}

function exit(){
    /*ir a pagina principal*/
}

function nuevo(){
    /*crear un nuevo registro*/
}

function actualizar(){
    /*redirigir a otra pagina a solicitud y modificarlo*/
}

function borrar(){
    /*eliminar el registro que selecionas*/
}
