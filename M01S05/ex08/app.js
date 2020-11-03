let button = document.getElementById('clicker');
let removeButton = document.getElementById('remove');
let queryButton = document.getElementById('query');
// let clickHandler = () => {
//   alert('Ai apasat butonul!');
// };

// button.addEventListener('click', clickHandler);
// removeButton.addEventListener('click', () => {
//   button.removeEventListener('click', clickHandler);
// }); //asa se scoate alerta/

// Adauga un buton nou in document cu id-ul query si folosind
// addEventListener() ataseaza un eveniment care sa foloseasca metoda prompt()
// pentru a afla varsta utilizatorului.
button.addEventListener('click', prompt);
queryButton.addEventListener('query', () => {
  queryButton('Introdu o valoare:', prompt);
});
