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

// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.
// const verificaDiv3 = (numero) => {
//     if( numero % 3 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(verificaDiv3(10))

// 11) As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto;
// De 100 em 100 anos não é ano bissexto;
// De 400 em 400 anos é ano bissexto;
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false.
// const anoBissexto = (ano) => {
//     let teste1 = ano % 4
//     let teste2 = ano % 100
//     let teste3 = ano % 400
//     if(teste3 === 0) {
//         return true
//     } else if (teste1 === 0 && teste2 !== 0) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(anoBissexto(2015))
// console.log(anoBissexto(2016))

// 12) Faça um algoritmo que calcule o fatorial de um número.
// const fatorial = (numero) => {
//     let resultado = numero
//     for(let i = 1; i < numero; i++) {
//         resultado *= i
//     }
//     return resultado
// }

// console.log( fatorial(5))

// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
// const diaUtil = (dia) => {
//     if( dia > 0 && dia < 31) {
//         switch(dia) {
//             case 1: case 8: case 15: case 22: case 29: case 7: case 14: case 21: case 28:
//                 return "Fim de semana"
//                 break
//             default:
//                 return "Dia útil"
//         }
//     } else {
//         return "Dia informádo inválido."
//     }
// }
// console.log(diaUtil(20))

// 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
// casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
// escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
// também um default, que retornará uma mensagem de erro no console.
// const switchFrutas = (fruta) => {
//     switch(fruta) {
//         case "maçã":
//             return "Não vendemos esta fruta aqui."
//             break
//         case "kiwi":
//             return "Estamos com escassez de kiwis."
//             break
//         case "melancia":
//             return "Aqui está, são 3 reais o quilo."
//         default:
//             return "Erro, dado inválido."
//     }
// }

// console.log(switchFrutas("kiwi"))

// 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
// possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
// comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
// que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
// “Não trabalhamos com este tipo de automóvel aqui”.
// const revendedora = (modeloCarro) => {
//         switch(modeloCarro) {
//             case "hatch":
//                 return "Compra efetuada com sucesso."
//                 break
//             case "sedan": case "motocicleta": case "caminhonete":
//                 return "Tem certeza que não prefere este modelo?"
//                 break
//             default:
//                 return "Não trabalhamos com este tipo de automóvel aqui."
//             }
//     }
//  console.log(revendedora("ccc"))

// 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
// const calculadora = (num1, operador, num2) => {
//     switch(operador) {
//         case "+":
//             return num1 + num2
//             break
//         case "-":
//             return num1 - num2
//             break
//         case "*":
//             return num1 * num2
//             break
//         case "/":
//             return num1 / num2
//             break
//         default:
//             return "valores inválidos."
//     }
// }
// console.log(calculadora(1, "+", 11))

// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
// const aumentoSalario = (planoTrabaho, salarioAtual) => {
//     switch(planoTrabaho) {
//         case "A": case "a":
//             return salarioAtual + (salarioAtual * 0.1)
//             break
//         case "B": case "b":
//             return salarioAtual + (salarioAtual * 0.15)
//             break
//         case "C": case "c":
//             return salarioAtual + (salarioAtual * 0.20)
//             break
//         default:
//             return "Plano inválido."
//     }
// }
// console.log(aumentoSalario("c", 1000))
// console.log(aumentoSalario("A", 1000))
// console.log(aumentoSalario("B", 1000))
// console.log(aumentoSalario("fs", 1000))

// 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
// switch. Crie um case default que escreva ‘Número fora do intervalo.’
// const extenso = (numero) => {
//     switch(numero) {
//         case 0:
//             return "Zero"
//             break
//         case 1:
//             return "Um"
//             break
//         case 2:
//             return "Dois"
//             break
//         case 3:
//             return "Três"
//             break
//         case 4:
//             return "Quatro"
//             break
//         case 5:
//             return "Cinco"
//             break
//         case 6:
//             return "Seis"
//             break
//         case 7:
//             return "Sete"
//             break
//         case 8:
//             return "Oito"
//             break
//         case 9:
//             return "Nove"
//             break
//         case 10:
//             return "Dez"
//             break
//         default:
//             return "Número fora do intervalo aceito."
//             break
//     }
// }
// console.log(extenso(0))
// console.log(extenso(1))
// console.log(extenso(2))
// console.log(extenso(3))
// console.log(extenso(4))
// console.log(extenso(5))
// console.log(extenso(6))
// console.log(extenso(7))
// console.log(extenso(8))
// console.log(extenso(9))
// console.log(extenso(10))
// console.log(extenso(11))

// 19) O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço
// 100 Cachorro Quente R$ 3,00
// 200 Hambúrguer Simples R$ 4,00
// 300 Cheeseburguer R$ 5,50
// 400 Bauru R$ 7,50
// 500 Refrigerante R$ 3,50
// 600 Suco R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.
// const aceitaPedido = (codigoItem, qtde) => {
//     switch(codigoItem) {
//         case 100:
//             return `O valor para ${qtde} cachorro(s) quente(s) é de R$${qtde * 3}`
//             break
//         case 200:
//             return `O valor para ${qtde} Hamburquer(es) simples é de R$${qtde * 4}`
//             break
//         case 300:
//             return `O valor para ${qtde} Cheeseburguer(s) é de R$${qtde * 5.5}`
//             break
//         case 400:
//             return `O valor para ${qtde} Bauru(s) é de R$${qtde * 7.5}`
//             break
//         case 500:
//             return `O valor para ${qtde} refrigerante(s) é de R$${qtde * 3.5}`
//             break
//         case 600:
//             return `O valor para ${qtde} Suco(s) é de R$${qtde * 2.8}`
//             break
//             default:
//                 return "Produto não existente."
//     }
// }
// console.log(aceitaPedido(100, 10))
// console.log(aceitaPedido(200, 10))
// console.log(aceitaPedido(300, 10))
// console.log(aceitaPedido(400, 10))
// console.log(aceitaPedido(500, 10))
// console.log(aceitaPedido(600, 10))
// console.log(aceitaPedido(700, 10))

// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
// const sacarDinheiro = (valorSaque) => {
//     let contador100 = 0
//     let contador50 = 0
//     let contador10 = 0
//     let contador5 = 0
//     let contador1 = 0
//     let valorNota = calculaValorNota(valorSaque)
//     while (valorSaque >= valorNota) {
//         switch(valorNota) {
//             case 100:
//                 valorSaque -= 100
//                 contador100++
//                 break
//             case 50:
//                 valorSaque -= 50
//                 contador50++
//                 break
//             case 10:
//                 valorSaque -= 10
//                 contador10++
//                 break
//             case 5:
//                 valorSaque -= 5
//                 contador5++
//                 break
//             case 1:
//                 contador1++
//                 valorSaque -= 1
//                 break
//         }
//         valorNota = calculaValorNota(valorSaque)
//     }
//     return elaboraResultado(contador100, contador50, contador10, contador5, contador1)
// }

// const calculaValorNota = (valorSaque) => {
//     if(valorSaque >= 100) {
//         return 100
//     } else if(valorSaque >= 50) {
//         return 50
//     } else if(valorSaque >= 10) {
//         return 10
//     } else if(valorSaque >= 5) {
//         return 5
//     } else if (valorSaque >= 1) {
//         return 1
//     }
// }

// const elaboraResultado = (contador100, contador50, contador10, contador5, contador1) => {
//     let resultado = ""
//     if (contador100 > 0) {
//         resultado += `${contador100} nota(s) de R$ 100. `
//     }

//     if (contador50 > 0) {
//         resultado += `${contador50} nota(s) de R$ 50. `
//     }

//     if (contador10 > 0) {
//         resultado += `${contador10} nota(s) de R$ 10. `
//     }

//     if (contador5 > 0) {
//         resultado += `${contador5} nota(s) de R$ 5. `
//     }

//     if (contador1 > 0) {
//         resultado += `${contador1} nota(s) de R$ 1. `
//     }
//     return resultado
// }

// console.log(sacarDinheiro(7))

// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
// function identificaValorPlanoSaude(idade) {
//     let valorPlano = 100
//     if(idade < 10) {
//         valorPlano += 80
//         return `Crianças abaixo de 10 anos pagam R$100 fixos mais um adicional de R$80, totalizando R$${valorPlano}`
//     } else if (idade >= 10 && idade <= 30) {
//         valorPlano += 50
//         return `conveniados com idade entre 10 e 30 anos pagam R$100 fixos mais um adicional de R$50, totalizando R$${valorPlano}`
//     } else if (idade > 30 && idade <= 60) {
//         valorPlano += 95
//         return `conveniados com idade acima de 30 e até 60 anos pagam R$100 fixos mais um adicional de R$95, totalizando R$${valorPlano}`
//     } else if(idade > 60) {
//         valorPlano += 130
//         return `conveniados com idade acima 60 anos pagam R$100 fixos mais um adicional de R$130, totalizando R$${valorPlano}`
//     }
// }
// console.log(identificaValorPlanoSaude(80))

// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
// function calculaAnuidade(mes, anuidade) {
//     let anuidadeAtualizada = anuidade
//     let taxJuros = 0.05
//     let qtdeMeses = 0
//     switch(mes) {
//         case 1: case 01:
//             return `O valor da anuidada a ser pago no mês de Janeiro é de R$${anuidade}`
//             break
//         case 2: case 02:
//             qtdeMeses = 1
//             anuidadeAtualizada = anuidade * Math.pow((1 + taxJuros), qtdeMeses)
//             return `O valor da anuidada a ser pago no mês de Fevereiro é de R$${anuidadeAtualizada.toFixed(2)}`
//             break
//         case 3: case 03:
//             qtdeMeses = 2
//             anuidadeAtualizada = anuidade * Math.pow((1 + taxJuros), qtdeMeses)
//             return `O valor da anuidada a ser pago no mês de Março é de R$${anuidadeAtualizada.toFixed(2)}`
//             break
//         case 4: case 04:
//             qtdeMeses = 3
//             anuidadeAtualizada = anuidade * Math.pow((1 + taxJuros), qtdeMeses)
//             return `O valor da anuidada a ser pago no mês de Abril é de R$${anuidadeAtualizada.toFixed(2)}`
//             break
//         case 5: case 05:
//             qtdeMeses = 4
//             anuidadeAtualizada = anuidade * Math.pow((1 + taxJuros), qtdeMeses)
//             return `O valor da anuidada a ser pago no mês de Maio é de R$${anuidadeAtualizada.toFixed(2)}`
//             break
//         case 6: case 06:
//             qtdeMeses = 5
//             anuidadeAtualizada = anuidade * Math.pow((1 + taxJuros), qtdeMeses)
//             return `O valor da anuidada a ser pago no mês de Junho é de R$${anuidadeAtualizada.toFixed(2)}`
//             break
//         case 7: case 07:
//             qtdeMeses = 6
//             anuidadeAtualizada = anuidade * Math.pow((1 + taxJuros), qtdeMeses)
//             return `O valor da anuidada a ser pago no mês de Julho é de R$${anuidadeAtualizada.toFixed(2)}`
//             break
//         case 8: case 08:
//             qtdeMeses = 7
//             anuidadeAtualizada = anuidade * Math.pow((1 + taxJuros), qtdeMeses)
//             return `O valor da anuidada a ser pago no mês de Agosto é de R$${anuidadeAtualizada.toFixed(2)}`
//             break
//         case 9: case 09:
//             qtdeMeses = 8
//             anuidadeAtualizada = anuidade * Math.pow((1 + taxJuros), qtdeMeses)
//             return `O valor da anuidada a ser pago no mês de Setembro é de R$${anuidadeAtualizada.toFixed(2)}`
//             break
//         case 10: case 10:
//             qtdeMeses = 9
//             anuidadeAtualizada = anuidade * Math.pow((1 + taxJuros), qtdeMeses)
//             return `O valor da anuidada a ser pago no mês de Outubro é de R$${anuidadeAtualizada.toFixed(2)}`
//             break
//         case 11: case 11:
//             qtdeMeses = 10
//             anuidadeAtualizada = anuidade * Math.pow((1 + taxJuros), qtdeMeses)
//             return `O valor da anuidada a ser pago no mês de Novembro é de R$${anuidadeAtualizada.toFixed(2)}`
//             break
//         case 12: case 12:
//             qtdeMeses = 11
//             anuidadeAtualizada = anuidade * Math.pow((1 + taxJuros), qtdeMeses)
//             return `O valor da anuidada a ser pago no mês de Dezembro é de R$${anuidadeAtualizada.toFixed(2)}`
//             break
//     }
// }

// console.log(calculaAnuidade(2, 588))

// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
// function calculaMedia(codAluno, nota1, nota2, nota3) {
//     let notaMaior = 0
//     let notaMenor1 = 0
//     let notamenor2 = 0
//     let mediaFinal = 0
//     let resultadoFinal = ""
//     if (nota1 > nota2 && nota1 > nota3) {
//         notaMaior = nota1
//         notaMenor1 = nota2
//         notamenor2 = nota3
//     } else if( nota2 > nota3 && nota2 > nota1) {
//         notaMaior = nota2
//         notaMenor1 = nota1
//         notamenor2 = nota3
//     } else if( nota3 > nota1 && nota3 > nota2) {
//         notaMaior = nota3
//         notaMenor1 = nota1
//         notamenor2 = nota2
//     }
//     notaMaior *= 4
//     notaMenor1 *= 3
//     notamenor2 *= 3
//     mediaFinal = (notaMaior + notaMenor1 + notamenor2) / 10

//     if(mediaFinal >= 5) {
//         resultadoFinal = "APROVADO"
//     } else {
//         resultadoFinal = "REPROVADO"
//     }

//     return `Código do aluno: ${codAluno} - Nota 1: ${nota1} - Nota 2: ${nota2} - Nota 3: ${nota3}; Média calculada: ${mediaFinal.toFixed(2)} ALUNO ${resultadoFinal}.`
// }

// function getInteiroAleatorioEntre(min, max) {
//     const valor = Math.random() * (max - min) + min
//     return Math.floor(valor)
// }

// do {
//     codAluno = getInteiroAleatorioEntre(-1, 10)
//     nota1 = getInteiroAleatorioEntre(1, 10)
//     nota2 = getInteiroAleatorioEntre(1, 10)
//     nota3 = getInteiroAleatorioEntre(1, 10)
//     console.log(calculaMedia(codAluno, nota1, nota2, nota3))
// } while (codAluno != -1) 

// 24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.
// let contador = 0
// while(contador < 11) {
//     console.log(contador + 1," Hello World!")
//     contador++
// }

// 25) Escrever um programa para exibir os números de 1 até 50 na tela.
// let numero = 1
// while(numero <= 50) {
//     console.log(numero)
//     numero++
// }
// 26) Fazer um programa para encontrar todos os pares entre 1 e 100.
// let numero = 1
// while(numero <= 100) {
//     if(numero % 2 === 0) {
//         console.log(numero)
//         numero++
//     } else {
//         numero++
//     }
// }

// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
// function calcAltura( altura1, taxaDeCrescimento1, altura2, taxaDeCrescimento2) {
//     let criançaMenor
//     let contadorAnos = 0

//     if(altura1 < altura2) {
//         criançaMenor = altura1

//         if(taxaDeCrescimento1 > taxaDeCrescimento2) {
//             while (altura1 <= altura2) {
//             altura1 += taxaDeCrescimento1
//             altura2 += taxaDeCrescimento2
//             contadorAnos++
//             }
//             return `A criança menor ultrapassara a maior em ${contadorAnos} anos, a criança menor terá ${altura1.toFixed(2)}cm e a outra terá ${altura2.toFixed(2)}cm`
//         } else {
//             return "A criaça menor nunca ultrapassará a criança maior."
//         }
//     } else if (altura2 < altura1) {
//         criançaMenor = altura2
//         if(taxaDeCrescimento2 > taxaDeCrescimento1) {
//             while (altura2 <= altura1) {
//             altura1 += taxaDeCrescimento1
//             altura2 += taxaDeCrescimento2
//             contadorAnos++
//             }
//             return `A criança menor ultrapassara a maior em ${contadorAnos} anos, a criança menor terá ${altura2.toFixed(2)}cm e a outra terá ${altura1.toFixed(2)}cm`
//         } else {
//             return "A criaça menor nunca ultrapassará a criança maior."
//         }
        

//     } else {
//         return "Alturas iguais."
//     }
// }

// console.log(calcAltura(115, 12, 113, 12.1))

// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
// function contaParesVetor(vetorNum =[]) {
//     let contadorPares = 0
//     for (let i = 0; i < vetorNum.length; i++) {
//         if (vetorNum[i] % 2 === 0) {
//         contadorPares++
//         }
//     }
//     return `Existem ${contadorPares} números pares neste vetor informado.`
// }
// console.log(contaParesVetor([1, 2, 3, 4, 5, 6, 7, 8, 2, 8, 6, 12]))

// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.
// function contaIntervalos(vetorNum = []) {
//     let conta10E20 = 0
//     let contaFora = 0
//     for(let i = 0; i < vetorNum.length; i++) {
//         if( vetorNum[i] === 10 || vetorNum[i] === 20) {
//             conta10E20++
//         } else {
//             contaFora++
//         }
//     }
//     return `No vetor informado ${conta10E20} número(s) estão no intervalo [10, 20] e ${contaFora} número(s) estão fora deste intervalo`
// }

// console.log(contaIntervalos([10, 10, 20, 10, 1]))

// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

// function contaVetor(vetorNum = []) {
//     let maiorNum = vetorNum[0]
//     let menorNum = vetorNum[0]
//     for(let i = 0; i < vetorNum.length; i++) {
//         if (vetorNum[i] > maiorNum) {
//             maiorNum = vetorNum[i]
//         } else if(vetorNum[i] < menorNum) {
//             menorNum = vetorNum[i]
//         }
//     }
//     return `O menor valor encontrado no vetor foi ${menorNum} e o maior foi ${maiorNum}.`
// }
// console.log(contaVetor([1, 2, 3, 4, 5, 9, 0]))

// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.
// function percorreVetor(vetorNum = []) {
//     let negativos = 0
//     for(let i = 0; i < vetorNum.length; i++) {
//         if(vetorNum[i] < 0) {
//             negativos++
//         }
//     }
//     return `Contei ${negativos} número(s) negativo(s) neste vetor.`
// }
// console.log(percorreVetor([-1, -2, 3, -4, 5, -6, 7, 8, -9, 41, -55]))
