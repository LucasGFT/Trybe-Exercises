const notaEmPorcentagem = 80;

if (notaEmPorcentagem < 0 || notaEmPorcentagem > 100) {
  console.log("Erro");
} else if (notaEmPorcentagem >= 90) {
  console.log("A");
} else if (notaEmPorcentagem >= 80) {
  console.log("B");
} else if (notaEmPorcentagem >= 70) {
  console.log("C");
} else if (notaEmPorcentagem >= 60) {
  console.log("D");
} else if (notaEmPorcentagem >= 50) {
  console.log("E");
} else {
  console.log("F");
}
