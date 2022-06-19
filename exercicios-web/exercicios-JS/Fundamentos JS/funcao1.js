// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b); //Imprime no console a soma de a + b
};

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

// Função com retorno
function soma(a, b = 1) {
    return a + b // Não imprime no console e sim retorna o valor da soma de a + b.
}

console.log(soma(2, 3))
console.log(soma(2))