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
import { Cat } from './js/Cat.js'
import { Hamster } from './js/Hamster.js'
const rex = new Dog('Reksas', 'black');
const rainis = new Cat('Rainius', 'mix');
const cake = new Hamster('Cake', 'brown');
console.log(rex.hi());
console.log(rainis.hi());
console.log(cake.hi());
console.log(cake.voice());
console.log(rex.voice());
console.log(rainis.voice());



