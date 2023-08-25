/*-------------EJERCICIO N°1-------------*/
/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

/*-------------DESARROLLO-------------*/

/*let edad = parseInt(prompt("Ingresa la edad"));
if(edad >= 18){
    console.log("Ya puede conducir");
}else {
    console.log("La edad ingresada no es valida");
}








/*-------------EJERCICIO N°2-------------*/
/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:



Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido

/*-------------DESARROLLO-------------*/

/*let numCalif = parseInt(prompt("Ingrese la calificacion"));

if(typeof numCalif === "number" && !isNaN(numCalif)){
    switch(numCalif >= 0 ){
        case numCalif >=0 && numCalif <= 2:
            console.log("Muy deficiente");
            break;
        
        case numCalif > 2 && numCalif <= 4:
            console.log("Insuficiente");
            break;

        case numCalif > 4 && numCalif <= 6:
                console.log("Suficiente");
            break;

        case numCalif > 6 && numCalif <= 7:
                console.log("Bien");
            break;

        case numCalif > 7 && numCalif <= 9:
            console.log("Notable");
            break;

        case numCalif > 9 && numCalif <= 10:
            console.log("Sobresaliente");
            break;
    
        default:
            console.log("Numero erroneo");
    }
}else {
    console.log("Instroduce un numero valido");
}





/*typeof comprobar el tipo de valor y isNaN devuelve true si el valor no es un numero y false si es un numero valido */







/*-------------EJERCICIO N°3-------------*/

/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp


/*-------------DESARROLLO-------------*/

/*let cadenas = [];
let cadena;

do {
    cadena = prompt("Ingresa una palabra (presiona cancelar para detener)");

    if(cadena !== null){
        cadenas.push(cadena);
    }
} while ( cadena !== null );

if(cadenas.length > 0) {
    let out = cadenas.join("-");
    console.log("Estas son las palabras ingresadas: ",  out);
} else {
    console.log("No se ingresaron cadenas");
}


/* "null" nos hace referencia al boton "cancelar".
   "push" nos permite ingresar en el array
   "join" nos permite concatenar las cadenas*/






/*-------------EJERCICIO N°4-------------*/

/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

/*-------------DESARROLLO-------------*/

/*let cadenasNum = [];
let cadenaNum;


do {
    cadenaNum = prompt("Ingrese los numeros");

    
        if(cadenaNum !== null && !isNaN(cadenaNum)){
            cadenasNum.push(cadenaNum);
        }else {
            console.log("El valor ingresado no es valido");
        }
    

} while (cadenaNum !== null);


if(cadenasNum.length > 0){
    let outNum = cadenasNum.join("-");
    console.log("Los numeros son: " , outNum);
} else {
    console.log("No hay cadenas ingresadas");
}






/*-------------EJERCICIO N°5-------------*/

/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 



Input:  40773821 
Output: ‘L’


/*-------------DESARROLLO-------------*/















/*-------------EJERCICIO N°6-------------*/

/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….


/*-------------DESARROLLO-------------*/







/*-------------EJERCICIO N°7-------------*/

/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1


/*-------------DESARROLLO-------------*/









/*-------------EJERCICIO N°8-------------*/

/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……


/*-------------DESARROLLO-------------*/











/*-------------EJERCICIO N°9-------------*/

/*9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10*/
