
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

// adding methods to sub classes 
class Book {
    constructor(title) {
        this.title = title;
        this.page = 1;
    }
    setBookmark(page) {
        this.page = page;
    }
}
class Cookbook extends Book {
};
const cookBook1 = new Cookbook("Why We Sleep");
cookBook1.setBookmark(11);
console.log(cookBook1)

class Employee {
    constructor(company) {
        this.company = company;
    };
    clockIn() {
        console.log("Clocking in for " + this.company);
    }
} 
class Lawyer extends Employee {
    work() {
        console.log("Meeting compliance team");
    }
};
class Headchef extends Employee {
    work() {
        console.log("Prepare vegetables");
    }
};

const lawyer1 = new Lawyer("Anantara");
const headChef1 = new Headchef("Spice Spoons");
console.log(lawyer1);
console.log(headChef1);

lawyer1.clockIn();
headChef1.clockIn();

lawyer1.work();
headChef1.work();