let longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu"; // retorna 'aconteceu'

let palavra = "";
const maiorPalavra = (frase) => {
  let teste = frase.split(" ");
  for (let index of teste) {
    if (index.length > palavra.length) {
      palavra = index;
    }

    // if(index.length)
  }
  console.log(palavra);
  return palavra;
};
// console.log(teste);

maiorPalavra(longestWord);
