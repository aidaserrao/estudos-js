let num = [5,8,2,9,3]
num.push(1)    // Adiciona mais um                                                                                                             
num.sort()    // deixa em ordem
console.log(num)
console.log(`Vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
}else {
    console.log(`O valor está na posição ${pos}`)
}