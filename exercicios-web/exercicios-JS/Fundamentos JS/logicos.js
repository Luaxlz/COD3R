// Tabela verdade:
// v e v = v
// v e f = f
// f e ? = f
// Com o operador E obrigatoriamente todos os operando precisam ser verdadeiros para que o resultado seja verdadeiro.

// v ou ? = v
// f ou v = v
// f ou f = f
// Basta um verdadeiro para que o OU retorne verdadeiro.

// v xor v = f
// v xor f = v
// f xor v = v
// f xor f = f
// Para ser verdadeiro o XOR precisa que os dois operando sejam diferentes.

// !v = f
// !f = v
// Negação lógica inverte a lógica.

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // double pipe || é o operador OU em JS
    const comprarTv50 = trabalho1 && trabalho2 // && operador de E em JS
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) bitwise XOR
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário.
    
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(false, true))
console.log(compras(true, false))
console.log(compras(false, false))