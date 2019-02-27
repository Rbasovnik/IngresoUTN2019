function Mostrar()
{

	var contador=0;
	var numero;
	var contadorPositivo=0;
	var contadorNegativo=0;
	var contadorCeros=0;
	var contadorPares=0;
	var positivo=0;
	var negativo=0;
	var respuesta;

	do{
		numero = parseInt(prompt("Ingrese un numero"));
			while (isNaN(numero)){
				numero = parseInt(prompt("No es un numero. Ingrese un numero"));
			}
		if (numero > 0){
			positivo += numero;
			contadorPositivo++;
		}
		else if(numero < 0){
			negativo +=numero;
			contadorNegativo++;
		}
		else{
			contadorCeros++;
		}
		if (numero % 2){
			contadorPares++;
		}
		contador++;
		respuesta = confirm("Desea continuar?");
	}while(respuesta);

	document.write("Suma positivos =" + positivo + "<br>");
	document.write("Suma negativos =" + negativo + "<br>");
	document.write("Cantidad de positivos =" + contadorPositivo + "<br>");
	document.write("Cantidad de negativos =" + contadorNegativo + "<br>");
	document.write("Cantidad de ceros =" + contadorCeros + "<br>");
	document.write("Cantidad de numeros pares =" + contadorPares + "<br>");
	document.write("Promedio de positivos =" + (positivo/contadorPositivo) + "<br>");
	document.write("Promedio negativos =" + (negativo / contadorNegativo) + "<br>");
	document.write("Diferencia entre positivos y negativos =" + (positivo - negativo) + "<br>");
}//FIN DE LA FUNCIÓN