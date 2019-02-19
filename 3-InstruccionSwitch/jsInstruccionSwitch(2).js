function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

switch(mesDelAño){
    case "Julio":
        alert("Abrigate que hace frio");
        break;
    case "Agosto":
        alert("Abrigate que hace frio");
        break;
    case "Enero":
        alert("Falta para el invierno");
        break;
    case "Febrero":
        alert("Falta para el invierno");
        break;
    case "Marzo":
        alert("Falta para el invierno");
        break;
    case "Abril":
        alert("Falta para el invierno");
        break;
    case "Mayo":
        alert("Falta para el invierno");
        break;
    case "Junio":
        alert("Falta para el invierno");
        break;
    default:
        alert("Ya pasamos el frio, ahora calor!");
        break;    
}


}//FIN DE LA FUNCIÓN