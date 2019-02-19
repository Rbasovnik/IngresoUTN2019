function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	/*var num;
	
	num = Math.floor(Math.random() * 10 + 1);

	if(num >= 9){
		alert(num + " Excelente");
	}
	else if(num >=4){
		alert(num + " Aprobado");
	}
	else{
		alert(num + " Vamos, la proxima se puede");
	}*/

	var nota = Math.floor(Math.random() * 10 + 1);
	var mensaje;

	if(nota >= 9){
		mensaje = nota + " Excelente";
	}
	else if(nota >= 4){
		mensaje = nota + " Aprobo";
	}
	else{
		mensaje = nota + " Vamos, la proxima se puede";
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN