function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBox = document.querySelector('#boxes');
btnCreate.addEventListener('click', onClick);
btnDestroy.addEventListener('click', destroyBoxes);
let size = 20;
function onClick(event) {
  createBoxes(inputEl.value);
}
function destroyBoxes() {
  divBox.innerHTML = '';
}
function createBoxes(amount) {
  for (let i = 1; i <= amount; i++){
    const divEl = document.createElement('div');
    size += 10;
    divEl.style.height = `${size}px`;
    divEl.style.width = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divBox.append(divEl);
  }
  console.log(divBox);
}


