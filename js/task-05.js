const inputEl = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');
const a = textEl.textContent;
inputEl.addEventListener('input', changeText);
function changeText(event) {
    !event.currentTarget.value ? textEl.textContent = a : textEl.textContent = event.currentTarget.value;
}