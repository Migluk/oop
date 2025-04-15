import { Birds } from "./Birds.js";
export class Parrot extends Birds {
    constructor(name, feathercolor) {
        super(name, feathercolor);
        this.wingcount = 2;
        this.beak = 1;
        
    }
}