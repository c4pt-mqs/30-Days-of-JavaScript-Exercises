// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter base: ")
let height =  prompt("Enter height: ")
console.log(`The area of the triangle is ${0.5 * base * height}`)

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = parseInt(prompt("Enter side a: "));
let b = parseInt(prompt("Enter side b: "));
let c = parseInt(prompt("Enter side c: "));
let perimeter1 = a + b + c;
console.log(`The perimeter of the triangle is ${perimeter}`);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = parseInt(prompt("Enter length: "));
let width = parseInt(prompt("Enter width: "));
let perimeter2 = 2 * (length + width)
console.log(`The perimeter of the rectangle is ${perimeter}`);

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
pi = 3.14
let r = parseInt(prompt("Enter radius: "));
let circle = pi * r ** 2
let area = 2 * pi * r
console.log(`The circumference of the circle is ${circle} and area ${area}`);

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// y = mx+b, the slope is m
const slope = 2;
const xInt = -slope / 2;
const yInt = -2;
console.log(`Slope: ${slope}, x-intercept: ${xInt}, y-intercept: ${yInt}`);


// 6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
const points = [x1=2, y1=2, x2=6, y2=10]
console.log(`The slope is ${(points[3] - points[1]) / (points[2] - points[0])}.`)

// 7. Compare the slope of above two questions.
// They are same

// 8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = 2;  // change the value of x to any number you want
let y = x ** 2 + 6 * x + 9;
console.log(`When x is ${x}, y is ${y}`);

// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = parseInt(prompt("Enter hours: "))
let ratePerHour = parseInt(prompt("Enter rate per hour: "))
console.log(`Your weekly earning is ${hours * ratePerHour}`);

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let yourName = prompt("Enter your name: ")
if (yourName.length > 7 ) {
    console.log("Your name is long.");
} else {
    console.log("Your name is short.");
}

// 11. Compare your first name length and your last name length and you should get this output.
let firstName = prompt("Enter your name: ")
let lastName = prompt("Enter your last name: ")
if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your last name, ${lastName}.`);
} else {
    console.log(`Your last name, ${lastName} is longer than your first name, ${firstName}.`);
}

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 43
let yourAge = 19
if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
    console.log(`I am ${yourAge - myAge} years older than you.`);
}

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthYear = prompt("Enter birth year: ");
let now = new Date().getFullYear();
let age = now - birthYear;
if (age >= 18) {
  console.log(`You are ${age}. You are old enough to drive.`);
} else {
  console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);
}

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let yearsLive = parseInt(prompt("Enter number of years you live: "));
let getSeconds = getSeconds(yearsLive)
console.log(`You lived ${getSeconds} seconds`);


// 15. Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
console.log(`${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${('0' + new Date().getDate()).slice(-2)} ${('0' + new Date().getHours()).slice(-2)}:${('0' + new Date().getMinutes()).slice(-2)}:${('0' + new Date().getSeconds()).slice(-2)}`);
