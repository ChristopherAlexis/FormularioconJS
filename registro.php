<?php
$conexion = mysqli_connect("localhost","root","123","bd_prueba");
/*if(!conexion){
    echo 'Error al conectar a la base de datos';
}
else{
    echo 'Conectado a la base de datos';*/
//RECIBIR LOS DATOS Y ALMACENARLOS EN VARIABLES
$nombre = $_Post["nombre"];
$apellidos = $_Post["apellidos"];
$correo = $_Post["correo "];
$usuario = $_Post["usuario"];
$clave = $_Post["clave"];
$telefono = $_Post["telefono"];
// CONSULTA PARA INSERTAR
$insertar = "INSERT INTO usuarios(nombre, apellidos, correo, usuario, clave, telefono) VALUES('$nombre','$apellidos','$correo','$usuario','$clave','$telefono')";
//EJECUTAR CONSULTA
$resultado = mysqli_query($conexion,$insertar);
if(!resultado){
    echo 'Error al registrarse';
}else{
    echo 'Usuario registrado exitosamente';
}
//cerrar conexion
mysqli_close($conexion);
