const countries = require('../data/countries');
const countries_data = require('../data/countries_data');

// 1. Display the countries array as a table
console.table(countries)

// 2. Display the countries object as a table
console.table(countries_data)

// 3. Use console.group() to group logs
console.group("Countries")
console.log(countries)
console.log(countries_data)
console.groupEnd()