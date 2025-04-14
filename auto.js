import {Car} from './js/Car.js';
const volvo = new Car('Volvo S40', 'red', 55);
const nissan = new Car('Nissan', 'blue', 60, 7);
console.log(nissan.intro());
console.log(volvo.intro());

console.log(nissan.refill(-5));
console.log(nissan.refill(60));
console.log(nissan.refill(null));
console.log(nissan.refill('pazadais uzpilti'));
console.log(nissan.refill(NaN));
console.log(nissan.refill(Infinity));
console.log(nissan);
console.log(nissan.countFuel(307));

