/*-------------EJERCICIO N°1-------------*/
/*1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”. */

/*-------------DESARROLLO-------------*/

/*window.alert("Un mensaje");





/*-------------EJERCICIO N°2-------------*/
/*2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).*/

/*-------------DESARROLLO-------------*/

/*window.confirm("Hello World");





/*-------------EJERCICIO N°3-------------*/
/*3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.*/

/*-------------DESARROLLO-------------*/

/*let Suma = 3+5;
console.log("El resultado es:", Suma);






/*-------------EJERCICIO N°4-------------*/
/*4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 

input: Coder 
Output: Hola Coder */

/*-------------DESARROLLO-------------*/

/*let nombre = prompt("Ingrese el nombre de ususario");
console.log("El nombre del usuario es:", nombre);






/*-------------EJERCICIO N°5-------------*/
/*5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt  */

/*-------------DESARROLLO-------------*/

/*let num1 = parseInt(prompt("Ingrese el primer valor"));
let num2 = parseInt(prompt("Ingrese el segundo valor"));
console.log(parseInt(num1+num2));







/*-------------EJERCICIO N°6-------------*/
/*6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande */

/*-------------DESARROLLO-------------*/

/*let num1 = parseInt(prompt("Ingrese el primer valor"));
let num2 = parseInt(prompt("Ingrese el segundo valor"));
console.log(Math.max(num1, num2));






/*-------------EJERCICIO N°7-------------*/

/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9
Output: El 15 es el número más grande*/
/*-------------DESARROLLO-------------*/


/*let num1 = parseInt(prompt("Ingrese el primer valor"));
let num2 = parseInt(prompt("Ingrese el segundo valor"));
let num3 = parseInt(prompt("Ingrese el tercer valor"));
console.log(Math.max(num1, num2, num3));







/*-------------EJERCICIO N°8-------------*/

/*8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.*/

/*-------------DESARROLLO-------------*/

/*let num1 = parseInt(prompt("Ingrese el primer valor"));
let num2 = parseInt(prompt("Ingrese el segundo valor"));

if(num1 % 2 === 0 ) {
    console.log("El", num1, "es divisible por 2");
}
else  {
    console.log("El", num1, "no es divisible por 2");
}

if(num2 % 2 === 0 ) {
    console.log("El", num2, "es divisible por 2");
}
else  {
    console.log("El", num2, "no es divisible por 2");
}










/*-------------EJERCICIO N°9-------------*/

/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo*/

/*-------------DESARROLLO-------------*/

/*let palabra = prompt("Escriba algo");
const vocales = "aeiouAEIOU";
let vocalesEncontradas = "";

for( let i=0; i < palabra.length; i++ ) {
    const posicion = palabra.charAt(i);
    if(vocales.includes(posicion)){
        vocalesEncontradas += posicion;
    }
}

console.log("Las vocales son:", vocalesEncontradas);










/*-------------EJERCICIO N°10-------------*/

/*10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20


Output: El 20 es divisible por 2.


/*-------------DESARROLLO-------------*/

/*let num = prompt("Ingrese el valor");

if(num%2 === 0){
    console.log("El numero es divisible por 2");
} else if(num%3 === 0){
    console.log("El numero es divisible por 3");
} else if(num%5 === 0){
    console.log("El numero es divisible por 5");
} else if(num%7 === 0){
    console.log("El numero es divisible por 7");
} else {
    console.log("El numero no es divisible por 2, 3, 5, 7");
}









/*-------------EJERCICIO N°11-------------*/
/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210


Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.

/*-------------DESARROLLO-------------*/

let num = prompt("Ingrese el valor");




    if(num%2 === 0){
        console.log("El numero es divisible por 2");
        variable = num%2;
    } 
     if(num%3 === 0){
        console.log("El numero es divisible por 3");
        variable = num%3;
    } 
     if(num%5 === 0){
        console.log("El numero es divisible por 5");
        variable = num%5;
    } 
     if(num%7 === 0){
        console.log("El numero es divisible por 7");
        variable = num%7;
    } 
    