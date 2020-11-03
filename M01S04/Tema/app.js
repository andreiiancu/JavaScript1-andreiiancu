// console.warn(`
// Folosind codul din Ex 14
// Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
// `);
// var person = {
//   firstName: 'Dragos',
//   lastName: 'Iordache',
//   birthYear: 1987,
//   age: 33,
//   email: 'dragos.iordache@gmail.ro',
//   species: [
//     { specie: 'papagal' },
//     { specie: 'caine' },
//     { specie: 'hamster' },
//     { specie: 'pisica' },
//   ],
//   pets: [
//     {
//       name: 'Twix',
//       species: 'papagal',
//       age: 4,
//     },
//     {
//       name: 'Mars',
//       species: 'caine',
//       birthYear: 2018,
//       age: 2,
//     },
//     {
//       name: 'Bounty',
//       species: 'hamster',
//       age: 4,
//     },
//     {
//       name: 'Species',
//       species: 'pisica',
//       age: 6,
//       birthYear: 2014,
//     },
//   ],
// };

// person.pets.forEach((pet, i) => {
//   console.log(pet);
// });

// console.warn(`
//  Folosind o bucla for afiseaza suma anilor animalelor.
// `);
// let petsLength = person.pets.length;
// let totalAge = 0;
// for (let i = 0; i < petsLength; i++) {
//   const pet = person.pets[i];
//   totalAge += pet.age;
//   // totalAge = totalAge + friend.age
// }
// console.log(totalAge);

// console.warn(`
// Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.
// `);
// sentence = '';
// person.pets.forEach((pet) => {
//   sentence += `${pet.name} este ${pet.species} si are ${pet.age} ani. `;
// });
// console.log(sentence);

// console.warn(`
//   Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).
// `);
// sentence = '';
// person.pets.forEach((pet) => {
//   let ageDiff = Math.abs(person.age - pet.age);

//   sentence += `Intre ${person.firstName} si ${pet.name} este o diferenta de ${ageDiff} ani. `;
// });
// console.log(sentence);

// console.warn(`
//   Folosind o bucla for afiseaza in ordine inversa numele animalelor din array (.reverse() si inainte si dupa bucla).
// `);
// // [...person.pets].reverse().forEach((pet) => {
// //   console.log(pet);
// // });

// console.warn(`
//   Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am si este cu y ani mai mic decat mine.”
// `);
// for (let i = 0; i < petsLength; i++) {
//   const pet = person.pets[i];

//   if (pet.age !== 0) {
//     console.log(
//       `Intre ${person.firstName} si ${pet.name} este o diferenta de ${Math.abs(
//         person.age - pet.age,
//       )} ani.`,
//     );
//   }
// }
// console.log(
//   ` ${
//     person.pets[1].name
//   } este cel mai batran animal pe care il am si este cu ${Math.abs(
//     person.pets[1].age - person.age,
//   )} ani mai mic decat mine.`,
// );

// console.warn(`
//   Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.
// `);
// //Nu i-am dat de cap...

let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
  Folosind fisierele de la exercitiul 06, si doua bucle for imbricate (nested) afiseaza
  diferenta de varsta dintre fiecare membru al arrayului friends si ceilalti membri.
  Poti folosi metoda pentru a converti numerele negative in pozitive.
`);
sentence = '';
person.friends.forEach((friend) => {
  let ageDiff = Math.abs(friend.age - friend.age);

  sentence += `
  Intre ${person.friends[0].name} si ${person.friends[1].name} este o diferenta de ${ageDiff} ani.
  Intre ${person.friends[1].name} si ${person.friends[2].name} este o diferenta de ${ageDiff} ani.
  `;
});
console.log(sentence);
//Nu reusesc sa-mi dau seama cum trebuie sa fac ca sa apara si diferenta de ani corecta.
