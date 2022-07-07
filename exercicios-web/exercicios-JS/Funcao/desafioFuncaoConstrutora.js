// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }

//     falar() {
//         console.log(`Meu nome é ${this.nome}`)
//     }
// }

// const p1 = new Pessoa("João")
// p1.falar()

function criarPessoa (nome) {
    return {
        nome,
        falar: falar => {console.log(`Meu nome é ${nome}`)}
    }
}

p1 = criarPessoa("Josias")
console.log(p1)
p1.falar()