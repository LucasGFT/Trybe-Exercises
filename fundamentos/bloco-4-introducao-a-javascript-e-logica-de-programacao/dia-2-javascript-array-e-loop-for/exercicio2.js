let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaDosNumeros = 0;

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

for (let index = 0; index < numbers.length; index += 1) {
  somaDosNumeros = somaDosNumeros + numbers[index];
}

console.log(somaDosNumeros);
