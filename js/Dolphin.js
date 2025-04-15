import { Fish } from "./Fish.js";
export class Dolphin extends Fish {
    constructor(name, skincolor) {
        super(name, skincolor);
        this.blowhole = 1;
        this.tailfin = 1;
        this.eyecount = 2;
    }
}