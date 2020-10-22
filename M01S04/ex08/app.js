let i = 1;

// Modifica exemplul astfel incat bucla sa
// numere de la 1 la 100.
// while (i <= 100) {
//   console.log(i);

//   i++;
//   //i=i+1;
// }

//  Ce se intampla daca i este initializat cu
//  valoarea 101?

// Modifica exemplul astfel incat bucla sa numere de
// la 1 la 99 (dar nu schimba numarul 100).
// while (i < 100) {
//   console.log(i);

//   i++;
//   //i=i+1;
// }

// Folosind keywordul break opreste bucla atunci
// cand numarul este egal cu 50 (dar afiseaza-l).
while (i < 100) {
  console.log(i);

  if (i === 50) {
    break;
  }

  i++;
  //i=i+1;
}
