var person = {
  name: 'Andrei',
  surname: 'Iancu',
  age: 32,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: true,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 32,
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

console.log(person.friends.larry);
console.log(person.skills.javaScript);
// Afiseaza varsta prietenei Carol
console.log(person.friends.carol.age);

// Folosind anul curent calculeaza si afiseaza
// anul de nastere al lui Larry
console.log(2020 - person.friends.larry.age);

// Calculeaza diferenta si afiseaza propozitia:
// “Steven este cu xx ani mai mare decat
// Larry.” folosind proprietatile name-concatenare
console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.larry.age) +
    ' ani mai mare decat ' +
    person.friends.larry.name +
    ' ',
);

// Afiseaza propozitia: “Prietenul meu Steven Stevenson
// are xx ani” folosind doar proprietatile -concatenare
console.log(
  ' Prietenul meu ' +
    person.friends.steven.name +
    ' ' +
    person.friends.steven.surname +
    ' are ' +
    person.friends.steven.age +
    ' ani. ',
);

// Afiseaza propozitia:
// “Prietenii mei sunt: Steven, Carol si Larry.-backticuri
console.log(
  `Prietenii mei sunt: ${person.friends.steven.name} ${person.friends.carol.name} si ${person.friends.larry.name}`,
);

// Afiseaza numarul de
// caractere al numelui de familie al lui Steven
console.log(person.friends.steven.surname.length);

// Afiseaza varsta prietenei Carol
console.log(person.friends.carol.age);

// Folosind anul curent calculeaza si afiseaza
// anul de nastere al lui Steven, apoi al lui Carol.
console.log(2020 - person.friends.steven.age);
console.log(2020 - person.friends.carol.age);

// Calculeaza diferenta si afiseaza propozitia:
// “Steven este cu xx ani mai mare decat Carol.”
// folosind proprietatile name.
console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.carol.age) +
    ' ani mai mare decat ' +
    person.friends.carol.name +
    ' ',
);

// Afiseaza propozitia: “Prietena mea Carol Carolson
// are xx ani.” folosind doar proprietatile.
console.log(
  ' Prietena mea ' +
    person.friends.carol.name +
    ' ' +
    person.friends.carol.surname +
    ' are ' +
    person.friends.carol.age +
    ' ani. ',
);

// Afiseaza propozitia: “Prietenii mei sunt:
// Larry, Carol si Steven.”.
console.log(
  `Prietenii mei sunt: ${person.friends.larry.name} ${person.friends.carol.name} si ${person.friends.steven.name}`,
);

// Afiseaza numarul de caractere al numelui de familie
// al lui Larry
console.log(person.friends.larry.surname.length);

// Calculeaza diferenta dintre numarul de caractere al
// numelor lui Steven si Carol.
console.log(
  person.friends.steven.name.length - person.friends.carol.name.length,
);
