let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.recorrente = "Sim";

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas
//chaves) do primeiro e os seguintes valores: 'Tio Patinhas',
// 'Christmas on Bear Mountain, Dell's Four Color Comics #178',
// 'O último MacPatinhas', 'Sim'. Então, imprima os valores de
// cada objeto juntos de acordo com cada uma das chaves

info.personagem += " e " + "Tio Patinhas";
info.origem +=
  " e " + "Christmas on Bear Mountain, Dell's Four Color Comics #178'";
info.nota += " e " + "O último MacPatinhas";
info.recorrente = "Ambos recorrentes";
console.log(info);
