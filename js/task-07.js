const elements = {
  inputEl: document.querySelector("#font-size-control"),
  spanEl: document.querySelector("#text"),
};

elements.inputEl.addEventListener("input", onInputHandler);
function onInputHandler(event) {
  elements.spanEl.style.fontSize = `${event.currentTarget.value}px`;
}
