let resultadoTotal = 1;
const resultado = (number) => {
  let numero = number;
  for (let index = numero; index > 0; index -= 1) {
    resultadoTotal *= index;
    // resultadoTotal += index`${resultadoTotal}! = `;
  }
  console.log(resultadoTotal);
  return resultadoTotal;
};

resultado(5);
