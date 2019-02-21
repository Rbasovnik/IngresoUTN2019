function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

sexo = sexo.toLowerCase();

while (!(sexo == "m" || sexo == "f")){
    sexo = prompt("Ingreso incorrecto, ingrese f ó m");
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN