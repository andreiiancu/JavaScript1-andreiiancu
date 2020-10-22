// Stocheaza valoarea pentru ora intr-o variabila numita hours.
// Apeleaza din consola (nu editor) variabila hours.
// Stocheaza valoarea pentru minute intr-o variabila numita minutes.
// Stocheaza valoarea pentru secunde intr-o variabila numita seconds.
// Creeaza si afiseaza in consola un mesaj: “hh:mm:ss, am ajuns la Pixellab.”.
// Adauga si milisecundele intr-o variabila numita milliseconds.
// Schimba mesajul astfel incat sa afiseze si milisecundele.
console.log(
  new Date().getHours() +
    ':' +
    new Date().getMinutes() +
    ':' +
    new Date().getSeconds() +
    ':' +
    new Date().getMilliseconds(),
  'hh:mm:ss:ms, am ajuns la Pixellab.',
);

// Creeaza o functie numita getTime care sa salveze
// intr-o variabila exactTime ora, minutele si secundele curente.
// Foloseste keywordul return pentru a elimina nevoia de variabila
// Optional: foloseste template strings (``)
// Afiseaza mesajul “hh:mm:ss, am ajuns la Pixellab.”.

function getTime() {
  return new Date().getHours();
  ('hh:mm:ss, am ajuns la Pixellab.');
}
