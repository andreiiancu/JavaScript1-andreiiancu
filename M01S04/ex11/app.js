let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: true,
    node: false,
    react: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

console.warn(`
  Folosind Object.keys() pe proprietatea skills,
  afiseaza abilitatile persoanei daca acestea sunt true.
`);
Object.keys(person.skills).forEach((skill) => {
  if (person.skills[skill] === true) {
    console.log(skill);
  }
});

console.warn(`
  Prin aceeasi metoda, afiseaza o lista
  inversata cu numele complet al prietenilor.
`);
Object.keys(person.friends)
  .reverse()
  .forEach((friend) => {
    let friendObject = person.friends[friend];

    console.log(`${friendObject.name} ${friendObject.surname}`);
  });

console.warn(`
  Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.”
  folosind Object.keys()
`);
let friendsKeysArray = Object.keys(person.friends);
let sentence = 'Prietenii mei sunt ';
for (let i = 0; i < friendsKeysArray.length; i++) {
  let friendObject = person.friends[friendsKeysArray[i]];
  let punctuation = ', ';

  if (i === friendsKeysArray.length - 1) {
    punctuation = '.';
  }

  if (i === friendsKeysArray.length - 2) {
    punctuation = ' si ';
  }

  sentence += `${friendObject.name}${punctuation}`;
  // sentence = sentence +
  // sentence = `${sentence} ...`
}
console.log(sentence);

console.warn(`
  Folosind bucla, afiseaza mai multe propozitii
  (cate una per console.log()) care sa afiseze:
  “Larry este mai mare|mic decat Dragos.” etc…
`);
for (let i = 0; i < friendsKeysArray.length; i++) {
  let friendObject = person.friends[friendsKeysArray[i]];
  let sentenceFragment =
    friendObject.age - person.age >= 0 ? 'mai mare' : 'mai mic';

  console.log(
    `${friendObject.name} este ${sentenceFragment} decat ${person.name}`,
  );
}

console.warn(`
  Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei.
`);
Object.keys(person.skills);
console.log(person.skills);

console.warn(`
Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor.
`);
Object.keys(person.friends).forEach(function (keyName) {
  console.log(person.friends[keyName]);
});

console.warn(`
   Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.keys()
`);
//Nu-mi iese...

console.warn(`
  Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry are xx ani. Steven are …”
`);
for (let i = 0; i < friendsKeysArray.length[(0, 1)]; i++) {
  let friendObject = person.friends[friendsKeysArray[i]];
  let sentenceFragment = person.age;

  console.log(`${friendObject.name} are ${sentenceFragment}`);
}

//Nici asta nu stiu daca e ok

console.warn(`
Calculeaza suprafata de tapet necesara pentru o
camera de 12 pe 9 m cu tavan inalt de 2.5m, stiind ca exista o
usa de 3 pe 2 si o suprafata de ferestre de 3 pe 2.
`);
let longWallSurface = calculateRectangleArea(12, 2, 5);
let shortWallSurface = calculateRectangleArea(9);
let totalWallSurface = 2 * (longWallSurface + shortWallSurface);
let doorSurface = calculateRectangleArea(3, 2);
let windowSurface = calculateRectangleArea(3, 2);
console.log(`
  Suprafata de tapet este:
  ${totalWallSurface - doorSurface - windowSurface}.
  `);
