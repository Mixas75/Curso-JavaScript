let num = [5, 8 ,2, 9, 3]
console.log(`Nosso vetor é: ${num}`)
console.log(`O vetor tem ${num.length} posições`) 
num[5] = 4
console.log(`Nosso vetor é: ${num}`)
console.log(`O vetor tem ${num.length} posições`)
num.push(1)
console.log(`Nosso vetor é: ${num}`)
console.log(`O vetor tem ${num.length} posições`)
num.sort()
console.log(`Nosso vetor é: ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O elemento na posição 3 é: ${num[2]}`)
let pos = num.indexOf(9)
console.log(`O valor 9 está na posição ${pos}`)
pos = num.indexOf(10)
if (pos == -1){
    console.log("O valor não foi encontrado")
}else{
    
    console.log(`O valor 10 está na posição ${pos}`)
}