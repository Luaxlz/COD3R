//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
// const matematicaBasica = function (num1 = 0, num2 = 0) {
//     if ( isNaN(num1) === false && isNaN(num2) === false ) {
//         console.log(`A soma dos parâmetros é ${num1 + num2}, a subtração é ${num1 - num2}, a multiplicação é ${num1 * num2} e a divisão é ${num1 / num2}`)
//     } else {
//         console.log("Infelizmente o dado informado não é um número válido.")
//     }
// }

// matematicaBasica("pipoca", 50)

// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).
// const tipoTringulo = (lado1, lado2, lado3) => {
//     if(lado1 === lado2 && lado2 === lado3) {
//         console.log("Todos os lados são iguais, este é um triangulo Equilátero.")
//     } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
//         console.log("Dois lados iguais, logo é um triangulo Isósceles.")
//     } else {
//         console.log("Nenhum lado igual, este é um triangulo Escaleno.")
//     }
// }

// tipoTringulo(1, 1, 1)
// tipoTringulo(2, 1, 1)
// tipoTringulo(1, 2, 1)
// tipoTringulo(1, 1, 2)
// tipoTringulo(2, 1, 3)

// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
// const calcExpoente = (base, expoente) => {
//     return console.log(`a base ${base} elevada ao expoente ${expoente} é igual à ${Math.pow(base, expoente)}.`)
// }

// calcExpoente(7, 2)
// calcExpoente(4, 0.5)
// calcExpoente(7, -2)
// calcExpoente(-7, 2)
// calcExpoente(-7, 1/3)

// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.
// const divResto = (dividendo, divisor) => {
//     return console.log(`O resultado da divisão é ${dividendo / divisor} e o resto dessa divisão é ${dividendo % divisor}.`)
// }

// divResto(4, 2)
// divResto(5, 2)
// divResto(37, 3)

// 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
// seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
// importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
// um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
// que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto)

// const formataValor = num => {
//     num = num.toFixed(2)
//     return console.log(`R$${num.replace('.', ',')}`)
// }
// formataValor(0.30000000000000004)

// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

//Juros simples:
// const investSimples = (capitalInicial, taxJuros, tempoAplicado) => {
//     let montante = capitalInicial + (capitalInicial * taxJuros * tempoAplicado)
//     return console.log(`O montante da aplicação financeira sob o regime de juros simples é de R$${montante}.`)
// }
// investSimples(100, 0.1, 5)

// //Juros Compostos:
// const investComposto = (capitalInicial, taxJuros, tempoAplicado) => {
//     let montante = capitalInicial * Math.pow((1 + taxJuros), tempoAplicado)
//     return console.log(`O montante da aplicação financeira sob o regime de juros compostos é de R$${montante.toFixed(2)}.`)
// }
// investComposto(100, 0.1, 5)