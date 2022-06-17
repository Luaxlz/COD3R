let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // ! é um operador de negação, ele inverte o valor do booleano, usando duas negações voltamos ao valor original.

console.log("Os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsos...");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Pra finalizar...");
console.log(!!('' || null || 0 || ' ')); // Se algum dos valores for verdadeiro, o resultado será verdadeiro.

let nome = "Luka";
console.log(nome || 'Desconhecido'); // Se o nome for verdadeiro, ele retorna o valor, se não, retorna o valor padrão.