const inputEl = document.querySelector('#validation-input');
const inputData = document.querySelector('input[data-length="6"]');
inputData.addEventListener('focus', onFocus);
inputData.addEventListener('blur', onBlur);
function onFocus(event) {
    inputData.classList.remove('valid');
    inputData.classList.remove('invalid');
}
function onBlur(event) {
    (inputData.value.length == inputData.dataset.length) ? inputData.classList.add('valid') : inputData.classList.add('invalid');
}