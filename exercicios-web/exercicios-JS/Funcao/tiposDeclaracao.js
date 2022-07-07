console.log(soma(3, 4))

//Function declaration
function soma (x, y) { //Funções declaradas desta maneira são carregadas pelo compilador primeiro então pode ser chamada logo na linha 1
    return x + y
}

// Function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// Named function expression
const mult = function mult (x, y) { //tipo de declaração pouco usada, única vantagem é para debuggar
    return x * y
}
console.log(mult(3, 4))