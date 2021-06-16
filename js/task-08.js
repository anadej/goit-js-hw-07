const refs = {
  inputRef: document.querySelector('#controls input'),
  createBtn: document.querySelector('#controls button[data-action="render"]'),
  deleteBtn: document.querySelector('#controls button[data-action="destroy"]'),
  divRef: document.querySelector('#boxes'),
};

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

refs.createBtn.addEventListener('click', onCreateBtnClick);

function onCreateBtnClick(event) {
  const inputValue = refs.inputRef.value;
  createBoxes(inputValue);
}

refs.deleteBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const rgb = [
      randomNumber(0, 256),
      randomNumber(0, 256),
      randomNumber(0, 256),
    ];

    const newDiv = document.createElement('div');
    newDiv.style.background = `rgb(${rgb})`;
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;

    refs.divRef.append(newDiv);

    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  const divList = refs.divRef.querySelectorAll('div');
  divList.forEach(e => e.remove());
}
