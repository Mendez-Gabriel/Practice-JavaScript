let tiempo = document.querySelector('#tiempo');
let btnIniciar = document.querySelector("#btnIniciar");
let btnDetener = document.querySelector("#btnDetener");
let intervalo = 0, minutos = 0, segundos = 0;

const seleccion = (tiemp) => {
    btnIniciar.className = "btn btn-primary me-2"
    switch (tiemp){
        case 15:
        case 30:
            segundos = tiemp;
            tiempo.innerHTML = `00:${segundos}`;
            break;
        case 1:
        case 2:
            minutos = tiemp;
            tiempo.innerHTML = `0${minutos}:00`;
            break;
        default:
            console.log("Tiempo no establecido")
    }
}

function iniciar() {
   btnIniciar.className = "btn btn-primary disabled me-2";
   btnDetener.className = "btn btn-danger ms-2";
    if (minutos > 0) {
      minutos--;
      segundos = 60;
      intervalo = setInterval(() => {
        segundos--;
        tiempo.innerHTML = segundos < 10
            ? `0${minutos}:0${segundos}`
            : `0${minutos}:${segundos}`;
        if (minutos === 0 && segundos === 0) {
            clearInterval(intervalo);
            btnDetener = "btn btn-danger disabled ms-2"
        }
        if (segundos === 0 && minutos > 0){ minutos--, segundos=60};
      }, 1000);
      return;
    }
    if (segundos > 0 && minutos === 0) {
      intervalo = setInterval(() => {
        segundos--;
        tiempo.innerHTML = segundos < 10 ? `00:0${segundos}` : `00:${segundos}`;
        if (segundos === 0) {
          clearInterval(intervalo);
          btnDetener.className = "btn btn-danger disabled ms-2";
        }
      }, 1000);
    }
  }

  const detener = () => {
    tiempo.innerHTML =`00:00`;
    minutos=0, segundos= 0;
    clearInterval(intervalo);
    btnIniciar.className = "btn btn-primary disabled me-2";
   btnDetener.className = "btn btn-danger disabled ms-2" ;
}


