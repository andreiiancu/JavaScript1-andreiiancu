var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
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

// Afiseaza propozitia: “Ma numesc xxx yyy si stiu
// html si css.” Foloseste notatia cu paranteze patrate
console.log(
  `Ma numesc ${person.name} ${person.surname} ${person.skills[0]} si ${person.skills[2]}.`,
);

// Afiseaza propozitia “Sunt xxx si acum invat
// JavaScript.” Nu folosi valoarea din arrayul de skills.concatenare
console.log('Sunt ' + person.name + ' si acum invat JavaScript.');

// Afiseaza propozitia “Am x prieteni: Larry,
// Steven si Carol.” Foloseste proprietatea length si
// apeleaza direct proprietatile name ale obiectelor.interpolare bacticuri
console.log(
  `Am ${person.friends.length} prieteni: ${person.friends[0].name}, ${person.friends[1].name} si ${person.friends[2].name}.`,
);

// Afiseaza propozitia: “Ma numesc xxx yyy si vreau sa invat javascript.”
// Foloseste notatia cu paranteze patrate pentru skillul javascript.
console.log(
  `Ma numesc ${person.name} ${person.surname} si vreau sa invat ${person.skills[1]}`,
);

// Afiseaza propozitia “Sunt xxx si stiu HTML si CSS.”.
// Nu folosi valoarea din arrayul de skills.
console.log(' Sunt ' + person.name + ' si stiu HTML si CSS.');

// Afiseaza propozitia “Am x prieteni: Larryson, Stevenson si Carolson.”.
// Foloseste proprietatea length si apeleaza direct proprietatile name ale obiectelor.
`Am ${person.friends.length} prieteni: ${person.friends[0].name}, ${person.friends[1].name} si ${person.friends[2].name}`;

// Afiseaza propozitia “Numele meu este xxx yyy, am zz ani si n prieteni.”.
// Foloseste metoda length pentru a calcula lungimea arrayului de prieteni.
console.log(
  `Numele meu este ${person.name}, am ${person.age} ani si ${person.friends.length} prieteni. `,
);
