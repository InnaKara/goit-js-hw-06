const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const container = document.querySelector("#ingredients");
console.log(container);
const createNewEl = ingredients.map((ingredient) => {
  const newEl = document.createElement("li");

  newEl.textContent = ingredient;

  newEl.classList.add("item");

  return newEl;
});
createNewEl;
container.append(...createNewEl);
