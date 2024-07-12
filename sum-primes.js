
function isPrime(num) {
    var refNumber = Math.sqrt(num);
    for (let i = 2; i <= refNumber; i++) {
        if (num % i == 0) return false;
    }

    return true;
}

function main() {
    let soma = 0;
    for (let i = 2; i <= 2000000; i++) {
        if (isPrime(i)) soma += i;
    }
    console.log(soma);
}

main();