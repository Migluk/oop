import { Plants } from "./Plants.js";
export class Flowers extends Plants {
    constructor(name, petalcolor) {
        super(name);
        this.petalcolor = petalcolor;
    }
}