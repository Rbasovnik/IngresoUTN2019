function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;

	do{
		numero = parseInt(prompt("Ingrese un numero"))
			while(isNaN(numero)){
				numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"));
			}
		acumulador = acumulador + numero;
		contador++;
		//respuesta = prompt("Si desea continuar escriba S").toLowerCase();
		respuesta = confirm ("Desea continuar?");
	//}while(respuesta == 's');
	  }while(respuesta);

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN