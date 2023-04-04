
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
};
const dog = new Dog("Luther");
console.log(dog);