const refs = {
  decrementBtn: document.querySelector(
    '#counter button[data-action="decrement"]'
  ),
  incrementBtn: document.querySelector(
    '#counter button[data-action="increment"]'
  ),
  spanValue: document.querySelector("#value"),
};

let sumValue = 0;

refs.decrementBtn.addEventListener("click", decrementFn);
refs.incrementBtn.addEventListener("click", incrementFn);

function decrementFn(event) {
  sumValue -= 1;
  refs.spanValue.textContent = sumValue;
  return sumValue;
}

function incrementFn(event) {
  sumValue += 1;
  refs.spanValue.textContent = sumValue;
  return sumValue;
}
