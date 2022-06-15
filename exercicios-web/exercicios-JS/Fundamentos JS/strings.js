const escola = "Cod3r";
console.log(escola.charAt(4)); // Retorna o caracter na posição indicada.
console.log(escola.charAt(5)); // Retorna um caracter vazio pois a posição indicada não constém dado.
console.log(escola.charCodeAt(3)); // Retorna o código Unicode do caracter na posição indicada.
console.log(escola.indexOf('3')); //retorna o valor no index indicado.
console.log(escola.substring(1)); //Retorna o valor da string a partir da posição indicada.
console.log(escola.substring(0, 3));
console.log('Escola '.concat(escola).concat("!"));
console.log(escola.replace(3, 'e'));
console.log("Ana,Maria,Pedro".split(","));