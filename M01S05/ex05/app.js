let person = {
  getName: () => {
    return 'Dragos Iordache';
  },
  getAge: () => {
    return 32;
  },
};
console.warn(`
Afiseaza primul nume al persoanei folosind metoda getName()
`);
//subtr(0,3) abba.indexof('g')
//metoda slice()
//split sparge substringul.carlet first

let firstName = person.getName();
console.log(firstName.split(' ')[0]);

console.warn(`
Afiseaza diferenta de varsta dintre
persoana si varsta ta folosind metoda getAge().
`);
console.log(Math.abs(33 - person.getAge()));

console.warn(`
Afiseaza ultimele doua cifre al anului de nastere
al persoanei, folosind anul
curent si metoda getAge(). (Exemplu: ‘87).
`);
let year = new Date().getFullYear();
let age = person.getAge();
console.log(`'${(year - age).toString().slice(-2)}`);
//string.prototype.slice()

console.warn(`
Afiseaza propozita: “Ma numesc xxx si am yy ani!”
`);
console.log(
  `
Ma numesc ${person.getName} si am ${person.getAge} ani!
`.trim(),
);

console.warn(`
  Afiseaza numele intreg al persoanei folosind metoda getName()
`);

let fullName = person.getName();
console.log(fullName.split(' '));

console.warn(`
Afiseaza varsta persoanei folosind metoda getAge()
`);
console.log(person.getAge());

console.warn(`
  Afiseaza anul de nastere al persoanei, folosind anul curent si metoda getAge()
`);
console.log(Math.abs(2020 - person.getAge()));

console.warn(`
  Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”
`);
console.log(
  `Ma numesc ${person.getName()} si m-am nascut acum ${Math.abs(
    2020 - 1988,
  )} de ani, in anul ${Math.abs(2020 - person.getAge())}!`,
);
