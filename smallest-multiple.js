const prompt = require("prompt-sync")({ sigint: true });

function calculate(max) {
    let x = 1;
    for (let i = 1; i <= max; i++) {
        if (x % i == 0) {
            resultado = x;
        } else {
            i = 1;
            x++;
        };
    }

    return resultado;
}

function main() {
    console.log(calculate(20));
}

main();