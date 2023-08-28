let second;
let minutes;
let hours;

const hola = () => {
    setInterval(() => {
        let hora = new Date();
        second = hora.getSeconds();
        minutes = hora.getMinutes();
        hours = hora.getHours();

        if(second < 10){
            second = "0" + second;
        }
        
        if(minutes < 10){
            minutes = "0" + minutes;
        }

        
        if(hours < 10){
            hours = "0" + hours;
        }

        let reloj = document.querySelector("#hora");
        reloj.innerHTML = `${hours} : ${minutes} : ${second}`;
        
    })
}