class Car {
    topReverseSpeed = -50;

    constructor(make, color, wheels, speed) {
        this.make = make;
        this.color = color;
        this.wheels = wheels;
        this.speed = speed;

        this.topSpeed = 160;
        this.isTrunkOpen = false;
        this.areLightsOn = false;
    }

    accelerate() {
        this.speed++;
        // this.speed = this.speed + 1;
        // this.speed += 1;
    }

    decelerate() {
        // this.speed--;
        // this.speed = this.speed -1;
        // this.speed -= 1;
    }

    stop() {
        this.speed = 0;

        console.log(this.speed);
    }

    setSpeed(speed) {
        if (speed > this.topSpeed) {
            this.speed = this.topSpeed;

            return;
        }

        if (speed < this.topReverseSpeed) {
            this.speed = this.topReverseSpeed;

            return;
        }

        this.speed = speed;
    }

    openTrunk() {
        this.isTrunkOpen = true;
    }

    closeTrunk() {
        this.isTrunkOpen = false;
    }

    turnLightsOn() {
        this.areLightsOn = true;
    }

    turnLightsOff() {
        this.areLightsOn = false;
    }

    flashLights() {
        this.areLightsOn(); //ult ex
        console.log(this.areLightsOn);

        setTimeout(() => {
            this.turnLightsOff();
            console.log(this.areLightsOn);
        }, 2000);
    }
}

// new Date()

let audi = new Car('Audi', 'black', 4, 50);
audi.setSpeed(4);
audi.decelerate();
audi.decelerate();
audi.decelerate();
audi.decelerate();
audi.decelerate();
// displaySpeed() {
//     console.log('Viteza curenta este:'
//         audi.setSpeed - 5);
// }

let opel = new Car('Opel', 'blue', 5, 70);
opel.setSpeed(4);
opel.decelerate();
opel.decelerate();
opel.decelerate();
opel.decelerate();
opel.decelerate();
// displaySpeed() {
//     console.log('Viteza curenta este:'
//         audi.setSpeed - 5);
// }

console.warn(`
  Instantiaza o alta masina (Opel, red, cu 4 roti si viteza 3).
  O poti salva intr-o variabila numita opel.
`);

// const cars = [audi, opel];
// var model = make;

// Cars.forEach((Cars) => {
//     console.log(
//         `Masina are marca ${this.make} si se deplaseaza cu o viteza de ${this.speed} km/h`,
//     );
//     Cars++;
// });

const arrayCars = [audi, opel];
let auto = 0;

arrayCars.forEach((element) => {
    console.log(element);
});

// console.log(
//     `Masina era marca ${this.make} si se deplasa cu ${this.speed} km/h`,
// );
console.warn(`
  Adauga o metoda numita stop() care sa faca proprietatea
  speed 0, apoi afiseaza viteza.
`);

// const cars = [audi, opel];

// Adauga o proprietate booleana numita isTrunkOpen
// si asigneaza-i valoarea false.
// Adauga metode numite openTrunk() si closeTrunk()
// care sa seteze proprietatea isTrunkOpen pe true, respectiv false.
// Adauga o proprietate booleana numita areLightsOn
// si asigneaza-i valoarea false.
// Adauga metode numite turnLightsOn() si turnLightsOff()
// care sa manipuleze valoarea.
// Adauga o metoda numita flashLights() care sa apeleze cele
// doua metode in succesiune, folosind metoda window.setTimeout().
// Adauga cele doua variabile (opel si audi) intr-un array
// numit cars. (var cars = [opel, audi])
// Ruleaza o bucla prin forEach si afiseaza propozitiile
// (pentru fiecare din masini)
// “Masina era marca make si se deplasa cu speed km/h”
// In fiecare iteratie, decelereaza masina cu 5 unitati, apoi
// afiseaza: “Viteza noua este speed km/h” (setSpeed(car.speed - 5))
