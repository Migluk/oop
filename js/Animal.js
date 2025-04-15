export class Animal {
    constructor(name, skincolor, feathercolor) {
        this.name = name;
        this.skincolor = skincolor;
        this.blowhole = 1;
        this.tailfin = 1;
        this.eyecount = 2;
        this.feathercolor = feathercolor;
        this.wingcount = 2;
        this.beak = 1;
    }

    characteristics() {
        return `This water mammals name is ${this.name}, the color of their skin is ${this.skincolor}. They have ${this.blowhole} blowhole, ${this.tailfin} tail fin and ${this.eyecount} eyes.`;

    }

    characteristics2() {
        return `This birds name is ${this.name}, its feather colors are ${this.feathercolor}. It has ${this.wingcount} wings and ${this.beak} beak.`;
    }
}

