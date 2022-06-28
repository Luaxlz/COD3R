function soma () { // O fato da função não receber nenhum parametro não significa que vc não pode passar parametros a ela.
    let soma = 0
    for ( i in arguments) { // recuperando os parametros passados a partir de 'arguments' e somando cada um deles ao valor de 'soma'
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "texto"))
console.log(soma("a", "b", "c"))
