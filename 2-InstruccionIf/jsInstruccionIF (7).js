function Mostrar()
{
//tomo la edad  
    var edad;
    var estado;

    edad = parseFloat(document.getElementById("edad").value);
    estado = document.getElementById("estadoCivil").value;

 /*   if (edad < 18 && (estado == "Casado" || estado == "Divorciado")){
        alert("Es muy pequeño para NO estar soltero");
    }*/

    if (edad < 18 && estado != "Soltero"){
    alert("Es muy pequeño para NO estar soltero");
}
	


}//FIN DE LA FUNCIÓN