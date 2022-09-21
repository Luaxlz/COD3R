const contadorA = require('./instanciaUnica') // retorna um objeto
const contadorB = require('./instanciaUnica') // retorna um objeto

const contadorC = require('./instanciaNova')() // retorna uma função factory
const contadorD = require('./instanciaNova')() // retorna uma função factory

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)