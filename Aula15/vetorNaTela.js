let valores = [1, 6, 2, 8, 3, 9]
console.log(valores)
console.log(`valores tem ${valores.length} itens`)
/*for(let pos = 0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
    */
   for(let pos in valores){
    console.log("Posição", pos)
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
   }
