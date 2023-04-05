
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
}
class Dishwasher extends Apliances {   
};
const dishwasher1 = new Dishwasher("Mitsubishi");
console.log(dishwasher1);
