import { Animal } from "./Animal.js";
export class Fish extends Animal {
        constructor(name, skincolor) {
            super(name);
            this.skincolor = skincolor;
            this.blowhole = 1;
            this.tailfin = 1;
            this.eyecount = 2;
        }
    }

