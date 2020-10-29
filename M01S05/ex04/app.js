let calculateRectangleArea = (L, l) => {};

console.warn(`
Calculeaza suprafata de tapet necesara
pentru o camera de 6 pe 4 m cu tavan inalt de 2.5m,
stiind ca exista o usa de 2.2 pe 1.5 si o suprafata
de ferestre de 2 pe 1.5.
`);
//putem folosi mai multe variabile.
//suprafata peretuluilet
let longWallSurface = calculateRectangleArea(6, 2.5);
let shortWallSurface = calculateRectangleArea(4, 1.5);
let totalWallSurface = 2 * (longWallSurface + shortWallSurface);
let doorSurface = calculateRectangleArea(2.2, 1.5);
let windowSurface = calculateRectangleArea(2, 1.5);
console.log(`
  Suprafata de tapet este:
  ${totalWallSurface - doorSurface - windowSurface}.
  `);

console.warn(`
Creaza o functie wrapper numita calculateSquareArea()
pentru calculateRectangleArea() care sa primeasca ca
parametru latura unui patrat si sa calculeze suprafata acestuia.
O functie wrapper este o functie care “imbraca” o
functie existenta pentru a-i aduce imbunatatiri,
extra cod sau pentru a-i limita in mod intentionat capacitatile.
https://github.com/pixellab-ro/curs-javascript/
blob/master/Sedinta05/tema/index.html
`);
//calculam suprafata unui patrat. Nu are sens sa se puna latura de 2 ori.
let calculateSquareArea = (l) => {
  let squareArea = calculateRectangleArea(l, l);

  return squareArea;
};
//Asta inseamna wraper peste functie. Wraper=imbraca.car
console.log(`Patratul are ${calculateSquareArea(2)}mp.`);
