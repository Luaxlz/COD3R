function gerarNumeroEntre(min, max, numerosPoibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject)=> {
        const fator = max - min +1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosPoibidos.includes(aleatorio)){
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

function gerarMegaSena(qtNumeros) {
    const numeros = []
    for(let _ of Array(10).fill()) {

    }
}

gerarNumeroEntre(1, 5, [1, 2, 4]).then(console.log).catch(console.log)