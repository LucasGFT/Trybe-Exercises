let divPrincipal = document.querySelector("#divPrincipal");

let imput = document.createElement("input");
divPrincipal.appendChild(imput);

let bottomCor = document.createElement("button");
bottomCor.innerText = "Confirmar";
divPrincipal.appendChild(bottomCor);

let tagBody = document.getElementById("body-pagina");
function corPagina() {
  tagBody.style.backgroundColor = imput.value;
  imput.value = "";
}
function voltaCor() {
  tagBody.style.backgroundColor = "white";
}

bottomCor.addEventListener("click", corPagina);

let bottomVoltaCor = document.createElement("button");
bottomVoltaCor.innerText = "Resetar";
divPrincipal.appendChild(bottomVoltaCor);

bottomVoltaCor.addEventListener("click", voltaCor);

let imput1 = document.createElement("input");
let divSecundaria = document.createElement("div");
divSecundaria.innerText = "cor do texto";
divPrincipal.appendChild(divSecundaria);
divSecundaria.appendChild(imput1);

// tagBody.style.color = "blue";
function corTexto() {
  tagBody.style.color = imput1.value;
  imput.value1 = "";
}
function voltaCorTexto() {
  tagBody.style.color = "black";
}

let bottomVoltaCorTexto = document.createElement("button");
bottomVoltaCorTexto.innerText = "confirmar";
divSecundaria.appendChild(bottomVoltaCorTexto);

let bottomVoltaCorTexto1 = document.createElement("button");
bottomVoltaCorTexto1.innerText = "resetar";
divSecundaria.appendChild(bottomVoltaCorTexto1);

bottomVoltaCorTexto.addEventListener("click", corTexto);
bottomVoltaCorTexto1.addEventListener("click", voltaCorTexto);

let imput2 = document.createElement("input");
let divTerceira = document.createElement("div");
divTerceira.innerText = "tamanho fonte";
divPrincipal.appendChild(divTerceira);
divTerceira.appendChild(imput2);

let bottomTamanhoFonte = document.createElement("button");
bottomTamanhoFonte.innerText = "confirmar";
divTerceira.appendChild(bottomTamanhoFonte);

function tamanhoTexto() {
  tagBody.style.fontSize = imput2.value + "px";
  imput2.value = "";
}

function voltaTamanhoTexto() {
  tagBody.style.fontSize = "";
  imput2.value = "";
}
let bottomVoltaTamanhoTexto = document.createElement("button");
bottomVoltaTamanhoTexto.innerText = "Resetar";
divTerceira.appendChild(bottomVoltaTamanhoTexto);

bottomTamanhoFonte.addEventListener("click", tamanhoTexto);
bottomVoltaTamanhoTexto.addEventListener("click", voltaTamanhoTexto);
