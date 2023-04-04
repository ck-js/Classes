
class User {
    constructor(name) {
        this.name = name;
        this.isOnline = true;
    }
}
const user1 = new User("Jeremy");
const user2 = new User("Richard");

user1.isOnline = false;

console.log(user1);
console.log(user2)

class Food {
    constructor(name,calories) {
        this.name = name;
this.calories = calories;
    }
}

const fruit1 = new Food("Banana", 105);

fruit1.calories =  fruit1.calories / 2;
fruit1.calories *= 2;
console.log(fruit1);

class Player {
     constructor() {}
    sayHi() {
        console.log("Hey I play for Chelsea");
    }
}
const player1 = new Player();
player1.sayHi();
console.log(player1);

class Sport {
    constructor(name) {
        this.name = name;
        this.scoreValue = 0;
    }
}
const sport1 = new Sport("Football");
const sport2 = new Sport("Cricket");

sport1.scoreValue = 3;
sport2.scoreValue = 150-2;

console.log(sport1);
console.log(sport2);

