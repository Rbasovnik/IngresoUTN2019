//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    //alert("Esto funciona de maravilla");
    
    
   /* //parcial ej 7
    var nota;
    var sexo;
    var promedio;
    var notaBaja;
    var contadorVaronesMas5=0 ;
    var flag=0;
    var acumuladorNotas=0;
    var sexoNotaBaja;
    var cantidad = 3;

    for (var i = 0 ; i < cantidad ; i++){
        
        nota = parseInt(prompt("Ingrese nota"));
            while(isNaN(nota) || nota < 0 || nota > 10){
                nota = parseInt(prompt("Nota invalida. Ingrese nota"));
            }
        
        sexo = prompt("Ingrese sexo").toLowerCase();
            while(sexo != "f" && sexo != "m"){
                sexo = prompt("Error. Ingrese sexo").toLowerCase();
            }
        
        if(nota < notaBaja || flag == 0){
            notaBaja = nota;
            sexoNotaBaja = sexo;
            flag = 1;
        }
        
        if(nota >= 6 && sexo == "m"){
            contadorVaronesMas5++;
        }
        acumuladorNotas += nota;
    }
    promedio = (acumuladorNotas / cantidad).toFixed(2);
    alert("El promedio de las notas totales es = " + promedio + "\nLa nota mas baja es = " + notaBaja + " y su sexo es " + sexoNotaBaja + "\nLa cantidad de varones cuya nota es mayor o igual a 6 es = " + contadorVaronesMas5);
    alert("La nota mas baja es = " + notaBaja + " y su sexo es " + sexoNotaBaja);
    alert("La cantidad de varones cuya nota es mayor o igual a 6 es = " + contadorVaronesMas5);
*/

//parcial ej 8

    var numero;
    var contadorPares = 0;
    var contadorImpares = 0;
    var promedio;
    var acumuladorNumeros = 0;
    var maximo;
    var minimo;
    var seguir;
    var flag = 0;
    var contadorNumeros = 0;

    do{
        numero = parseInt(prompt("Ingrese un numero positivo"));
            while (isNaN(numero) || numero < 0){
                numero = parseInt(prompt("Error. Ingrese un numero positivo"));
            }
        if(numero % 2 == 0){
            contadorPares++;
        }
        else{
            contadorImpares++;
        }
        if(numero > maximo || flag == 0){
            maximo = numero;
        }
        if(numero < minimo || flag == 0){
            minimo = numero;
            flag = 1;
        }
        acumuladorNumeros += numero;
        contadorNumeros++;
        seguir = confirm ("Desea seguir?");
    }while (seguir);

    promedio = acumuladorNumeros / contadorNumeros;

    document.write("La cantidad de numeros pares es: " + contadorPares + "<br>");
    document.write("La cantidad de numeros impares es: " + contadorImpares + "<br>");
    document.write("El promedio de todos los numeros ingresados es: " + promedio.toFixed() + "<br>");
    document.write("La suma de todos los numeros es: " + acumuladorNumeros + "<br>");
    document.write("El numero maximo es: " + maximo + " y el minimo es: " + minimo + "<br>");
}

