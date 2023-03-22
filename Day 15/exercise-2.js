const animals = require('./exercise-1');

// 1. Override the method you create in Animal class

class Dog extends animals {
    makeSound() {
      return "Woof woof!";
    }
  }
  
const myDog = new Dog("Buddy", 3, "brown", 4);
console.log(myDog.makeSound());
