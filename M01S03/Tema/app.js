// Folosind metoda document.getElementById() afiseaza urmatoarele
// 4 afirmatii despre obiectul person.
// Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti
// in aceeasi casa” (folosind bracket notation pe
// arrayul pets)
// Calculeaza si afiseaza diferenta de varsta dintre animalul de pe
// pozitia 0 si cel de pe pozitia 2
// Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear
// si codul meu postal este: zipCode”
// Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx,
// respectiv xxx.” Foloseste anul curent pentru a
// efectua scaderea.
// Folosirea variabilelor este optionala dar incurajata.
var inputLength = document.getElementById('prop01');
var inputLength = document.getElementById('prop02');
var inputLength = document.getElementById('prop03');
var inputLength = document.getElementById('prop04');

console.log(person.pets.name[0].age - person.pets.name[2].age);

console.log(
  `Ma numesc ${person.firstName.name} ${person.lastName.name}, m-am nascut in ${person.firstName.name.birthYear} si codul meu postal este: ${person.firstName.zipCode}`,
);

console.log(
  'Animalele mele s-au nacut in' +
    (person.pets.name[0].age - 2020) +
    ',' +
    (person.pets.name[1].age - 2020) +
    ',' +
    'respectiv in' +
    (person.pets.name[2].age - 2020),
);

// Creeaza un obiect numit person
// Obiectul sa contina urmatoarele proprietati: firstName, lastName, email, birthYear, pets, zipCode.
// Proprietatea pets sa contina un array de obiecte cu trei pozitii.
// Obiectele din pets sa contina urmatoarele proprietati: name, species, age.
// Toata informatia poate fi inventata. Nu divulga informatii personale inutil.
// Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale”. Nu uita de proprietatea length a arrayului pets.
// Afiseaza propozitia: “Am acelasi email din copilarie: xxx”.
// Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”
// Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.
// Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0. Foloseste anul curent.
// Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.
// Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani”.

var person = {
  firstName: 'Andrei',
  lastName: 'Iancu',
  email: 'andrei90@gmail.com',
  birthYear: '1999',
  age: '21',
  pets: [
    {
      Papi: {
        name: 'Papi',
        age: '5',
      },
      Eliza: {
        name: 'Eliza',
        age: '8',
      },
      Puffy: {
        name: 'Puffy',
        age: '5',
      },
    },
  ],
  zipCode: '221',
};

console.log(
  `Numele meu este ${person.firstName} ${person.lastName} si am ${person.pets.length} animale.`,
);

console.log(`Am acelasi email din copilarie: ${person.email}.`);

console.log(
  ' Unul din cele ' +
    person.pets.length +
    ' animale ale mele este species si are' +
    ' ' +
    person.pets[2].age +
    ' ' +
    'ani.',
);

console.log(2020 - person.pets[1].age);

console.log(person.age - person.pets[0].age);

petName = 'Papi';

console.log(
  ' Intre ' +
    person.firstName.name +
    ' si ' +
    petName.name +
    ' este o diferenta de ' +
    (person.firstName.age - petName.age) +
    ' ' +
    ' ' +
    'ani.',
);
