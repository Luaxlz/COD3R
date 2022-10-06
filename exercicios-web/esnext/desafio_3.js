
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

// function exibirConteudo(_, conteudo) {
//     console.log(conteudo.toString())
// }

// fs.readFile(caminho, exibirConteudo)


function lerData(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function lerArquivo(err, conteudo) {
            const conteudoFinal = conteudo.toString()
            resolve(conteudoFinal)
        })
    })
}

lerData(caminho).then(console.log)