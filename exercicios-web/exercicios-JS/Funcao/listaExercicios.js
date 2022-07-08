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
tipoTringulo = (lado1, lado2, lado3) => {
    if(lado1 === lado2 && lado2 === lado3) {
        console.log("Todos os lados são iguais, este é um triangulo Equilátero.")
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("Dois lados iguais, logo é um triangulo Isósceles.")
    } else {
        console.log("Nenhum lado igual, este é um triangulo Escaleno.")
    }
}

tipoTringulo(1, 1, 1)

