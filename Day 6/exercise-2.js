const countries = require("./assets/countries");
const webTechs = require("./assets/web_techs");

// 1. Develop a small script which generate any number of characters random id:
let length = Math.floor(Math.random() * 5) + 8;
let randomId = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (let i = 0; i < length; i++) {
  randomId += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(randomId);

// 2. Write a script which generates a random hexadecimal number.
console.log(`#${Math.floor(Math.random()*16777215).toString(16)}`);

// 3. Write a script which generates a random rgb color number.
const randomRed = Math.floor(Math.random() * 256);
const randomGreen = Math.floor(Math.random() * 256);
const randomBlue = Math.floor(Math.random() * 256);
const randomRGB = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
console.log(randomRGB);

// 4. Using the above countries array, create the following new array.
let newCountries = countries.map(country => country.toUpperCase())
console.log(newCountries);

// 5. Using the above countries array, create an array for countries length.
const lengthCountries = [];
countries.forEach(country => {lengthCountries.push(country.length);});
console.log(lengthCountries);

// 6. Use the countries array to create the following array of arrays:
const arrayCountry = [];
for (let i = 0; i < countries.length; i++) {
  const name = countries[i];
  const code = name.slice(0, 3).toUpperCase();
  const length = name.length;
  arrayCountry.push([name, code, length]);
}
console.log(arrayCountry);

// 7. In above countries array, check if there is a country or countries containing the word ‘land’. If there are countries containing ‘land’, print it as array. If there is no country containing the word ‘land’, print ‘All these countries are without land’.
const countryLand = countries.filter(country => country.toLowerCase().includes("land"));
if (countryLand) {
  console.log(countryLand);
} else {
  console.log("All these countries are without land");
}

// 8. In above countries array, check if there is a country or countries end with a substring ‘ia’. If there are countries end with, print it as array. If there is no country containing the word ‘ai’, print ‘These are countries ends without ia’.
const countryIa = countries.filter(country => country.toLowerCase().includes("ia"));
if (countryIa) {
  console.log(countryIa);
} else {
  console.log("All these countries are without land");
}

// 9. Using the above countries array, find the country containing the biggest number of characters.
let longestCountry = "";
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i];
  }
}
console.log(longestCountry);

// 10. Using the above countries array, find the country containing only 5 characters.
let char5Country = [];
for (let i = 0; i < countries.length; i++) {    
  if (countries[i].length == 5) {
    char5Country.push(countries[i]);
  }
}
console.log(char5Country);

// 11. Find the longest word in the webTechs array
let longTech = '';
for (let i = 0; i < webTechs.length; i++) {    
  if (webTechs[i].length > longTech.length) {
    longTech = webTechs[i]
  }
}
console.log(longTech);


// 12. Use the webTechs array to create the following array of arrays:
const arrayTechs = [];
for (let i = 0; i < webTechs.length; i++) {
  const name = webTechs[i];
  const length = name.length;
  arrayTechs.push([name, length]);
}
console.log(arrayTechs);

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ["MongoDB", "Express", "React", "Node"]
for (let i = 0; i < mernStack.length; i++) {
    console.log(mernStack[i][0]);
}

// 14. Iterate through the array, [“HTML”, “CSS”, “JS”, “React”, “Redux”, “Node”, “Express”, “MongoDB”] using a for loop or for of loop and print out the items.
const webTech = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (i = 0; i < webTech.length; i++) {
    console.log(webTech[i]);
}

// 15. This is a fruit array , [‘banana’, ‘orange’, ‘mango’, ‘lemon’] reverse the order using loop without using a reverse method.
const fruits = ['banana', 'orange', 'mango', 'lemon'];
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}

// 16. Print all the elements of array as shown below.
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
  }
}
