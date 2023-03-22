const countries = require("./assets/countries");
const webTechs = require("./assets/web_techs");
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//  1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let a = 0; a <= 10; a++) {
    console.log(a)
}

//  2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let b = 10; b >= 0; b--) {
    console.log(b)
}

//  3. Iterate 0 to n using for loop
n =  parseInt(prompt("Enter a number: "))
for (let a = 0; a <= n; a++) {
    console.log(a)
}

//  4. Write a loop that makes the following pattern using console.log():
//  #
//  ##
//  ###
//  ####
//  #####
//  ######
//  #######
for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
}

//  5. Use loop to print the following pattern:
//  0 x 0 = 0
//  1 x 1 = 1
//  2 x 2 = 4
//  3 x 3 = 9
//  4 x 4 = 16
//  5 x 5 = 25
//  6 x 6 = 36
//  7 x 7 = 49
//  8 x 8 = 64
//  9 x 9 = 81
//  10 x 10 = 100
for (let d = 0; d <= 10; d++) {
    console.log(`${d} x ${d} = ${d * d}`);
}

//  6. Using loop print the following pattern
//  f    f^2   f^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
console.log("f    f^2   f^3");
for (let f = 0; f <= 10; f++) {
  let f2 = f ** 2;
  let f3 = f ** 3;
  console.log(`${f}    ${f2}    ${f3}`);
}

//  7. Use for loop to iterate from 0 to 100 and print only even numbers
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
}

//  8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (i = 0; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i)
  }
}

//  9. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let a = 2; a <= 100; a++) {
  let count = 0;
  for (let b = 1; b <= a; b++) {
    if (a % b === 0) count++;
  }
  if (count === 2) console.log(a);
}

//  10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
for (i = 0; i <= 100; i++) {
  console.log(i**i);
}

//  11. The sum of all numbers from 0 to 100 is 5050.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

//  12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(`even number: ${i}`);
  } else if (i % 2 == 1) {
      console.log(`odd number: ${i}`);
  }
}

//  13. The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
let evenSum1 = 0;
let oddSum1 = 0;
for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum1 += i;
  } else if (i % 2 == 1) {
    oddSum1 += i;
  }
}
console.log(`Total of even numbers ${evenSum1}`);
console.log(`Total of odd numbers ${oddSum1}`);

//  14. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let evenSum2 = 0;
let oddSum2 = 0;
for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum2 += i;
  } else if (i % 2 == 1) {
    oddSum2 += i;
  }
}
const sumArray = [evenSum2, oddSum2];
console.log(sumArray);

//  15. Develop a small script which generate array of 5 random numbers
let randomArray1 = [];
for (let i = 0; i < 5; i++) {
  let randomNumber = Math.floor(Math.random() * 10);
  randomArray1.push(randomNumber);
}
console.log(randomArray1);

//  16. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomArray2 = [];
for (let i = 0; i < 5; i++) {
  let randomNumber = Math.floor(Math.random() * 10);
  if (!randomArray2.includes(randomNumber)) {
    randomArray2.push(randomNumber);
  }
}
console.log(randomArray2);

//  17. Develop a small script which generate a six characters random id:
let randomText = (Math.random() + 1).toString(36).substring(6);
console.log(randomText);
