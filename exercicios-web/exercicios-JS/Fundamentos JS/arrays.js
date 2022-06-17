// Array é uma forma de agrupar multiplos valores de uma forma linear em uma estrutura indexada e a partir de um único identificador.

const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({ id: 3 }, false, null, 'teste'); // Função push adiciona um ou mais elementos ao final do array
console.log(valores);
console.log(valores.length);

// Apesar do Array em JS ser heterogeneo e aceitar multiplos tipos de dados, é recomendado que se mantenha uma organização básica homogenea, um array para cada tipo de dado.

console.log(valores.pop()); // Função pop remove o último elemento do array
delete valores[0]; // Função delete remove um elemento do array selecionado pelo valor de index.
console.log(valores);

console.log(typeof valores); // typeof retorna o tipo de dado do array