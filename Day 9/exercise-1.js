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

// 1. Explain the difference between forEach, map, filter, and reduce.
// Iterate an array elements
// .forEach()

// Iterate an array elements and modify the array elements
// .map()

// Filter out items which full fill filtering conditions and return a new array
// .filter()

// Iterates over an array and applies a callback function to each element
// .reduce()

// 2. Define a call function before you them in forEach, map, filter or reduce.
function printNumber(number) {
  console.log(number);
}
countries.forEach(printNumber);

// 3. Use forEach to console.log each country in the countries array.
countries.forEach((element) => console.log(element))

// 4. Use forEach to console.log each name in the names array.
names.forEach(element => console.log(element))

// 5. Use forEach to console.log each number in the numbers array.
numbers.forEach(function (element) {
  console.log(element)
})

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
const countryToUpperCase = countries.map((element) => element.toUpperCase())
console.log(countryToUpperCase)

// 7. Use map to create an array of countries length from countries array.
const lengthCountry = countries.map((element) => element.length)
console.log(lengthCountry)

// 8. Use map to create a new array by changing each number to square in the numbers array
const squareNum = numbers.map((num) => num * num)
console.log(squareNum)

// 9. Use map to change to each name to uppercase in the names array
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

// 10. Use map to map the products array to its corresponding prices.
const productPrices = products.map((item) => item.price)
console.log(productPrices)

// 11. Use filter to filter out countries containing land.
const includeLand = countries.filter((country) => country.includes("land"))
console.log(includeLand)

// 12. Use filter to filter out countries having six character.
const sixCharacters = countries.filter((country) => country.length === 6)
console.log(sixCharacters)

// 13. Use filter to filter out countries containing six letters and more in the country array.
const letterCountry = countries.filter((country) => country.length >= 6)
console.log(letterCountry)

// 14. Use filter to filter out country start with ‘E’;
const startsWithE = countries.filter((country) => country.startsWith('E'))
console.log(startsWithE)

// 15. Use filter to filter out only prices with values.
const filteredProducts = products.filter(product => typeof product.price === "number");
console.log(filteredProducts);

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
  return arr.filter(item => typeof item === 'string');
}

// 17. Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)

// 18. Use reduce to concatenate all the countries and to produce this sentence: Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const sentence = countries.reduce((acc, country, index) => {
  if (index === countries.length - 1) {
    return acc + 'and ' + country + ' are north European countries';
  } else {
    return acc + country + ', ';
  }
}, '');
console.log(sentence);

// 19. Explain the difference between some and every
// Check if all the elements are similar type in Array | It returns boolean
// .every()

// At least one element in the array satisfies the specified condition | true
// .some()

// 20. Use some to check if some names length greater than seven in names array
const greaterSeven = names.some((element) => element.length > 7)
console.log(greaterSeven)

// 21. Use every to check if all the countries contain the word land
const wordLand = countries.every((element) => element.includes("land"))
console.log(wordLand)

// 22. Explain the difference between find and findIndex.
// .find() returns the element itself, while .findIndex() returns the index of that element.

// 23. Use find to find the first country containing only six letters in the countries array
const findLetters = countries.find((element) => element.length == 6)
console.log(findLetters)

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
const findIndexLetters = countries.findIndex((element) => element.length == 6)
console.log(findIndexLetters)

// 25. Use findIndex to find the position of Norway if it doesn’t exist in the array you will get -1.
const findNorway = countries.findIndex((element) => element == "Norway")
console.log(findNorway)

// 26. Use findIndex to find the position of Russia if it doesn’t exist in the array you will get -1.
const findRussia = countries.findIndex((element) => element == "Russia")
console.log(findRussia)

