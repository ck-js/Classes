

const book100 = {
    author: "William Shakespeare",
    title: "The Davinci Code",
}
console.log(book100);

class Book {
constructor(author, title) {
this.author = author;
this.title = title;
}
}
const book1 = new Book("Mathew Walker", "Why We Sleep");
console.log(book1);

class Animal {
    constructor(name, species) {
this.name = name;
this.species = species;
    }
}
const animal1 = new Animal("Scooby Doo", "Doggo");
console.log(animal1)

class VirtualPet {
constructor(name) {
    this.name = name;
}
eat(food) {
    if (food === "Jerry") {
        console.log("Yum Yum");
    }else {
        console.log("Discard");
    }
    }

}
const pet1 = new VirtualPet("Tom");
pet1.eat("Fish");
pet1.eat("Jerry");

class Inventory {
    constructor(size) {
        this.size = size;
    }
    increase(unit) {
        this.size += unit;
    }
}
const shampoo = new Inventory(100);
shampoo.increase(3);
console.log(shampoo)