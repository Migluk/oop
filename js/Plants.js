export class Plants {
    constructor(name, petalcolor) {
        this.name = name;
        this.petalcolor = petalcolor;
    }

    characteristics() {
        return `This ${this.name} has petals that are ${this.petalcolor}. `;
    }
}