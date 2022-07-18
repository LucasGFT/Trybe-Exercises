let teste = document.querySelector(".contador");
let teste1 = document.querySelector(".number");
let button = document.querySelector(".buttonContador");
let clickCount = 0;
button.addEventListener("click", function () {
  clickCount += 1;
  teste1.innerHTML = clickCount;
});
// const ContadorClick = () => {

//   });
