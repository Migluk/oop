export class Cat {
    constructor(name, furColor) {
        this.name = name;
        this.furColor = furColor;
        this.legCount = 4;
        this.eyeCount = 2;
    }

hi() {
    return `Hi, my name is ${this.name}!`; 
}

voice() {
    return `Im ${this.name}, and I make a meow noise 🐈!`; 
}

}