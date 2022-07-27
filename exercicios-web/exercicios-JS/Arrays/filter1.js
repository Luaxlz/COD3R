const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true },
    {nome: 'iPad Pro', preco: 4199, fragil: true },
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    {nome: 'Copo de plástico', preco: 18.99, fragil: false },
]

console.log(produtos.filter(function(p) {
    return false
}))

const produtosFrageisECaros = p => p.fragil && p.preco > 500
console.log(produtos.filter(produtosFrageisECaros))