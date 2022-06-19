const a = {nome: 'João'};
console.log(a);

const b = a;
b.nome = "Maria";
console.log(a);

// ############################################

let valor; // Não foi inicializada
console.log(valor);

valor = null; // Ausência de valor, vazia.
console.log(valor);
// console.log(valor.toString()); ERRO! 

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evitar atribuir undefined
console.log(!!produto.preco);
// delete produto.preco;
console.log(produto);

produto.preco = null; //sem preço
console.log(!!produto.preco);
console.log(produto);