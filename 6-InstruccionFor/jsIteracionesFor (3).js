function Mostrar()
{

var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
        while(isNaN(repeticiones)){
            repeticiones = parseInt(prompt("Eso no es un numero. Ingrese el numero de repeticiones"));
        }

    for (var contador=0; contador < repeticiones; contador++){
        alert("Hola UTN FRA " + contador);
    }


}//FIN DE LA FUNCIÓN