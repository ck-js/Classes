class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    receiveDamage() {
        this.health = this.health - 10;
    }
}
class Wizard extends Human {
    receiveDamage() {
        this.health -= 5;
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