function traerDatos(){
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("GET","https://my-json-server.typicode.com/kevinmatias120/mockjson/db", true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          /*usamos los datos del archivo json*/
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            /*console.log(datos);
            console.log(datos.Solicitudes[0]);*/
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
    }
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
