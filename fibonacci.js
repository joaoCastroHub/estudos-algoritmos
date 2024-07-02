const prompt = require("prompt-sync")({ sigint: true });
const max = prompt("Qual o valor de N? ");

function main() {
    var last = 0;
    var next = 0;
    var current = 1;
    var result = 0;

    while (current <= 4000000) {
        next = current + last;
        if (next % 2 == 0) result = result + next;
        last = current;
        current = next;
    }

    console.log(result);
}

main();