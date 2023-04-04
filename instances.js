
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

