let counterValue = 0;

const counter = document.querySelector("#value");
const divCounter = document.querySelector("#counter");
const btnDecr = divCounter.firstElementChild;
const btnIncr = divCounter.lastElementChild;

btnDecr.addEventListener("click", handlerClickDec);

function handlerClickDec() {
  counterValue -= 1;
  counter.textContent = counterValue;
}
btnIncr.addEventListener("click", handlerClickInc);
function handlerClickInc() {
  counterValue += 1;
  counter.textContent = counterValue;
}
