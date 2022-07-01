function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}
let bottomAdicionar = document.getElementById("btn-add");
bottomAdicionar.addEventListener("click", adicionarText);
let paiSpan = document.querySelector(".my-tasks");
function adicionarText() {
  let spanText = document.createElement("span");
  spanText.textContent = input.value;
  paiSpan.appendChild(spanText);
}

function corLegenda(string) {
  let elementDiv = document.createElement("div");
  elementDiv.className = "task";
  elementDiv.style.backgroundColor = string;
  paiSpan.appendChild(elementDiv);
}

corLegenda("green");

let input = document.querySelector("input");
createDaysOfTheWeek();

// Escreva seu código abaixo.
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
let tagUl = document.querySelector(".task-list");
tagUl.id = "days";
for (let index in decemberDaysList) {
  let tagLi;
  tagLi = document.createElement("li");
  tagLi.innerText = decemberDaysList[index];
  tagUl.appendChild(tagLi);
}
let tagsLi = document.querySelector(".task-list").children;

for (let index in tagsLi) {
  tagsLi[index].className = "days";
}

let diaFeriado = [24, 25, 31];
let sextasFeiras = [4, 11, 18, 25];
function addClassesMais(quaisclasse, quaisDias) {
  for (let index in tagsLi) {
    for (let index1 in quaisDias) {
      if (
        tagsLi[index].textContent == quaisDias[index1] ||
        tagsLi[index].textContent == quaisDias[index1] ||
        tagsLi[index].textContent == quaisDias[index1]
      ) {
        tagsLi[index].classList.add(quaisclasse);
      }
    }
  }
}
addClassesMais("holiday", diaFeriado);
addClassesMais("friday", sextasFeiras);

let buttom = document.createElement("button");
function buttomFeriado(feriados = "feriado") {
  buttom.id = "btn-holiday";
  buttom.innerText = feriados;
  let paiButtom = document.querySelector(".buttons-container");
  paiButtom.appendChild(buttom);
}
buttomFeriado();

let dias = document.querySelectorAll(".holiday");
let diasSextas = document.querySelectorAll(".friday");
let voltarDiasParaNumeros = [4, 11, 18, 25];
function corDiasDeFeriados() {
  for (let index3 in dias) {
    if (dias[index3].style.backgroundColor !== "green") {
      dias[index3].style.backgroundColor = "green";
    } else {
      dias[index3].style.backgroundColor = "rgba(258,258,258)";
    }
  }
}
let buttom1 = document.createElement("button");
buttom.addEventListener("click", corDiasDeFeriados);

function buttomSexta(sexta = "sexta") {
  buttom1.id = "btn-friday";
  buttom1.innerText = sexta;
  let paibuttom1 = document.querySelector(".buttons-container");
  paibuttom1.appendChild(buttom1);
}
buttomSexta();

function corDiasDeSexta() {
  for (let index3 in diasSextas) {
    if (diasSextas[index3].style.backgroundColor != "blue") {
      diasSextas[index3].style.backgroundColor = "blue";
    } else {
      diasSextas[index3].style.backgroundColor = "rgba(258,258,258)";
    }
  }
}
buttom1.addEventListener("click", corDiasDeSexta);

// if (diasSextas[index].textContent == "Sexta") {
//   for (let index in diasSextas) {
//     diasSextas[index].textContent = sextasFeiras[index];
//   }
// }
// if (diasSextas[index].textContent !== "Sexta") {
//   for (let index in diasSextas) {
//     diasSextas[index].textContent = "Sexta";
//   }
// }

function mudaTextoParaSexta() {
  // console.log(diasSextas[0].textContent == voltarDiasParaNumeros[0]);
  // console.log(voltarDiasParaNumeros[0]);
  if (diasSextas[0].textContent == voltarDiasParaNumeros[0]) {
    console.log("chegou ate q=aq porra");
    for (index in diasSextas) {
      diasSextas[index].textContent = "sextou";
    }
    return;
  } else if (diasSextas[0].textContent !== voltarDiasParaNumeros[0]) {
    console.log("chegou so aq");
    for (index in diasSextas) {
      diasSextas[index].textContent = voltarDiasParaNumeros[index];
    }
  }
  // for (index in diasSextas) {
  //   diasSextas[index].textContent = voltarDiasParaNumeros[index];
  // }
}

function mudaSextaParaNumeros() {
  console.log("chegou so aq");
  if (diasSextas[0].textContent === "sextou") {
    for (index in diasSextas) {
      diasSextas[index].textContent = voltarDiasParaNumeros[index];
    }
    // for(let index = 0)
  }
}
buttom1.addEventListener("click", mudaTextoParaSexta);

function zoomLi(event) {
  let exatoLi = event.target;
  exatoLi.style.fontSize = "50px";
}

for (index in tagsLi) {
  tagsLi[index].addEventListener("mouseover", zoomLi);
  tagsLi[index].addEventListener("mouseout", function () {
    let exatoLis = event.target;
    exatoLis.style.fontSize = "20px";
  });
}
