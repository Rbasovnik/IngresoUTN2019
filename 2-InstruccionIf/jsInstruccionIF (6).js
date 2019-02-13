function Mostrar()
{
//tomo la edad  
    var edad

    edad = parseFloat(document.getElementById("edad").value);

    if(edad >= 13 && edad <= 17){
        alert("Es adolescente");
    } 
    else if (edad >=18){
        alert("Es adulto");
    }
    else {
        alert("Es Niño");
    }

    /*else{
        //if(edad >=18){
            //alert("Es adulto");
        //}
        //else{
            //alert("Es niño");
        //}
    }*/
}//FIN DE LA FUNCIÓN
