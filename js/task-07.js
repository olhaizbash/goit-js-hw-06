const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('change', onChange);
function onChange(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}