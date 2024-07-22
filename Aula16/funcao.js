/*function parimpar (n){
    if (n % 2 == 0)
        return 'Par'
    else{
        return 'Impar'
    }
}
console.log(parimpar(4))
*/
function paripmar (n){
    if (n % 2 == 0){
        return `${n} é par`
    }
    else{
        return `${n} é ímpar`
    }
}
let res = paripmar(431);
console.log(res);
