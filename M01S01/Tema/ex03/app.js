var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (e) {
    var radius = inputRadius.value || 0;
    var result = 0;

    result = (4 / 3) * Math.PI * Math.pow(raza, 3);

    elementResult.innerText = result;

    e.preventDefault();
  },
  false,
);
