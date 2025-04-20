class animal{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
        this.legCount = 0;
        this.isHungry = true;
        this.species = "unknown";
    }
    
    feed(food)
    {
        if(this.isHungry===true && this.wantedFood === food)
        {
            this.isHungry=false;
            return "Ačiū už pietus"
        }
        else if(this.isHungry === true)
        {
            return "Duok tinkamą maistą!!"
        }
        else
        {
            return "Nenoriu valgyti."
        }
            
    }
}

class Lion extends animal{
    constructor(name, age)
    {
        super(name, age)
        this.legCount = 4;
        this.species = "liutas";
        this.wantedFood = "meat"
    }
}

class Penguin extends animal{

    constructor(name, age)
    {
        super(name, age)
        this.legCount = 2;
        this.wingCount = 2;
        this.isHungry = false;
        this.species = "pingvinas";
        this.wantedFood = "fish";
    }

}


class Flamingo extends animal{

    constructor(name, age)
    {
        super(name, age)
        this.legCount = 2;
        this.wingCount = 2;
        this.isHungry = false;
        this.species = "flamingas";
        this.wantedFood = "shrimp";
    }

}

const simba = new Lion("Simba", 4)
console.log(simba.name);
console.log(simba.isHungry);
console.log(simba.feed("meat"));
console.log(simba.isHungry);
console.log(simba.feed());

const kowalski = new Penguin("Kowalski", 10)
console.log(kowalski.legCount)


const zoo = [kowalski, simba, new Lion("Puma", 8), new Penguin("Rico", 3), new Flamingo("Richard", 6)]



