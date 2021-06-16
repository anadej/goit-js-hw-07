const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onBlurInput);

function onBlurInput(event) {
  const input = event.target;
  if (input.value.length === Math.floor(input.getAttribute("data-length"))) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
