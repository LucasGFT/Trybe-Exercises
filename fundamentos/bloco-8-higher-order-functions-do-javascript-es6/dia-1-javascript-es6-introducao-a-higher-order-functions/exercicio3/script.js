const correcao = (gabarito, respostasEstudante) => {
  let result = 0;
  for (let index in respostasEstudante) {
    if (respostasEstudante[index] !== "N.A") {
      if (gabarito[index] === respostasEstudante[index]) {
        result += 1;
        // console.log("acertou");
      } else {
        result -= 0.5;
        // console.log("errou");
      }
    }
  }
  return result;
};

const resultado = (gabarito, respostasEstudante, pontuacao) => {
  console.log(gabarito);
  console.log(respostasEstudante);
  pontuacao = correcao(gabarito, respostasEstudante);
  return pontuacao;
};
const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];
resultado(RIGHT_ANSWERS, STUDENT_ANSWERS, correcao());
console.log(resultado(RIGHT_ANSWERS, STUDENT_ANSWERS, correcao()));
// const hof = (gabarito, respostasEstudante, correcao) => {}
