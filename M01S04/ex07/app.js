let friends = [
  {
    name: 'Dragos',
    surname: 'Iordache',
  },
  {
    name: 'Larry',
    surname: 'Larryson',
  },
  {
    name: 'Steven',
    surname: 'Stevenson',
  },
  {
    name: 'Carol',
    surname: 'Carolson',
  },
  {
    name: 'Andra',
    surname: 'Andrason',
  },
  {
    name: 'Rangar',
    surname: 'Ragnarson',
  },
];

console.warn(`Folosind o bucla for afiseaza proprietatea name a tuturor obiectelor din arrayul friends.
Afiseaza numele complet al tuturor prietenilor.`);
let friendsLength = friends.length;

for (let i = 0; i < friends; i++) {
  let friend = friends[i];

  console.log(friend.surname);
}

console.warn(`
  Afiseaza numele complet al tuturor prietenilor.
  Folosind keywordul break, afiseaza numele complet al prietenilor dar opeste bucla la primul surname care are numarul
  de caractere mai mare sau egal decat 9.
`);
for (let i = 0; i < friendsLength; i++) {
  let friend = friends[i];
  console.log(`${friend.name} ${friend.surname}`);

  if (friend.name === 'Steven' && friend.surname === 'Stevenson') {
    break;
  }
}

console.warn(`
Folosind keywordul continue, afiseaza
numele complet al prietenilor, doar daca
numarul de caractere total
al numelor lor este mai mare de 13.
`);
for (let i = 0; i < friendsLength; i++) {
  let friend = friends[i];

  if (`${friend.name}${friend.surname}`.length <= 13) {
    continue;
  }

  console.log(`${friend.name} ${friend.surname}`);
}
