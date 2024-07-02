const prompt = require("prompt-sync")({ sigint: true });
const max = prompt("Qual o valor de N? ");

function main() {
    var soma = 0;
    for(let i =0; i < max; i++) {
        if(i%3 == 0  || i%5 == 0) soma = soma + i;
    }
    console.log("A some é ", soma);
}

main();