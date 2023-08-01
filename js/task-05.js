// const inputEl = document.querySelector("#name-input");
// const spanEl = document.querySelector("#name-output");

const elements = {
  inputEl: document.querySelector("#name-input"),
  spanEl: document.querySelector("#name-output"),
};
elements.inputEl.addEventListener("input", onInputChange);
function onInputChange(event) {
  if (elements.inputEl.value.length === 0) {
    elements.spanEl.textContent = "Anonymous";
  } else {
    elements.spanEl.textContent = event.currentTarget.value;
  }
}
