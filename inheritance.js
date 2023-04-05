
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
};
const dog = new Dog("Luther");
console.log(dog);

class Apliances {
    constructor(brand) {
        this.brand = brand;
    }
    turnOn() {
        console.log(this.brand + " is turning on");
    }
}
class Dishwasher extends Apliances {   
};
const dishwasher1 = new Dishwasher("Mitsubishi");
console.log(dishwasher1);

// advance inheritance 
console.log(dishwasher1.brand);
dishwasher1.turnOn();
class WashingMachine extends Apliances {};
const washingMachine1 = new WashingMachine("Bosch"); 
washingMachine1.turnOn(); 