let numero = 1;
{
    let numero = 2;
    console.log("Dentro = ", numero); // Primeiro ele procura a variável no escopo menor, neste caso bloco, se encontrar valor retorna, se não encontrar ai vai pro escopo maior
};
console.log("Fora = ", numero); 

// Variáveis com LET tem escopo global, escopo de função e escopo de bloco