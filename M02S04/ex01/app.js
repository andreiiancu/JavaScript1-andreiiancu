const box = document.querySelector('.box');
const className = 'animate-class';
const applyButton = document.getElementById('apply-button');
setTimeout(() => {
  box.classList.add('animate-class');

  setTimeout(() => {
box.classList.remove(className);
  }, 1000*2);
}, 1000*2);


applyButton.addEventListener('click', () => {
  if(box.classList.contains(className)) {
box.classList.remove(className);
  }else {
    box.classList.add(className);
  }
})
