// VaVA
let estoqueInicial = 50;
let quantidadeVendida = 13;
let quantidadeRecebida = 20;

// Cálculo do estoque final
let estoqueFinal = estoqueInicial - quantidadeVendida + quantidadeRecebida;

// Exibição resultado
console.log("Estoque final:", estoqueFinal);

// Verificação de estoque é maior ou igual a 40
let estoqueSuficiente = estoqueFinal >= 40;

console.log("Estoque maior ou igual a 40?", estoqueSuficiente);