//Considere o array de strings abaixo:

let array = ["java", "javascript", "python", "html", "css"];

// Escreva dois algoritmos: um que retorne a maior palavra deste
// array e outro que retorne a menor. Considere o número de caracteres
// de cada palavra.
let maiorPalavra = "";
for (let index1 = 0; index1 < array.length; index1 += 1) {
  if (array[index1].length > maiorPalavra.length) {
    maiorPalavra = array[index1];
  }
}
let menorPalavra = maiorPalavra;
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
}

console.log(maiorPalavra);
console.log(menorPalavra);
