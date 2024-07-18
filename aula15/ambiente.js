let num = [5 ,8 ,2 ,9 ,3 ]
num.push(1) // vai adicionar outro valor dentro do vetor
num.sort() // vai colocar o valor em ordem crescente
console.log(num)
console.log(`O Vetor tem ${num.length} posições`) // Comprimento/Posições do valor
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1){
    console.log(`O valor não foi Encontrado!`)
}else {
    console.log(`O valor esta na posiçao ${pos}`)
}

