const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['John', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products
  .filter(item => item.price !== !isNaN(item.price))
  .map(item => item.price)
  .reduce((total, price) => total + Number(price), 0);
console.log(totalPrice);

// 2. Find the sum of price of products using only reduce reduce(callback))
const sumPriceReduce = products.reduce((sum, product) => {
    if (typeof product.price === 'number') {
      return sum + product.price;
    }
    return sum;
  }, 0);  
console.log(sumPriceReduce);
  
// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg ‘land’, ‘ia’, ‘island’,’stan’)).
const categorizeCountries = element => {
    return countries.filter(country => country.toLowerCase().includes(element.toLowerCase()))
}
console.log(categorizeCountries('land')); 

// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function countStartingLetters(countries) {
  const counts = {};
  countries.forEach(country => {
    const letter = country[0];
    if (counts[letter]) {
      counts[letter]++;
    } else {
      counts[letter] = 1;
    }
  });
  
  return Object.entries(counts).map(([letter, count]) => ({
    letter,
    count
  }));
}
console.log(countStartingLetters(countries))

// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const countriesData = require("../data/countries.js");
function getFirstTenCountries() {
  return countriesData.slice(0, 10).map(country => country);
}
console.log(getFirstTenCountries());

// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries() {
    return countriesData.slice(-10);
  }
console.log(getLastTenCountries());

// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
const initials = countriesData.map(country => country[0]);
const letterCounts = {};
initials.forEach(initial => {
    letterCounts[initial] = (letterCounts[initial] || 0) + 1;
});
const mostUsed = Object.keys(letterCounts).reduce((a, b) => letterCounts[a] > letterCounts[b] ? a : b);
console.log(`The letter '${mostUsed}' is used the most as the initial letter for country names.`);
