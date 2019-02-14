function Mostrar()
{
//tomo la edad  
    var edad;
    var estado;
	
    edad = parseFloat(document.getElementById("edad").value);
    estado = document.getElementById("estadoCivil").value;

   /* if (edad < 18 && (estado == "Casado" || estado == "Divorciado")){}
    else if(edad >=18 && estado == "Soltero"){
        alert("Es soltero y no es menor");
    }*/

    if (edad >= 18 && estado == "Soltero"){
        alert("Es soltero y no es menor");
    }

}//FIN DE LA FUNCIÓN