let dateBuilder = [
  () => {
    return '2019';
  },
  () => {
    return 'Februarie';
  },
  () => {
    return '24';
  },
];

dateBuilder[3] = () => {
  return 'Duminica';
};

console.warn(`
  Folosind arrayul dateBuilder. Afiseaza luna curenta.
`);
console.log(dateBuilder[1]());

console.warn(`
  Afiseaza propozitia: “Suntem in anul an.”.
`);
console.log(`Suntem in anul ${dateBuilder[0]()}.`);

console.warn(`
  Afiseaza propozitia: “Suntem in luna ll in anul aa.”.
`);
console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}.`);

console.warn(`
  Afiseaza propozitia: “Astazi este zz”.
`);
console.log(`Astazi este ${dateBuilder[3]()}.`);

console.warn(`
  Folosind arrayul dateBuilder. Afiseaza anul curent.
`);
console.log(`Astazi este ${dateBuilder[0]()}.`);

console.warn(`
  Afiseaza propozitia: “Suntem in luna ”.
`);
console.log(`"Suntem in luna ${dateBuilder[1]()}."`);

console.warn(`
  Afiseaza propozitia: “Astazi este zi, data”.
`);
console.log(`"Astazi este ${dateBuilder[2]()}"`);

console.warn(`
  Afiseaza propozitia: “Data curenta este zi luna an”.
`);
console.log(
  `"Data curenta este: ${dateBuilder[2]()} ${dateBuilder[1]()} ${dateBuilder[0]()}."`,
);
