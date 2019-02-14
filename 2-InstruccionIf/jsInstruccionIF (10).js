function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num;
	
	num = Math.floor(Math.random() * 10 + 1);

	if(num >= 9){
		alert(num + " Excelente");
	}
	else if(num >=4){
		alert(num + " Aprobado");
	}
	else{
		alert(num + " Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN