// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:’You are old enough to drive’ but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = parseInt(prompt("Enter your age: "))
if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    console.log(`You will be allowed to drive after ${18 - age} years.`);
}

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = parseInt(prompt("Enter own age: "))
let yourAge = parseInt(prompt("Enter your age: "))
if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge < myAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`);
}

// 3. If a is greater than b return ‘a is greater than b’ else ‘a is less than b’. Try to implement it in to ways
let a = parseInt(prompt("Enter own age: "))
let b = parseInt(prompt("Enter your age: "))
if (a > b) {
    console.log(`${a} is greater than ${b}.`);
} else if (a < b) {
    console.log(`${b} is greater than ${a}.`);
}

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let isDivisible = parseInt(prompt("Enter a number: "))
if ((isDivisible % 2) == 0) {
    console.log(`${isDivisible} is an even number`);
} else {
    console.log(`${isDivisible} is an odd number`);
}
