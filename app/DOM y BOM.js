/*------------------------ DOM Y BOM ------------------------*/

/* 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 */
let random;
let guessInput;
let submitBtn;

document.getElementById(`comenzarBtn`).addEventListener('click', startGame);

function startGame(){
    random = generarNumero(1, 10);
    document.getElementById('comenzarBtn').style.display = 'none';
    document.getElementById('inputDIV').style.display = 'block';
    guessInput = document.getElementById('guessInput');
    submitBtn = document.getElementById('button-addon1');
    submitBtn.addEventListener('click', checkear);
}
    
function generarNumero(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkear(){
    let numero = parseInt(guessInput.value);
    if(numero === random){
        alert("Los numeros son iguales");
    }else if(numero < random){
        alert("El numero es menor al de COM");
    }else{
        alert("El numero es mayor al de COM");
    }
}

// function restart(){
//     guessInput = '';
//     random = null;
//     document.getElementById('comenzarBtn').style.display = 'block';
//     document.getElementById('inputDIV').style.display = 'none';
//     submitBtn.removeEventListener('click', checkear);
// }

