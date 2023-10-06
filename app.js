// Escribe tu código aquí.
const listaDesordenada=document.getElementById("listaDesordenada");
console.log("estoy vivo");
let arregloStrings=["aro", "cebolla", "guitarra", "mazo", "cabello", "serpiente", "jitomate"];



function bigWords( palabraEntrada, arregloStrings){//
    let arregloSalidaString=[];    
    for (let i=0; i< arregloStrings.length; i++){//realizaremos la iteración n vece donde n es el numero de palabras(elementos) en el array
        if(palabraEntrada.length< arregloStrings[i].length){
            arregloSalidaString.push(arregloStrings[i]);
        }
    }    
console.log("fin función");
return arregloSalidaString;

}
let entrada="coco";
arregloSalidaString= bigWords(entrada, arregloStrings);
console.log(arregloSalidaString);

function liString(arregloAEnlistar){
let stringSalida= "";
for(let j=0; j<arregloAEnlistar.length;j++){
    stringSalida= stringSalida+"<li>" //concateno el string de salida, que incia siendo vació pero se empieza a llenar conforme van pasando las iteraciones
    stringSalida = stringSalida+ arregloAEnlistar[j]; //concatenamos el string de la iteración j a nuestro string de salida
    stringSalida = stringSalida+ "</li>\n" // concatenamos el cierre de etiqueta li 
}
return stringSalida;

}

let liEtiquetas=liString (arregloSalidaString);
listaDesordenada.innerHTML=liEtiquetas;

/**
 * olvidé guardar el estado en el pude llegar a través de mi codeo, pero no pude ingresar bien al valor de mi arreglo un poco por los nervios y siento que no lo pude terminar en tiempo y forma, lo resolví despúes
 * 
 * comentarios: 
 * -compañero1: 
 * Feedback de Pepe
 * Inicia seguro de lo que va a realizar, abre su VS ingresa su Array, pero no lo declara en ese momento 
 * En todo momento se muestra seguro.

Habla sobre el proceso que esta haciendo y lo que espera que haga

Revisa su Código, para detectar posibles errores y hace las correcciones pertinentes

Si comenta su codigo 

Enlaza su JS hasta que ya lo va a probar 

utiliza varios console.log para descifrar si su código si esta leyendo todo

No termina de realizar e ejercicio, pero si tiene idea de como resolverlo. 

compañero 2: noté bastante seguridad en ti y en tu lógica de programación me pareció correcto que aunque no lo terminaras pudiera mostrarnos como lo harías 

*/


