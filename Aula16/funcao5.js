//Função recursiva
function fatorial(n) {
    if (n == 0) return 1;
    else return n * fatorial(n - 1);
}
//Função iterativa
function fatorial2(x) {
    let fat = 1;
    for (let i = 1; i <= x; i++) {
        fat *= i;
    }
    return fat;
}
console.log(fatorial(5));
console.log(fatorial2(5));
