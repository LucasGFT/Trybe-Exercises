const custo = 500;
const preco_venda = 7500;

const taxa = 0.2;
const quantidade_de_vendas = 1000;

if (custo < 0 || preco_venda < 0) {
  console.log("Erro");
} else {
  const taxa_de_custo = custo * taxa;
  const lucro = preco_venda - (custo + taxa_de_custo);
  console.log(
    `${quantidade_de_vendas} products sale profit: ${
      quantidade_de_vendas * lucro
    }`
  );
}
