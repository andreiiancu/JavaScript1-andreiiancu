var messageParagraph = document.getElementById('message');
var value = window.prompt('Introdu o valoare:');
// var isOdd = false;

// if (value % 2 === 0) {
//   isOdd = false;
// } else {
//   isOdd = true;
// }

// //ternary operator(daca vrem sa testam isOdd)
// var Word = isOdd === true ? 'impara' : 'para';

// console.log(`Valoarea este: ${value} si este ${Word}.`);

var word = 'para';

if (value % 2 === 0) {
  word = 'para';
} else {
  word = 'impara';
}

var message = `Valoarea este ${value} si este ${word}`;
messageParagraph.innerText = message;
//messageParagraph.textContent = message- exista aceasta posibilitate

// Folosind metoda prompt() afiseaza in pagina mesajul: “Numarul
// introdus este mai mic | mai mare decat 20.”
// NU AM REUSIT

// Foloseste aceeasi metoda pentru a captura numele
// utilizatorului si pentru a afisa in
// document mesajul: “Numele meu este: xxx yyy.”
// var response = prompt('What is your name?');

// alert('Numele meu este ' + response);

// Folosind aceeasi metoda afiseaza in document propozitia:
// “Numele introdus are xxx caractere.” Inlocuieste
// spatiile cu stringul gol pentru a nu le numara.
// var response = prompt('What is your name?');

// alert('Numele meu are ' + ' ' 'caractere.');

// Folosind prompt() si String.includes()
// afiseaza mesajul: “Numele introdus contine|nu contine litera a.”
// var response = prompt('What is your name?');

// if (prompt.resonse.includes('a')) {
//   alert('Numele introdus contine litera a.');
// } else {
//   alert('Numele introdus nu contine litera a.');
// }
// Chiar daca are litera a, zice ca nu contine litera a!!!
