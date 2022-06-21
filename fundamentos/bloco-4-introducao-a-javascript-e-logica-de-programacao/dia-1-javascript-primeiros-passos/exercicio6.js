const piece = "kNiGHt";

switch (piece.toLowerCase()) {
  case "rook":
    console.log(
      `rook -> qualquer número de quadrados vagos para frente, para trás, para a esquerda ou para a direita em uma linha reta`
    );
    break;
  case "bishop":
    console.log(
      `bishop -> qualquer número de quadrados vagos na diagonal em uma linha reta`
    );
    break;
  case "queen":
    console.log(
      `queen -> move qualquer número de quadrados vagos em qualquer direção: para frente, para trás, para a esquerda, para a direita ou diagonalmente, em linha reta.`
    );
    break;
  case "king":
    console.log(
      `king -> move exatamente uma casa vazia em qualquer direção: para frente, para trás, esquerda, direita ou diagonal`
    );
    break;
  case "knight":
    console.log(
      `knight -> move-se em uma diagonal estendida de um canto de qualquer retângulo de quadrados 2×3 até o canto oposto mais distante`
    );
    break;
  case "pawn":
    console.log(
      `pawn -> avança exatamente uma casa, ou opcionalmente, duas casas quando na sua casa inicial, em direção ao lado do tabuleiro do oponente`
    );
    break;
  default:
    console.log(`Nome de peça invalido`);
}
