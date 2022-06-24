function tratarErroELancar(erro) {
    // throw new Error("...")
    // throw 10
    // throw true
    // throw "Deu merda ai em"
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("Finalizou")
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)