const refs = {
  inputRef: document.querySelector("#controls input"),
  createBtn: document.querySelector('#controls button[data-action="render"]'),
  deleteBtn: document.querySelector('#controls button[data-action="destroy"]'),
  divRef: document.querySelector("#boxes"),
};

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

refs.createBtn.addEventListener("click", onCreateBtnClick);

function onCreateBtnClick(event) {
  const inputValue = refs.inputRef.value;
  createBoxes(inputValue);
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const r = randomNumber(0, 100);
    const g = randomNumber(0, 100);
    const b = randomNumber(0, 100);

    const divTamplate =
      `<div width=${width}` +
      ` height=${height}` +
      ` color=rgb(${r}%, ${g}%, ${b}%)></div>`;

    console.log(divTamplate);
    refs.divRef.insertAdjacentHTML("beforeend", divTamplate);
    console.log(refs.divRef);
    width += 10;
    height += 10;
  }
}

function destroyBoxes() {}
