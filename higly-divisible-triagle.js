function getTriangleNumber(n) {
    return (n * (n + 1)) / 2;
}

function getDivisors(n) {
    let divisors = 0;
    let sqrt = Math.sqrt(n);
    for (let i = 1; i <= sqrt; i++) {
        if (n % i == 0) {
            divisors += 2; // i e n/i
        }
    }
    if (sqrt * sqrt == n) {
        divisors--; // Corrige caso seja um quadrado perfeito
    }
    return divisors;
}

function main() {
    let divisors = 0;
    let triangleNumber = 1;
    let tester = 1;
    while (divisors < 500) {
        tester = getTriangleNumber(triangleNumber);
        divisors = getDivisors(tester);
        triangleNumber++;
        console.log(tester + "::::::" + divisors);
    }
    console.log("Primeiro número triangular com pelo menos 500 divisores: " + tester);
}

main();