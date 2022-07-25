//function recebeNome(){
//    const nome = prompt("Qual é o seu nome? ");
//}

//function recebeIdade(){
//    const idade = prompt("Qual a sua idade? ");
//}

//function recebeLinguagem(){
//    const linguagem = prompt("Qual linguagem de programação você está estudando? ");
//}

//function mensagem(nome, idade, linguagem) {
//    const msg = `Olá ${nome}, você tem ${idade} e já está aprendendo ${linguagem}!`;
//    alert(msg);
//}

//recebeNome();
//recebeIdade();
//recebeLinguagem();
//mensagem();

const nome = prompt("Qual é o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
alert(msg);
const gostas = prompt(`Você gosta de estudar ${linguagem}? Responsa 1 para SIM e 2 para NÃO`);
if (gostas == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
if (gostas == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}

