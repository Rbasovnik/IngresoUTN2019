function Mostrar()
{

	var flag = true;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero)){
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"));
		}
		if (numero < 0){
			negativo *= numero;
			flag = false
		}
		else{
			positivo += numero;
		}
		respuesta = confirm ("Desea continuar?");
	}while (respuesta)


document.getElementById('suma').value=positivo;
if (flag){
	negativo = 0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN