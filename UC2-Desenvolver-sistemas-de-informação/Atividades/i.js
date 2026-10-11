
const { log } = require("console");
const readline = require ("readline")
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Digite um numero para o bingo:", function(valor) {  
    let numero = Number(valor);

    if (numero < 1 || numero > 75) {
    console.log(numero + " é invalido");
    }
    console.log(numero + " é válido");
    r1.close() ;
});
