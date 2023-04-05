class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    receiveDamage() {
        this.health = this.health - 10;
    }
    attack() {
        console.log("Swing " + this.weapon);
    }
}
class Wizard extends Human {
    receiveDamage() {
        this.health -= 5;
    }
    attack() {
        super.attack();
        console.log("Zim Zoom");
    }
} 

const human1 = new Human("Hands");
const wizard1 = new Wizard("Axe");

console.log(human1);
console.log(wizard1);

human1.receiveDamage();
human1.receiveDamage();
wizard1.receiveDamage();
console.log(human1.health);
console.log(wizard1.health)

human1.attack();
wizard1.attack();

class Mammal {
    eat(food) {
        console.log(food + " nom nom");
    }
}
class Rabbit extends Mammal {
    eatVeggies(food) {
        if (food === "Lettuce") {
            console.log(food + "nom nom");
        }
    }
}
const mammal1 = new Mammal;
const rabbit1 = new Rabbit;

mammal1.eat("Ant");
rabbit1.eatVeggies("Chicken");

