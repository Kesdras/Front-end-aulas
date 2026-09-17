const prompt = require('readline-sync');

let nomedoevento = prompt.question("qual o nome do evento?" );
let NumCartela = prompt.question("qual o numero da sua cartela" );
let quanNumPre = prompt.question("quantos numeros falta" );

console.log("o nome do evento que voce vai participar e: " + nomedoevento);
console.log("o numero da sua cartela e: " + NumCartela);
console.log("quantidade que falta para voce ganhar o premio: " + quanNumPre);
