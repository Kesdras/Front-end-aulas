// Pergunta o nome do evento
let nomeEvento = prompt("Digite o nome do evento de bingo:");
console.log("Evento:", nomeEvento);

// Pergunta a quantidade de participantes
let quantidadeParticipantes = Number(prompt("Quantos participantes haverá?"));
console.log("Quantidade de participantes:", quantidadeParticipantes);

// Inicia o sorteio
let iniciar = prompt("Deseja iniciar o sorteio? (sim/não)");

if (iniciar.toLowerCase() === "sim") {
    // Sorteia um número entre 1 e 75
    let numeroSorteado = Math.floor(Math.random() * 75) + 1;

    console.log("Bingo iniciado!");
    console.log("Número sorteado:", numeroSorteado);

    let continuar = prompt("Deseja sortear outro número? (sim/não)");
    console.log("Resposta do usuário:", continuar);
} else {
    console.log("O bingo não foi iniciado.");
}