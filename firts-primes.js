function isPrime(n) {
    if (n < 2) return false;
    var sqrtnum = Math.floor(Math.sqrt(n));
    for (let i = 2; i <=sqrtnum; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

function main() {
    var primes = [];
    var ref = 2; //the variable that will be incremented
    while (primes.length < 10001) {
        if (isPrime(ref)) {
            primes.push(ref);
        }
        ref = ref + 1;
    }
    console.log(primes);
    console.log(primes[primes.length - 1]);
}

main();