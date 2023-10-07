var arr = [1, 2, 3, 4, 5, 6, 7];
const result = arr.filter(f);

function f(n) {
    return n % 2 === 0;
}

console.log(result.reduce((a, b) => a + b) / result.length);