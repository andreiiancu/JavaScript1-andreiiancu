const box = document.querySelector('.box');
const controls = document.querySelector('.controls');
const form = document.forms[0];
const dinamicButton = document.getElementById('dinamic-button');

controls.addEventListener('click', () => {
let target = event.target
let className = 'set-color';
  if(target.nodeName === 'BUTTON' && target.classList.contains(className)) {
    const color = target.style.backgroundColor;

    box.style.backgroundColor = color;
  }
});
//$('.controls').on('click', 'button.set-color')

form.addEventListener('submit', () => {
  const input = form.querySelector('input');

dinamicButton.Button.style.backgroundColor = input.value;
event.preventDefault();
});
