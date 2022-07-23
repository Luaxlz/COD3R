//pessoa -> 123 -> {...}
const pessoa = {nome: "João"}
pessoa.nome = "Pedro"
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: "Ana"}

Object.freeze(pessoa) //Congela o objeto que foi passado para a função freeze, impedindo qualquer tipo de modificação a ela.

pessoa.nome = "Maria"
pessoa.end = "Rua ABC"
delete pessoa.nome

console.log(pessoa)

const pessoaConstante = Object.freeze({nome: "Fricas"})

pessoaConstante.nome = "Maria"
console.log(pessoaConstante)