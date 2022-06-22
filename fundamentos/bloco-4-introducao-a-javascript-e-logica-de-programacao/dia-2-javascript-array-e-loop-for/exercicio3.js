let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaDosNumeros = 0;
let mediaAritmetica;

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

for (let index = 0; index < numbers.length; index += 1) {
  somaDosNumeros = somaDosNumeros + numbers[index];
}
mediaAritmetica = somaDosNumeros / numbers.length;
console.log(mediaAritmetica);
