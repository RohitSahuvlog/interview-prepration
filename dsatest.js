let str = "abcabcdhlmnopq";
let alphates = "abcdefghijklmnopqrstuvwxyz".split("");


function getAlphates(str) {
    let result = "";
    max = "";
    for (let i = 1; i < str.length; i++) {

        if (alphates.findIndex((item) => item === str[i - 1]) + 1 === alphates.findIndex((item) => item === str[i])) {
            console.log(str[i - 1], str[i], alphates.findIndex((item) => item === str[i - 1]) + 1 === alphates.findIndex((item) => item === str[i]));
            result += str[i];
        } else {
            result = str[i];
        }
        if (result.length > max.length) {
            max = result;
        }
    }

    return max;

}

console.log(getAlphates(str)); // abcdefghlmno