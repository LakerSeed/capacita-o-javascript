const semáforo_status = document.getElementById("titulo_semáforo")
const luz_r = document.getElementById("luz_r");
const luz_w = document.getElementById("luz_w");
const luz_g = document.getElementById("luz_g");
let segundos = 0;
let iniciar;
let pode_iniciar = true;
function ignição(){
    if(pode_iniciar){
        iniciar = setInterval(semáforo, 1000);
        pode_iniciar = false;
    }
}
function abortar(){
    clearInterval(iniciar);
    luz_r.style.backgroundColor = "#390904";
    luz_w.style.backgroundColor = "#4b4d04";
    luz_g.style.backgroundColor = "#04580b";
    semáforo_status.textContent = "Semáforo - desativado"
    pode_iniciar = true;
}

function semáforo(){
    semáforo_status.textContent = "Semáforo - ativado"
    if(segundos < 4){
        luz_g.style.backgroundColor = "#08e01a";
        luz_r.style.backgroundColor = "#390904";
        luz_w.style.backgroundColor = "#4b4d04";
    }else if(4 <= segundos && segundos <= 6){
        luz_w.style.backgroundColor = "#d9e008";
        luz_r.style.backgroundColor = "#390904";
        luz_g.style.backgroundColor = "#04580b";
    }else if(6 < segundos  && segundos <= 9){
        luz_r.style.backgroundColor = "#e01e08";
        luz_w.style.backgroundColor = "#4b4d04";
        luz_g.style.backgroundColor = "#04580b";
    }else{
        segundos = 0;
    }
    segundos++;
}

const ligar = document.getElementById("semáforo_on").addEventListener("click", ignição);
const desligar = document.getElementById("semáforo_off").addEventListener("click", abortar);