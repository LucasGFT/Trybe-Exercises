const numeroIgual = (numeroApostado, resultado) => {
  console.log(resultado);
  console.log(numeroApostado);
    if(resultado === numeroApostado){
        return 'Parabéns você ganhou'
    } else {
        return 'Tente novamente'
    }
};

const resultadoSorteio = (numeroApostado) => {
  let numero = numeroApostado;
//   console.log(numero);
  let min = Math.ceil(0);
  let max = Math.floor(6);
  const resultado = Math.floor(Math.random() * (max - min)) + min;
  return numeroIgual(numero, resultado);
};

resultadoSorteio(3);
