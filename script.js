let adultos = document.getElementById("adultos");
let criancas = document.getElementById("criancas");
let duracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");


function exibeResultado(){
    let consumoCarne = calcCarne(adultos.value, criancas.value, duracao.value);
    let consumoCerveja = calcCerveja(adultos.value, duracao.value);
    let consumoRefri = calcRefri(adultos.value, criancas.value, duracao.value);
    
    resultado.innerHTML = `<p style="font-size: 28px;">${consumoCarne} kg <br>de Carne.</p>`;
    resultado.innerHTML += `<p style="font-size: 28px;">${consumoCerveja} latas <br>de cerveja (355ml).</p>`;
    resultado.innerHTML += `<p style="font-size: 28px;">${consumoRefri} garrafas <br>de refrigerante (2lt).</p>`;
}
function calcCarne(adultos, criancas, duracao) {
    let consumo = 0.500;
    adultos = consumoAdulto (adultos, consumo);
    criancas = consumoCarneCrianca (criancas, consumo);
    consumo = adultos + criancas;
    if(duracao >= 6){
        return consumo * 1.5; //consumo aumenta 50%.
    }else{
        return consumo;
    }
}
function calcCerveja(adultos, duracao) {
    let consumo = 3;
    consumo = consumoAdulto (adultos, consumo);
    if(duracao >= 6){
        return consumo * 1.5; //consumo aumenta 50%.
    }else{
        return consumo;
    }
}
function calcRefri(adultos, criancas, duracao) {
    let consumo = 0.5; //50% de uma garrafa de 2lt = 1000ml.
    adultos = consumoAdulto (adultos, consumo);
    criancas = consumoRefriCrianca (criancas, consumo);
    consumo = adultos + criancas;
    if(duracao >= 6){
        return Math.ceil(consumo * 1.5); //consumo aumenta 50%.
    }else{
        return Math.ceil(consumo);
    }
}
function consumoAdulto (adultos, consumo){
    return adultos * consumo;
}
function consumoCarneCrianca (criancas, consumo){
    return criancas * (consumo/2);
}
function consumoRefriCrianca (criancas, consumo){
    return criancas * (consumo*2);
}
//Carne (kg): se duração < 6h = 500gr > 6h = 750gr;
//Cerveja (355ml): se duração < 6h = 3 latas > 6h = 2000ml;
//Refrigerante (2l):  se duração < 6h = 1000ml > 6h = 1500ml;
//Crianças consomem metade de um adulto e não consomem cerveja;