// O padrão callback ( ou observer) é usado quando você passa uma função e acontece algum tipo de evento que faz com que essa função seja chamada novamente.
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a) { //neste caso o parametro "a" será cada um dos elementos do array.
    console.log(a)
})
fabricantes.forEach((a) => console.log(a))

// Um callback nada mais é do que passar uma função e essa função retornar quando algum evento acontecer, nesse caso sempre que ler um elemento do array.