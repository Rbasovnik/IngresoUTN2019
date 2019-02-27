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
//	var promedioPositivo=0;
//	var promedioNegativo=0;

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
		if (numero % 2 == 0){
			contadorPares++;
		}
		contador++;
		respuesta = confirm("Desea continuar?");
	}while(respuesta);

		if (contadorNegativo == 0){
			contadorNegativo = 1;
		}
		if (contadorPositivo == 0){
			contadorPositivo = 1;
		}
		/*if(contadorNegativo != 0){
			promedioNegativo = negativo / contadorNegativo;
		}
		  if(contadorPositivo != 0){
			promedioPositivo = positivo / contadorPositivo;
		  }
		*/
	document.write("Suma positivos = " + positivo + "<br>");
	document.write("Suma negativos = " + negativo + "<br>");
	document.write("Cantidad de positivos = " + contadorPositivo + "<br>");
	document.write("Cantidad de negativos = " + contadorNegativo + "<br>");
	document.write("Cantidad de ceros = " + contadorCeros + "<br>");
	document.write("Cantidad de numeros pares = " + contadorPares + "<br>");
	document.write("Promedio de positivos = " + (positivo / contadorPositivo) + "<br>");
//	document.write("Promedio de positivos = " + promedioPositivo + "<br>");
	document.write("Promedio de negativos = " + (negativo / contadorNegativo) + "<br>");
//	document.write("Promedio de negativos = " + promedioNegativo + "<br>");
	document.write("Diferencia entre positivos y negativos = " + (contadorPositivo - contadorNegativo) + "<br>");
}//FIN DE LA FUNCIÓN