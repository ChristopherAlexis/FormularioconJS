function validar() {
   var nombre, apellidos, correo, usuario, clave, telefono, expresion;
    /*Voy a usar document.getElementById yaque voy a seleccionar un elemento por su id y pongo value para que se guarde*/
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
    telefono = document.getElementById("telefono").value;
    expresion = /\w+@\w+\.+[a-z]/;
    /*texto@texto.texto*/
    
    if(nombre === "" || apellidos === "" || correo === "" || usuario === "" || clave === "" || telefono === ""){
        alert("El campo nombre esta vacio");
        return false;
    }
    else if(nombre.length>30){
        alert("El nombre solo acepta 30 caracteres");
        return false;
    }
    else if(apellidos.length>30){
        alert("Los apellidos solo acepta 30 caracteres");
        return false;
    }
    else if(correo.length>30){
        alert("El correo solo acepta 30 caracteres");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("El correo no es valido");
        return false;
    }
    
    else if(usuario.length>30){
        alert("El usuario solo acepta 30 caracteres");
        return false;
    }
    else if(clave.length>20){
        alert("La clave solo acepta 20 caracteres");
        return false;
    }
    else if(telefono.length>9){
        alert("El telefono solo acepta 9 caracteres");
        return false;
    }
    
    /*No lo uso porque estoy usando tpye="number"*/
    else if(isNaN(telefono)){
        alert("El telefono ingresado no es un numero");
        return false;
        //isNaN(telefono) Esto dice que si telefono no es un numero//
        }
    }