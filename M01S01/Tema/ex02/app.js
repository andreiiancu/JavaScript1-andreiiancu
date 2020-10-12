var inputLength = document.getElementById('raza'),
  elementResult = document.getElementById('result'),
  form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (e) {
    var length = inputRaza.value || 0,
      result = 0;

    result = raza * raza * Math.PI;

    elementResult.innerText = result;

    e.preventDefault();
  },
  false,
);
