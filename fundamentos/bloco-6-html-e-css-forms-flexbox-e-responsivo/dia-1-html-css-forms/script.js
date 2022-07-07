let button = document.querySelector(".button-enviar");

function preventDefaultButton(event) {
  event.preventDefault();
}

button.addEventListener("click", preventDefaultButton);
