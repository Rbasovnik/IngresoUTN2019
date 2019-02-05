/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostrar()
{
    var name;
    var message = "Tu nombre es "

    name = document.getElementById("elNombre").value;

    alert(message + name);


}


