const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onBlurInput);

function onBlurInput(event) {
  const input = event.target;

  if (input.value.length === Number(input.getAttribute('data-length'))) {
    сlassChange('invalid', 'valid');
  } else {
    сlassChange('valid', 'invalid');
  }

  function сlassChange(remove, add) {
    input.classList.remove(remove);
    input.classList.add(add);
  }
}
