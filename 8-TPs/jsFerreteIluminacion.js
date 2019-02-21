/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lamparas;
    var marca;
    var precio = 35;
    var descuento;
    var precioConDescuento;
    var importeFinal;
    var iibb;
    var mensaje = "El importe final es $";
    var flag = false;

    lamparas = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;


    switch (lamparas){
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            if (marca == "ArgentinaLuz"){
            descuento = precio * 0.15;        
            }
           else if (marca == "FelipeLamparas") {
            descuento = precio * 0.10;
            }
            else{
            descuento = precio * 0.05;
            }
            break;
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            descuento = precio * 0.25;    
            }
            else{
            descuento = precio * 0.20;
            }
            break;   
        case 5:
            if (marca == "ArgentinaLuz"){
         descuento = precio * 0.40;   
            }
            else {
         descuento = precio * 0.30;
            }
            break;
        default:
            descuento = precio * 0.50;
    }
/*
   if (lamparas >= 6){
        descuento = precio * 0.50;
    }
    
    else if (lamparas == 5){
        if (marca == "ArgentinaLuz"){
         descuento = precio * 0.40;   
        }
        else {
         descuento = precio * 0.30;
        }
    }
    else if (lamparas == 4){
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            descuento = precio * 0.25;    
        }
        else{
            descuento = precio * 0.20;
        }
    }

    else if (lamparas == 3){
        if (marca == "ArgentinaLuz"){
            descuento = precio * 0.15;        
        }
        else if (marca == "FelipeLamparas") {
            descuento = precio * 0.10;
        }
        else{
            descuento = precio * 0.05;
            }
    }
    else {
        decuento = 0;
    }
*/
    precioConDescuento = precio - descuento;

    importeFinal = precioConDescuento * lamparas;

    if (importeFinal > 120){
        iibb = importeFinal * 0.10;
        
        importeFinal = importeFinal + iibb;

        flag = true;
    }

    document.getElementById("precioDescuento").value = precioConDescuento;

    mensaje = mensaje + importeFinal;

    if (flag){
        mensaje = mensaje + " IIBB Usted pago $" + iibb;
    }

    alert(mensaje);
}
