const numberOfCategoriesEl = document.querySelector("#categories");
const listCategoriesEl = numberOfCategoriesEl.children;
console.log(`Number of categories:${listCategoriesEl.length}`);

const elemEl = document.querySelectorAll(".item");
elemEl.forEach((element) => {
  console.log(`Category:${element.firstElementChild.textContent}`);
  const ulEl = element.lastElementChild;
  console.log(`Elements:${ulEl.children.length}`);
});
