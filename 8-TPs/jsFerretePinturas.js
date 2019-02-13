/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;

    temperatura = parseFloat(document.getElementById("Temperatura").value);

    alert(temperatura + "º Fahrenheit equivale a " + ((temperatura - 32) * 5/9) + "º Centigrados.");

}

function CentigradosFahrenheit () 
{
	var temperatura;

    temperatura = parseFloat(document.getElementById("Temperatura").value);

    alert(temperatura + "º Centigrados equivale a " + ((temperatura * 9/5) + 32) + "º Fahrenheit.");	
}
