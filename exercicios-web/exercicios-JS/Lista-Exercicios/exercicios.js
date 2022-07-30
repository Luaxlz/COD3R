// ; Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.
// function cumprimentar(texto) {
//     console.log(`Olá, ${texto}!`)
// }
// cumprimentar('me chamo Leopoldino')

// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
// const anosParaDias = idade => {
//     let idadeEmdias = idade * 365
//     return `Idade em dias: ${idadeEmdias.toFixed(2)}!`
// }
// console.log(anosParaDias(10))

// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ Х", em que Х é o quanto o funcionário ganhou no mês.
// const calculaSalario = (horasTrabalhadas, salarioHora) => {
//     console.log(`Salário igual a R$ ${(horasTrabalhadas * salarioHora).toFixed(2)}`)
// }
// calculaSalario(150, 40.5)

// Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
// const retornaMes = num => {
//     switch(num) {
//         case 1: case 01:
//             console.log('Janeiro')
//             break
//         case 2: case 02:
//             console.log('Fevereiro')
//             break
//         case 3: case 03:
//             console.log('Março')
//             break
//         case 4: case 04:
//             console.log('Abril')
//             break
//         case 5: case 05:
//             console.log('Maio')
//             break
//         case 6: case 06:
//             console.log('Junho')
//             break
//         case 7: case 07:
//             console.log('Julho')
//             break
//         case 8: case 08:
//             console.log('Agosto')
//             break
//         case 9: case 09:
//             console.log('Setembro')
//             break
//         case 10:
//             console.log('Outubro')
//             break
//         case 11:
//             console.log('Novembro')
//             break
//         case 12:
//             console.log('Dezembro')
//             break
//         default:
//             console.log('Dado Inválido')
//             break
//     }
// }

// retornaMes(111)

// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. 
// const comparaNum = (num1, num2) => {
//     if(num1 > num2) {
//         return 'O primeiro número é maior que o segundo.'
//     } else if(num1 === num2) {
//         return 'O primeiro número é igual ao segundo.'
//     } else {
//         return 'O segundo número é maior que o primeiro.'
//     }
// }
// console.log(comparaNum(1, 2),comparaNum(2, 2),comparaNum(2, 1))

// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".
// const booleanOuNum = valor => {
//     if(typeof(valor) == 'boolean') {
//         return !valor
//     } else if(typeof(valor) == 'number') {
//         return valor * (- 1)
//     } else {
//         return `Booleano ou número esperados, porém o parâmetro é do tipo ${typeof(valor)}`
//     }
// }
// console.log(booleanOuNum(false))
// console.log(booleanOuNum(true))
// console.log(booleanOuNum(10))
// console.log(booleanOuNum(-10))
// console.log(booleanOuNum('pipoca'))

// Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo.
// const comparaNum = (num, min, max, inclusivo = false) => {
//     if(inclusivo === true) {
//         if(num >= min && num <= max) {
//             return `Número informado(${num}) está entre o minimo(${min}) e o máximo(${max}) informado.`
//         } else {
//             return `Número informado(${num}) não está entre o minimo(${min}) e o máximo(${max}) informado.`
//         }
//     } else if(inclusivo === false) {
//         if(num > min && num < max) {
//             return `Número informado(${num}) é maior que o minimo(${min}) e menor que o máximo(${max}) informado.`
//         } else {
//             return `Número informado(${num}) não é maior que o minimo(${min}) e menor que o máximo(${max}) informado.`
//         }
//     } else {
//         return 'Dados informados incorretos.'
//     }
// }
// console.log(comparaNum(50, 25, 100, true))
// console.log(comparaNum(150, 25, 100, true))
// console.log(comparaNum(50, 25, 100, false))
// console.log(comparaNum(150, 25, 100))

// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.
// const multiplica = (num1, num2) => {
//     let resultado = 0
//     if(num1 === 0 || num2 === 0) {
//         return 'Resultado da multiplicação é 0.'
//     } else if(num1 < 0 || num2 < 0) {
//         return 'Número informado é menor que zero.'
//     } else {
//         for (let i = 0; i < num2; i++) {
//             resultado += num1
//         }
//     }
//     return `Resultado da multiplicação é ${resultado}.`
// }
// console.log(multiplica(2, 5))
// console.log(multiplica(-55, 5))
// console.log(multiplica(0, 5))

// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.
// const repetir = (elemento, repeticoes) => {
//     const newArray = []
//     for(let i = 0; i< repeticoes; i++) {
//         newArray.push(elemento)
//     }
//     return newArray
// }
// console.log(repetir('código', 2))
// console.log(repetir(7, 3))

//Elabore uma função que recebe um número como parametro e retorne uma string com o símbolo + na quantidade especificada no parametro
// const simboloMais = num => {
//     let resultado = '"'
//     for(let i = 0; i < num; i++) {
//         if(i === (num - 1)) {
//             resultado += '+"'
//         } else {
//             resultado += '+'
//         }
//     }
//     return resultado
// }
// console.log(simboloMais(2))
// console.log(simboloMais(4))

// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array
// const primeiroEUltimo = array => {
//     let newArray = [array[0]]
//     for(let i = 0; i < array.length; i++) {
//         if(i == (array.length - 1)) {
//             newArray.push(array[i])
//         }
//     }
//     return newArray
// }
// console.log(primeiroEUltimo([7, 14, 'Olá']))
// console.log(primeiroEUltimo([-100, 'Aplicativo', 16]))

// Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a mesma.
// Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
// Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro.
// const removePropriedade = (objeto, propriedade) => {
//     const newObj = objeto
//     delete newObj[propriedade]
//     return newObj
// }
// console.log(removePropriedade({a: 1, b: 2}, 'a'))
// console.log(removePropriedade({id: 20, nome: 'Caneta', descricao: 'Sem descrição'}, 'descricao'))

// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.
// const filtraNumeros = e => typeof(e) == 'number'
// const displayFiltro = array => {
//     return array.filter(filtraNumeros)
// }
// console.log(displayFiltro(['JavaScript', 1, '3', 'web', 20]))
// console.log(displayFiltro(['a', 'c']))

// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os exemplos abaixo para um melhor entendimento:
// const objetoParaArrays = objeto => {
//     return Object.entries(objeto)
// }
// console.log(objetoParaArrays({nome: 'Maria', profissao: 'Dev'}))
// console.log(objetoParaArrays({codigo: 11111, preco: 12000}))

// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.
// const pares = (elemento, indice) => elemento % 2 === 0 && indice % 2 === 0
// const retornaPares = array => {
//     return array.filter(pares)
// }
// console.log(retornaPares([1, 2, 3, 4]))
// console.log(retornaPares([10, 70, 22, 43]))

// A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais. Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100, exceto se for também múltiplo de 400. Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não.
// const anoBissexto = ano => {
//     if(ano % 400 === 0) {
//         return `O ano ${ano} é bissexto!`
//     } else if( ano % 100 === 0) {
//         return `O ano ${ano} não é bissexto!`
//     } else if(ano % 4 === 0) {
//         return `O ano ${ano} é bissexto!`
//     } else {
//         return `O ano ${ano} não é bissexto!`
//     }
// }
// console.log(anoBissexto(2020))
// console.log(anoBissexto(2100))

// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. 
// const soma = (acumulador, atual) => acumulador + atual
// const somaArray = array => array.reduce(soma)
// console.log(somaArray([10, 10, 10]))
// console.log(somaArray([15, 15, 15, 15]))

// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas. Crie uma função que receba um array de produtos e retorne o total das despesas.
// const encontraPreco = e => e.preco
// const somaDespesas = (acumulador, atual) => acumulador + atual
// const totalDespesas = array => {
//     return array.map(encontraPreco).reduce(somaDespesas)
// }
// console.log(totalDespesas([
//     {nome: 'Jornal Online', categoria: 'Informação', preco: 89.99},
//     {nome: 'Cinema', categoria: 'Entreterimento', preco: 150}
// ]))
// console.log(totalDespesas([
//     {nome: 'Galaxy S20', categoria: 'Eletronicos', preco: 3599.99},
//     {nome: 'Macbook Pro', categoria: 'Eletronicos', preco: 30999.90}
// ]))

// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário. Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números.
// const somaArray = (acumulador, atual) => acumulador + atual
// const getMedia = array => array.reduce(somaArray) / array.length
// console.log(getMedia([0, 10]))
// console.log(getMedia([1, 2, 3, 4, 5]))

// Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá ser de duas casas decimais, arredondando se necessário.
// const calculaAreaTriangulo = (base, altura) => {
//     let area = (base * altura) / 2
//     return `A área deste triangulo é ${area.toFixed(2)}m2`
// }
// console.log(calculaAreaTriangulo(10, 15))
// console.log(calculaAreaTriangulo(7, 9))
// console.log(calculaAreaTriangulo(9.25, 13.1))

// Criar uma função que receba um array de números e retorne o menor número desse array.
// const encontraMenor = array => {
//     let menorElemento = array[0]
//     for(let i = 0; i < array.length; i++) {
//         if(menorElemento > array[i]) {
//             menorElemento = array[i]
//         }
//     }
//     return menorElemento
// }
// console.log(encontraMenor([10, 5, 35, 65]))
// console.log(encontraMenor([5, -15, 50, 3]))

// Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o Х". Se não for igual, retorne "Que pena! O número sorteado foi o Х". Х é o número que foi sorteado.
const geraRandom = () => Math.floor(Math.random() * (10 - 1)) + 1
console.log(valor)

const comparaInput = num => {
    valor = geraRandom()
    if(num >= 1 && num <= 10) {
        if(num === valor)
    }
}