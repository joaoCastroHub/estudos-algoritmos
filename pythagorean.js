//A < B < C 

function calculatePythagorean(num) {
    for (let a = 3; a < num; a++) {
        for (let b = a + 1; b < num; b++) {
            let c = Math.pow(a, 2) + Math.pow(b, 2);
            c = Math.sqrt(c);
            if (a + b + c == num) return (a * b * c);
        }
    }
}

function main() {
    console.log(calculatePythagorean(1000));
}

main();