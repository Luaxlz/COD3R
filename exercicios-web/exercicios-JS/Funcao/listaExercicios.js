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

// 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.
// const bhaskara = (ax2, bx, c) => {
//     let delta = (Math.pow(bx, 2) - (4 * ax2 * c))
//     let x1
//     let x2
//     let resultado = []
//     if (delta < 0) {
//         console.log("Delta é negativo.")
//     } else if (delta === 0) {
//         x1 = ((-bx) + (Math.sqrt(delta))) / 2 * ax2
//         resultado = [x1, x1]
//         console.log(resultado)

//     } else {
//         x1 = ((-bx) + (Math.sqrt(delta))) / (2 * ax2)
//         x2 = ((-bx) - (Math.sqrt(delta))) / (2 * ax2)
//         resultado.push(x1.toFixed(2), x2.toFixed(2))
//         console.log(resultado)
//     }
// }

// bhaskara(3, -5, 12)

// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).
// let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

// const desempenhoJogos = (stringPontuacoes) => {
//     let pontuacao = stringPontuacoes.split(", ")
//     let melhorPonto = pontuacao[0]
//     let piorPonto = pontuacao[0]
//     let vezesRecorde = 0
//     let piorJogo = 0
//     for(let i = 1; i < pontuacao.length; i++) {
//             if (pontuacao[i] > melhorPonto) {
//                 melhorPonto = pontuacao[i]
//                 vezesRecorde++
//             } else if(pontuacao[i] < piorPonto) {
//                 piorPonto = pontuacao[i]
//                 piorJogo = i + 1
//             }
//         }
//     return [vezesRecorde, piorJogo]
// }

// console.log(desempenhoJogos(stringPontuacoes))

// 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
// classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
// possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
// que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
// arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
// 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
// seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
// e o aluno será aprovado.
// const sistemaNotas = (nota) => {
//     if(nota > 100 || nota < 0) {
//         console.log(`Nota inválida.`)
//     } else if(nota < 38) {
//         console.log(`Aluno reprovado com nota ${nota}`)
//     } else if( nota >= 98) {
//         nota = 100
//     } else if(nota >= 93 && nota < 95) {
//         nota = 95
//         console.log(`Aluno aprovado com nota ${nota}`)
//     } else if (nota >= 88 && nota < 90) {
//         nota = 90
//         console.log(`Aluno aprovado com nota ${nota}`)
//     } else if (nota >= 83 && nota < 85) {
//         nota = 85
//         console.log(`Aluno aprovado com nota ${nota}`)
//     } else if (nota >= 78 && nota < 80) {
//         nota = 80
//         console.log(`Aluno aprovado com nota ${nota}`)
//     } else if (nota >= 73 && nota < 75) {
//         nota = 75
//         console.log(`Aluno aprovado com nota ${nota}`)
//     } else if (nota >= 68 && nota < 70) {
//         nota = 70
//         console.log(`Aluno aprovado com nota ${nota}`)
//     } else if (nota >= 63 && nota < 65) {
//         nota = 65
//         console.log(`Aluno aprovado com nota ${nota}`)
//     } else if (nota >= 58 && nota < 60) {
//         nota = 60
//         console.log(`Aluno aprovado com nota ${nota}`)
//     } else if (nota >= 53 && nota < 55) {
//         nota = 55
//         console.log(`Aluno aprovado com nota ${nota}`)
//     } else if (nota >= 48 && nota < 50) {
//         nota = 50
//         console.log(`Aluno aprovado com nota ${nota}`)
//     } else if (nota >= 43 && nota < 45) {
//         nota = 45
//         console.log(`Aluno aprovado com nota ${nota}`)
//     } else if (nota >= 38 && nota < 40) {
//         nota = 40
//         console.log(`Aluno aprovado com nota ${nota}`)
//     } else {
//         console.log(`Aluno aprovado com nota ${nota}`)
//     }
// }

// sistemaNotas(38)