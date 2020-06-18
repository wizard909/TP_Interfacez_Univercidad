function login(){
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if(usuario == "41245846" && password == "99999a"){
        /* redireccion a otra pagina*/
    }else{
        /*redieccion a otra pagina*/
    }
}

function vaciarUsuario(){
    var tipo = document.getElementById("usuario");
    if(tipo.value == "Usuario"){
        tipo.value = "";
    }
}

function vaciarContrasena(){
    var tipo = document.getElementById("password");
    if(tipo.type == "text"){
        tipo.type = "password";
        tipo.value= "";
    }
}