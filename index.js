// class (klase) -> object (objektas)
// blyno receptura -> blynaas (valgomas)
// namo brezinys -> namas

class Dog {
    constructor(vardas, kailioSpalva) {
        this.name = vardas;
        this.furColor = kailioSpalva;
        this.age = 0;
        this.legCount = 4;
        this.hasTail = true;
    }

    hi() {
        return `Hi, my name is ${this.name}!`;
    }

    intro() {
        return `My fur is ${this.furColor}, and I am ${this.age} years old.`;
    }

    birthday() {
        return `Happy birthday ${this.name}! Now you are this age ${++this.age} years old!`;
    }

    lostTail() {
        this.hasTail = false;
    }

    lostLeg() {
        if (this.legsCount > 0) {
            this.legsCount--;
        }
    }

    changePose() {
        this.isStanding = !this.isStanding;
    }

    changeFurColor(newColor) {
        this.furColor = newColor;
        return `${this.name} has ${this.furColor} fur.`;
    }
}


const rex = new Dog('Rex', 'black');
const brisius = new Dog('Brisius', 'white');

console.log(rex);
rex.lostLeg();
console.log(rex.age);
console.log(brisius.age);
console.log(rex.furColor);
console.log(rex.legCount);
console.log(rex.name);
console.log(brisius.name);
console.log(brisius.furColor);
console.log(brisius.legCount);
console.log(rex.intro());
console.log(brisius.hi());
console.log(brisius.birthday());
console.log(rex.birthday());
brisius.lostTail();
brisius.lostLeg();
brisius.changePose();
console.log(brisius.changeFurColor('red'));