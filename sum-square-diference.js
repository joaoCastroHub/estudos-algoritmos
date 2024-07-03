function sumOfSquare(n) {
    var res = 0;
    for (let i = 0; i <= n; i++) {
        res = res + i * i;
    }
    return res;
}

function squareOfSum(n) {
    var res = 0;
    for (let i = 0; i <= n; i++) {
        res = res + i;
    }
    return res * res;
}

function main() {
    //calculate the difference
    var sum = sumOfSquare(100);
    var sqr = squareOfSum(100);

    var res = sqr - sum;
    console.log(res);
}

main();