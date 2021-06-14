const ulRef = document.querySelector("ul");

const categories = ulRef.children;

console.log(`В списке ${categories.length} категории.`);

[...categories].forEach((category) => {
  const titel = category.querySelector("h2");
  console.log(`Категория: ${titel.textContent}`);
  const elements = category.querySelector("ul");
  console.log(`Количество элементов: ${elements.children.length}`);
});
