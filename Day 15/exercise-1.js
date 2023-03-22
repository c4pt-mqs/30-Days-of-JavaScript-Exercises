// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    getLegs() {
        return this.legs;
    }

    setLegs(legs) {
        this.legs = legs;
    }

    makeSound() {
        throw new Error("Subclass must implement abstract method");
    }
}

class Dog extends Animal {
    makeSound() {
        return "Woof!";
    }
}

class Cat extends Animal {
    makeSound() {
        return "Meow!";
    }
}

class Bird extends Animal {
    makeSound() {
        return "Chirp!";
    }
}

// 2. Create a Dog and Cat child class from the Animal Class.
const myDog = new Dog("Buddy", 3, "brown", 4);
const myCat = new Cat("Whiskers", 2, "white", 4);
console.log(myDog, myCat);

module.exports = Animal;