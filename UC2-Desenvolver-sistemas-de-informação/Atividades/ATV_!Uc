const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Dados do bingo
let nomeEvento = "Bingo Beneficente";
const totalNumeros = 75;
let numerosSorteados = 0;
let jogoTerminou = false;

// Exibição tela
function menu() {
    console.log("\n==== BEM VINDO AO BINGO JS ====");
    console.log("1 - Sortear proximo numero");
    console.log("2 - verificar status do jogo");
    console.log("3 - Sair");

    rl.question("Escolha uma opção: ", (opcao) => {
        opcao = Number(opcao);

        // Tomada de decisão
        if (opcao === 1) {
            if (numerosSorteados < totalNumeros) {
                numerosSorteados++; // Incrementa o número sorteado
                
                if (numerosSorteados === totalNumeros) {
                    jogoTerminou = true;
                }
                
                console.log(`\nNúmero sorteado com sucesso! Total sorteados: ${numerosSorteados}`);
            } else {
                console.log("\nTodos os números já foram sorteados!");
            }
            menu(); // Voltar ao menu
        } 
        else if (opcao === 2) {
            // Cálculo dos números restantes
            let numerosRestantes = totalNumeros - numerosSorteados;

            // Exibição das informações
            console.log("\n--- STATUS DO JOGO ---");
            console.log("Evento: " + nomeEvento);
            console.log("Números que faltam sortear: " + numerosRestantes);
            console.log("O jogo terminou? " + (jogoTerminou ? "Sim" : "Não"));
            console.log("Total de números sorteados: " + numerosSorteados);
            menu(); // Voltar ao menu
        } 
        else if (opcao === 3) {
            console.log("Saindo do jogo... Até logo!");
            rl.close();
        } 
        else {
            console.log("Opção inválida! Tente novamente.");
            menu(); // Voltar ao menu
        }
    });
}

// Inicia o jogo
menu();
