/*
Animal:

Pets;
Dog
Cat
Hamster

Birds:
Parrot
Hummingbird
Eagle

Fish:
Shark
Dolphin
Tuna
*/

import { Dog } from './js/Dog.js';
import { Cat } from './js/Cat.js';
import { Hamster } from './js/Hamster.js';
import { Whale } from './js/Whale.js';
import { Orca } from './js/Orca.js';
import { Dolphin } from './js/Dolphin.js';
import { Parrot } from './js/Parrot.js';
import { Stork } from './js/Stork.js';
import { Owl } from './js/Owl.js';
const rex = new Dog('Rex', 'black');
const rainis = new Cat('Rainius', 'mix');
const cake = new Hamster('Cake', 'brown');
const blue = new Whale('Blue', 'dark blue');
const keiko = new Orca('Keiko', 'black and white');
const coral = new Dolphin('Coral', 'grey');
const skittles = new Parrot('Skittles', 'rainbow');
const ciconia = new Stork('Ciconia', 'white');
const hoot = new Owl('Hoot', 'light brown');
console.log(rex.hi());
console.log(rainis.hi());
console.log(cake.hi());
console.log(cake.voice());
console.log(rex.voice());
console.log(rainis.voice());
console.log(blue.characteristics());
console.log(keiko.characteristics());
console.log(coral.characteristics());
console.log(skittles.characteristics2());
console.log(ciconia.characteristics2());
console.log(hoot.characteristics2());