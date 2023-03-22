// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
const countries = require("./assets/countries");
const webTechs = require("./assets/web_techs");

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[^\w\s]/g, '').split(/\s+/)
console.log(words, words.length);

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// 4. add ‘Meat’ in the beginning of your shopping cart if it has not been already added
shoppingCart.shift('Olive');

// 5. add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// 6. remove ‘Honey’ if you are allergic to honey
const allergic = shoppingCart.indexOf('Honey');
if (allergic > -1) {
    shoppingCart.splice(allergic, 1);
}

// 7. modify Tea to ‘Green Tea’ 
const myTea = shoppingCart.indexOf('Tea');
if (myTea > -1) {
  shoppingCart[myTea] = 'Green Tea';
}

// 8. In countries array check if ‘Ethiopia’ exists in the array if it exists print ‘ETHIOPIA’. If it does not exist add to the countries list. 
if (countries.includes("Ethiopia")) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
}

// 9. In the webTechs array check if Sass exists in the array and if it exists print ‘Sass is a CSS preprocess’. If it does not exist add Sass to the array and print the array. 
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
  } else {
    webTechs.push('Sass');
    console.log(webTechs);
} 

// 10. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack);
