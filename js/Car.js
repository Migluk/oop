/* 
intro() - apibudina masinos modeli ir spalva.
drive(km) - nurodzius norima nuvaziuoti atstuma, yra paskaiciuojamos degalu sanaudos, jei nepakanka degalu, tai ribiniu atveju masina sustoja ir issijungia.
engineOn() - isjungia varikli, jei yra ijungtas.
engineOff() - ijungia varikli, jei yra isjungtas.
reFill() - uzpilti degalu, bet ne daugiau, nei telpa ir jei variklis yra isjungtas.
*/

export class Car {
    constructor(model, color, tankMax, expenses) {
        this.model = model;
        this.color = color;
        this.tankMax = tankMax;
        this.tank = 0;
        this.expenses = expenses;
    }

    intro() {
        return `This ${this.model} is ${this.color}, it's tank compacity is ${this.tankMax}.`
    }

    refill(volume) {
        if (this.engineIsOn) {
            return 'Error: to refill a tank, you must turn off engine first.';
        }

        if (typeof volume !== 'number' || !isFinite(volume)) {
            return 'Error: Only real numbers allowed.';
        }

        if (volume < 0) {
            return `Refill with ${volume} litres is not allowed.`;
        }

        if (this.tankMax - this.tank >= volume) {
            this.tank += volume;
        } else {
            this.tank = this.tankMax;
        }
    }

    countFuel(km) {
        return (km / 100) * this.expenses;
        }
            
        isEnough(km) {
        const needFuel = this.countFuel(km);
        if (needFuel <= this.tank);
        }
         
    } 

