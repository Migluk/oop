import { Animal } from "./Animal.js";
export class Birds extends Animal {
        constructor(name, feathercolor) {
            super(name);
            this.feathercolor = feathercolor;
            this.wingcount = 2;
            this.beak = 1;
        }
    }