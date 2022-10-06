
const primeiroElemento = arrayOuString => {
    return arrayOuString[0]
}

const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(resolve => {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
}).then(primeiroElemento).then(primeiroElemento).then(letraMinuscula).then(console.log)