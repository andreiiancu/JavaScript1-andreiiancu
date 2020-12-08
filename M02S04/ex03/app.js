const controls = document.querySelector('.controls');
const hero = document.querySelector('.hero');
const heroPosition = {
  left: 0,
  top: 0,
};

const moveHero = (axis) => {
  let step = 30;
  let cssProperty = axis === 'x' ? 'left' : 'top';

 heroPosition[cssProperty] += step;

 hero.style.left = `${heroPosition.left}px`;
  hero.style.top = `${heroPosition.top}px`;

};

controls.addEventListener('click', (event) => {
let target = event.target

if (target.nodeName !== 'BUTTON') {
  return;
}

let direction = target.id.split('-')[1];
let axis = 'x';

switch(direction) {
  case 'right':
axis = 'x';
moveHero(axis);
  break;
  case 'left':
    axis = 'x';
    normalizeDirection = 'bk';
    moveHero(axis, normalizeDirection);
  default:
  break;
}
});
