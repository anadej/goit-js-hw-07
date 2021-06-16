const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("change", onInput);

function onInput(event) {
  const input = event.target;
  const updateFont = input.value;
  textRef.style.fontSize = `${updateFont}` + "px";
}
