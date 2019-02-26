function Mostrar()
{

	var contador=0;
	var acumulador=0;

	while (contador < 5){
		acumulador = acumulador + parseFloat(prompt("Ingrese un numero"));
		contador++;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN