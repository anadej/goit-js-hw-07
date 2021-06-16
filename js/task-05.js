const refs = {
  inputNode: document.querySelector("#name-input"),
  spanValue: document.querySelector("#name-output"),
};

console.log(refs.spanValue.textContent);

const newName = refs.inputNode.addEventListener("input", updateName);

function updateName(event) {
  if (event.target.value === "") {
    refs.spanValue.textContent = "незнакомец";
  } else {
    refs.spanValue.textContent = event.target.value;
  }
}
