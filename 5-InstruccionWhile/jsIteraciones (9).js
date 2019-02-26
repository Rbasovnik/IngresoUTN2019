function Mostrar()
{
var numero;
var maximo;
var minimo;
var respuesta;
var flag = 0;

do{
	numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero)){
			numero = parseInt(prompt("No es un numero. Ingrese un numero"));
		}
	if (numero > maximo || flag == 0){
		maximo = numero;
	}
	if (numero < minimo || flag == 0){
		minimo = numero;
	}
	flag = 1;
	respuesta = confirm ("Desea continuar?");
}while(respuesta)

document.getElementById("maximo").value = 0 ;
}//FIN DE LA FUNCIÓN