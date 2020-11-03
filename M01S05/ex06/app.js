let person = {
  getName: () => {
    return 'Dragos Iordache';
  },
  getAge: () => {
    return 32;
  },
};

// let accessor = (methodSuffix) => {
//   let methodName = `get${methodSuffix}`;

//   return person[methodName]();
// };

// console.log(accessor('Name'));

// console.warn(`
//   Folosind accesorul salveaza numele mic al
//   persoanei intr-o variabila si foloseste-l
//   in propoztia: “Eu sunt xxx.”
// `);
// let fullName = accessor('Name');
// let name = fullName.split(' ')[0];
// console.log(`Eu sunt ${name}.`);

// console.warn(`
//   Afiseaza diferenta de varsta dintre tine si persoana.
// `);
// // console.log(`Diferenta este ${Math.abs(33 - accessor('Age'))}.`);

// console.warn(`
//   Folosind accesorul afiseaza numele persoanei.
// `);
// let fullName = accesor('Name');
// let name = fullName.split(' ')[0];
// console.log(`${name}.`);
//Nu inteleg cum'''

console.warn(`
  Afiseaza varsta persoanei.
`);
// let accessor = (methodSuffix) => {
//   let methodName = `get${methodSuffix}`;

//   return person[methodName]();
// };
// console.log(`Varsta este ${accessor('Age')}.`);

// console.warn(`
// Afiseaza anul de nastere al persoanei folosind anul curent.
// `);
// console.log(`Anul de nastere este ${Math.abs(2020 - accessor('Age'))}.`);

console.warn(`
  Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”
`);
let accessor = (methodSuffix) => {
  let methodName = `get${methodSuffix}`;

  return person[methodName]();
};
console.log(`Ma numesc ${accesor('Name')} si am ${accesor('Age')}.`);
//Aici nu stiu cum trebuie sa definesc accesor.
