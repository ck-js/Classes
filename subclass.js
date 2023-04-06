class Human  {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    receiveDamage() {
        this.health -= 10;
    }
    attack() {
        console.log("Swings " + this.weapon);
    }
}
class Warrior extends Human {
    constructor(weapon) {
        super(weapon);
    }
    receiveDamage() {
        this.health -= 5;
    }
    attack() {
        super.attack();
    }
}

const human1 = new Human("Fist and legs");
const warrior1 = new Warrior("Axes");

human1.attack();
warrior1.attack();

human1.receiveDamage();
warrior1.receiveDamage();

console.log(human1)
console.log(warrior1);


