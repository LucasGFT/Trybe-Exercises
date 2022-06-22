let salarioBruto = 3000;
let salarioBase;
let inss;
let IR;

//pegar o valor do inss
if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.92 && salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else if (salarioBruto >= 5189.83) {
  inss = 570.88;
}

salarioBase = salarioBruto - inss;
//pegar valor do IR
if (salarioBase <= 1903.98) {
  IR = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  IR = salarioBase * 0.075 - 142.8;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  IR = salarioBase * 0.15 - 354.8;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  IR = salarioBase * 0.225 - 636.13;
} else if (salarioBase >= 4464.69) {
  IR = salarioBase * 0.275 - 869.36;
}

let salarioLiquido = salarioBase - IR;

console.log("salario bruto", salarioBruto);
console.log("salarioBase", salarioBase);
console.log("IR", IR);
console.log("salarioLiquido", salarioLiquido);
