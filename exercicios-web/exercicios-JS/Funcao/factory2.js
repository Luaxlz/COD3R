//Criar uma função factory com parametros personalidados
//criarProduto irá receber nome e preço e desconto fixo

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.5,
        precoFinal: preco * 0.5
    }
}

console.log(criarProduto("Zaomi", 1000))
console.log(criarProduto("Durepoxi", 15))