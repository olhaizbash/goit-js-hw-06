const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');

let value = 0;
btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);
function decrement(event) {
    value -= 1;
    counterEl.textContent = value;
}
function increment(event) {
    value += 1;
    counterEl.textContent = value;
}