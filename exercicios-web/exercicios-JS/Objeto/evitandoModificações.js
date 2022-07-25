//Object.preventExtensions
//Não vai permitir que o objeto seja extendido, ou seja, não será possível aumentar o número de atributos do objeto. Porém será permitido modificar ou deletar atributos existentes.
const Produto = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99, tag: "promoção"
})
console.log("Extensivel:", Object.isExtensible(Produto))

Produto.nome = "Borracha"
Produto.descricao = "Borracha de apagar"
delete Produto.tag
console.log(Produto)

//Object.seal
//Impede a adição de novos atributos, impede que atributos sejam excluidos porém ainda é possível modificar valores.
const pessoa = {nome: "Juliana", idade: 35}
Object.seal(pessoa)
console.log("Selado: ", Object.isSealed(pessoa))
pessoa.sobrenome = "Silva"
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze
//Impede adição e remoção de atributos assim como a modificação dos mesmos.
const prod1 = {
    
}