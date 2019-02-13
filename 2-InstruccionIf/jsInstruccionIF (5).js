function Mostrar()
{
//tomo la edad  
    var edad;

    edad = parseFloat(document.getElementById("edad").value);

    if (edad <13 || edad >17){
        alert("No es adolescente");
    }

}//FIN DE LA FUNCIÓN