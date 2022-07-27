const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Massa quebrou o carro! Remove o ultimo elemento do array.
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona um novo elemento na ultima posição.
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento!
console.log(pilotos)

pilotos.unshift('Hamilton')//Adiciona um elemento no começo do array
console.log(pilotos)

// Splice pode tanto adicionar quando remover elementos.

//Adicionar:
pilotos.splice(2, 0, 'bottas', 'Massa')
console.log(pilotos)

//Remover:
pilotos.splice(3, 1) // Massa quebrou novamente...
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Retorna um novo array a partir do elemento indicado.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)