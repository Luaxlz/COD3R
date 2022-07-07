function carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if ( velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())


//####################################################3
function bancoDeHoras (horasAnterior, horasContabilizadas) {
    let horasTotais = horasAnterior + horasContabilizadas
    if (horasTotais < 0) {
        console.log(`Funcionário com banco negativo de ${horasTotais}hrs`)
    } else if (horasTotais > 0) {
        console.log(`Funcionário com banco positivo de ${horasTotais}hrs`)
    } else {
        console.log("Funcionário não possui banco de horas.")
    }
}

bancoDeHoras(3.52, 7.58)