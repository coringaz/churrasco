let inputAdultos = document.getElementById("adultos");
let inputCrianca = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCrianca.value;
    let duracao = inputDuracao.value;
    let carne = quantCarne(duracao)/1000;
    let cerveja = Math.ceil(quantCerveja(duracao)/355);
    let refri = Math.ceil(quantRefri(duracao)/2000);

    let quantCarneT = carne * adultos + (carne / 2 * criancas);
    let quantCervejaT = cerveja * adultos;
    let quantRefriT = refri * adultos + (refri / 2 * criancas);
console.log(quantCarneT, quantCarneT, quantRefriT);
    resultado.innerHTML = `<p>${quantCarneT} kg <br>de Carne.</p>`;
    resultado.innerHTML += `<p>${quantCervejaT} latas <br>de cerveja.</p>`;
    resultado.innerHTML += `<p>${quantRefriT} garrafas <br>de refrigerante 2lt.</p>`;
}
function quantCarne(duracao) {
    if(duracao >= 6){
        return 650;
    }
    return 400;
}
function quantCerveja(duracao) {
    if(duracao >= 6){
        return 2000;
    }
    return 1200;
}
function quantRefri(duracao) {
    if(duracao >= 6){
        return 1500;
    }
    return 1000;
}
//Carne (kg): se duração < 6h = 400gr > 6h = 650gr;
//Cerveja (355ml): se duração < 6h = 1200ml > 6h = 2000ml;
//Refrigerante (2l):  se duração < 6h = 1000ml > 6h = 1500ml;
//Crianças não consomem cerveja e consomem metade de um adulto;