// Esse tipo de construção é válida porém pode gerar muitos problemas e bugs por isso o uso é desencorajado

function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5))