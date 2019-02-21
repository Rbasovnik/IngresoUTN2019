function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";

	while (respuesta != "si"){
		acumulador = acumulador + parseFloat(prompt("Ingrese numero o escriba 'si' cuando quiera detenerse."));
		contador++;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN