// Operador Rest(juntar) e Spread(espalhar)
//usar rest com parametro de função

//usar Spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar Spread em array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)