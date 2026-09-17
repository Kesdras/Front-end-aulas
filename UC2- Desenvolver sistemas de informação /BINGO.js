const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const TOTAL_NUMEROS = 75;
let numerosSorteados = 0;
let jogoTerminou = false;

console.log("1 - Sortear");
console.log("2 - Status");
console.log("3 - Sair");

function exibirMenu() {

    rl.question("Opção: ", (opcao) => {
        opcao = Number(opcao);
    
        if (opcao === 1) {
            rl.question("Número sorteado: ", (numero) => {
                numero = Number(numero);
    
                if (numero >= 1 && numero <= 75) {
                    numerosSorteados++;
    
                    if (numero <= 25) {
                        console.log("Número da faixa BAIXA.");
                    } else if (numero <= 50) {
                        console.log("Número da faixa MÉDIA.");
                    } else {
                        console.log("Número da faixa ALTA.");
                    }
                } else {
                    console.log("Número inválido!");
                }
    
                rl.close();
            });
    
        } else if (opcao === 2) {
            console.log("Sorteados:", numerosSorteados);
            console.log("Restantes:", TOTAL_NUMEROS - numerosSorteados);
    
            if (numerosSorteados === 0) {
                console.log("O jogo ainda não começou.");
            } else if (numerosSorteados < 75) {
                console.log("O jogo está em andamento.");
            } else {
                jogoTerminou = true;
                console.log("Fim de jogo!");
            }
    
            exibirMenu();
    
        } else if (opcao === 3) {
            console.log("Até logo!");
            rl.close();
    
        } else {
            console.log("Opção inválida!");
            rl.close();
        }
    });
}
exibirMenu();