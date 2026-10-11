// Dados do pedido
let nomeCliente = "Carlos";
let nomeProduto = "BIG_pizza";
let precoUnitario = 15.00;
let quantidadeComprada = 3;
let taxaEntrega = 8.00;
let valorMinimoEntregaGratis = 40.00;

// Cálculo do total dos produtos
let totalProdutos = precoUnitario * quantidadeComprada;

// Verificação de entrega grátis
let entregaGratis = totalProdutos >= valorMinimoEntregaGratis;

// Total final
let totalFinal = entregaGratis
    ? totalProdutos
    : totalProdutos + taxaEntrega;

// Exibição dos resultados
console.log("Cliente:", nomeCliente);
console.log("Produto comprado:", nomeProduto);
console.log("Total dos produtos: R$", totalProdutos);
console.log("Entrega grátis?", entregaGratis);
console.log("Total final: R$", totalFinal);