let a = 3

global.b = 123
this.c = 456

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports.c === this)
console.log(module.exports)

//Criando uma variavel maluca: sem usar VAR ou LET!!
abc = 3 // não faça isso em casa
console.log(global.abc)

//module.exports = {e: 456, f: false, g: "teste"}