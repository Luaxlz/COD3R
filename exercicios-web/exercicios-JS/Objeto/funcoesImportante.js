const pessoa = {
    nome: "rebeca",
    idade: 2,
    peso: 13,
}

console.log(Object.keys(pessoa)) //Retorna todas as chaves(ou nome de atributos) de um objeto
console.log(Object.values(pessoa)) //Retorna os valores dos atribudos de um objeto
console.log(Object.entries(pessoa)) // Retorna um array com todas as chavez e valores de um objeto
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: false,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
