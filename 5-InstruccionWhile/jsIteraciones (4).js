function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	while (numero < 0 || numero > 10 || isNaN(numero)){
		numero = parseInt(prompt("Numero incorrecto, reingrese un numero del 1 al 10"));
	}
	document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN