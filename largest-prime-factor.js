const prompt = require("prompt-sync")({ sigint: true });
const max = prompt("Qual o valor de N? ");
//600851475143

function isPrime(numbers) {
    for (let i = 2; i < Math.sqrt(numbers); i++) {
        if (numbers % i == 0) return false;
    }
    return true;
}

function main() {
    var result = 0;
    for (let i = 2; i < Math.sqrt(max); i++) {
        if (isPrime(i)) {
            if (max % i == 0) result = i;
        }
    }

    console.log(result);
}

main();