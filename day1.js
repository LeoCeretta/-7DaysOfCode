let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

function testaValores () {
    if (numeroUm == stringUm) {
        console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');
    } else {
        console.log('As variáveis numeroUm e stringUm não tem o mesmo tipo');
    }
}

testaValores();