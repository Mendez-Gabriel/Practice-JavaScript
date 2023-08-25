/* --------------------- Arrays --------------------- */

// 1-Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

// let meses = ['Enero', 'Febrero', 'marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// console.log('Lista de Meses');

// for(let i=0; i<11; i++){
//     console.log(`\n ${meses[i]}`);
// }

/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

 */
// let ciudades;
// let arregoCities = [];
// let save;
// do
//  {
//     ciudades = prompt("Ingrese las ciudades");
//     if(ciudades != null){
//         save = arregoCities.indexOf('paris');
//         arregoCities.push(ciudades);
//     }

// }while(ciudades != null)
 
// if(save !== -1){
//     arregoCities.splice(save, 1);
//     arregoCities.push('paris');
    // }

// const cont = arregoCities.length;


// if(cont > 0){
//     console.log(`El arreglo es ${arregoCities}`);
//     console.log(`La longitud del arreglo es ${cont}`);
//     alert(`La posicion 1ra es ${arregoCities[0]} \nLa posicion 3ra es ${arregoCities[2]}\n La posicion ultima es ${arregoCities[cont-1]}`);
// }
// else{
//     console.log(`La longitud del arreglo es 0`);
// }


/* 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

 */
// const contador = new Array(11).fill(0);

// for(let i=0; i<50; i++)
// {
//     let dado1 = Math.floor(Math.random() *6)+1;
//     let dado2 = Math.floor(Math.random() *6)+1;
//     suma = dado1 + dado2;

//     contador[suma - 2] += 1; 
// }

// console.log('Suma   |   Apariciones');
// for(let i = 0; i < contador.length; i++){
    
//     console.log(`${i+2}      |${contador[i]}`);
// }




/* --------------------- Funciones --------------------- */

// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

// function simetria(num){
//     if(num%2 === 0){
//         console.log('El numero es par');
//     }else{
//         console.log('El numero es impar');
//     }
//     return num;
// }

// const numero = parseInt(prompt('Ingrese el numero entero'));
// const num = new simetria(numero);







// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

// function compare (between){
    
//     if(between === between.toLowerCase()){
//         console.log('El texto es solo minusculas');
//     }else if (between === between.toUpperCase()){
//         console.log('El texto es solo mayusculas');
//     }else {
//         console.log('El texto es convinado');
//     }
// }

// const texto = prompt("Ingrese el texto");
// const frase = compare(texto);









// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

// Ejemplo:


// Input:
// lado A = 24
// lado B = 5

// Output: 58


// function rectangulo (heigth, width){
//     mult = (2*heigth)+(2*width);
//     return mult;
// }

// const ladoA = parseInt(prompt('Ingrese un valor'));
// const ladoB = parseInt(prompt('Ingrese un valor'));

// const valores = rectangulo(ladoA, ladoB);

// console.log(valores);










// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.


// function tabla(num){
//     let mult = [];
//     for(let i=0; i<10 ; i++){
//         let tablas = num*(i+1); 
//         mult.push(tablas);
        
//     }
//     return mult;
// }

// const ingress = parseInt(prompt('Ingrese el numero'));

// const numero = tabla(ingress);

// console.log(numero);