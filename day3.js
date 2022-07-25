const nome = prompt("Qual é o seu nome?");
const area = prompt(`Olá ${nome}, qual área de programação você gostaria de seguir 'front-end' ou 'back-end'? Digite a área: `);
let linguagem = "";
if (area === "front-end") {
    linguagem = prompt("Muito bem! Você gostaria de aprender React ou Vue?");
}
else if (area === "back-end") {
    linguagem = prompt("Ahh que legal! Gostaria de aprender C# ou Java?");
} else {
    alert("Por favor, digite uma resposta válida.");
}

const oqPreferes = prompt("Seu futuro será brilhante! Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar full-stak.");
if (oqPreferes == 1) {
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
}
else if (oqPreferes == 2) {
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se vocÊ quer se tornar Fullstack!`);    
} else {
    alert(`Você não digitou um valor válido!`);
}

let tecnologia = prompt("Você gostaria de aprender mais alguma tecnologia? Digita 'ok' em caso positivo.");
while (tecnologia === "ok") {
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é uma tecnologia muito interessante!`);
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' caso sim.");    
}
