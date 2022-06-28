// O uso de break e continue é altamente desencorajado, visto que há formas melhores de solucionar problemas sem desvio de fluxo.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (x in nums) {
    if (x == 5) {
        break // para o laço mais proximo
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue // para a atual repetição e continua da proxima.
    }
    console.log(`${y} = ${nums[y]}`)
}

externo:
for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

// Não usar desvios de fluxo! Apenas para conhecimento da linguagem.