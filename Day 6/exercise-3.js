const countries = require("./assets/countries");
const webTechs = require("./assets/web_techs");

// 1. Copy countries array(Avoid mutation)
const copyCountry = []
for (i = 0; i < countries.length; i++) {
    copyCountry[i] = countries[i];
  }
console.log(copyCountry);

// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
sortedCountries = copyCountry.sort()
console.log(sortedCountries);

// 3. Sort the webTechs array and mernStack array
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
sortedStack = mernStack.concat(webTechs).sort()
console.log(sortedStack);

// 4. Extract all the countries contain the word ‘land’ from the countries array and print it as array
const countryLand = countries.filter(country => country.toLowerCase().includes("land"));
if (countryLand) {
  console.log(countryLand);
}

// 5. Find the country containing the hightest number of characters in the countries array
let longestCountry = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i];
  }
}
console.log(longestCountry.split());

// 6. Extract all the countries containing only five characters from the countries array and print it as array
let char5Country = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length == 5) {
    char5Country.push(countries[i]);
  }
}
console.log(char5Country);

// 7. Extract all the countries containing two or more words from the countries array and print it as array
let multiWordCountries = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes(' ')) {
    multiWordCountries.push(countries[i]);
  }
}
console.log(multiWordCountries);

// 8. Reverse the countries array and capitalize each country and stored it as an array
for (let i = countries.length - 1; i >= 0; i--) {
    console.log(countries[i].toUpperCase().split());
}
