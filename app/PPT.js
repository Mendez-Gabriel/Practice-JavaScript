// /* Desarrollar el ejercicio de piadra papel o tijeras pero uitlizando DOM y BOM */

// const opciones = ['piedra', 'papel', 'tijera'];
// let random;
// let usuario;
// let numeroCom;
// let guessInput;
// let player;
// let resultado;
// let continuar = true;



// document.getElementById('comenzarBtn').addEventListener('click', starGame);



// function starGame () {
//     random = com(opciones.length);
//     document.getElementById('comenzarBtn').style.display = 'none';
//     document.getElementById('inputDIV').style.display = 'block';
//     guessInput = document.getElementById('guessInput');
//     let submit = document.getElementById('button-addon1');
//     submit.addEventListener('click', comparador);
// }



// function com(numero){
//     numeroCom = Math.floor(Math.random() * numero);
//     return opciones[numeroCom];
// }




// function comparador(){
//     player = guessInput.value;

//     if(player === random){
//         resultado = `EMPATE!!!\nEl usuario eligio: ${player}\nLa Com eligio: ${random}`;
//     }else if((player === 'papel' && random === 'piedra') || (player === 'piedra' && random === 'tijera') || (player === 'tijera' && random === 'papel')){
//         resultado = `GANASTE!!!\nEl usuario eligio: ${player}\nLa Com eligio: ${random}`;
//     }else{
//         resultado = `PERDISTE!!!\nEl usuario eligio: ${player}\nLa Com eligio: ${random}`;
//     }

//     document.getElementById('liveAlertBtn').style.display = 'block'
//     document.getElementById('liveAlertBtn').innerText = resultado;
//     window.setInterval(reLoad, 2000);
// }



// function reLoad(){
//     continuar = confirm("Desea continuar?");
//     if(continuar === true){
//         location.reload(continuar);
//     }else if (continuar === false){
//     document.getElementsByClassName('button2').style.display = 'block';
//     }
// }

