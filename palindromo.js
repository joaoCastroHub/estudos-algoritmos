const prompt = require("prompt-sync")({ sigint: true });

function isPalindrome(word) {
    var array = word.toString().split("");
    var reverse = [...array].reverse();
    for (let i = 0; i < array.length; i++) {
        if (reverse[i] !== array[i]) {
            return false;
        }
    }
    return true;
}

function toNumber(array) {
    return array.join("");
}

function main() {
    var max = 999;
    var result = "";
    for (let i = max; i > 0; i--) {
        for (let j = max; j > i; j--) {
            let especime = (i * j);
            if (isPalindrome(especime) && especime > result) {
                result = especime;
                break;
            };
        }
    }
    console.log(result);
}

main();