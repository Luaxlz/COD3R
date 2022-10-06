// let e var
{
    var a = 2 // Possui escopo global e de função
    let b = 3 // Possui escopo de bloco
    console.log(b)
}
console.log(a)

//Template string
const produto = 'Ipad'
console.log(`${produto} é caro!`)

//destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade, nome} = {nome: 'ana', idade: 9}
console.log(idade, nome)