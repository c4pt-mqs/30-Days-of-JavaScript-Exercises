// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// 1. Sort the array and find the min and max age
console.log(`Sorted ages are: ${ages.sort()}; max age is ${ages.slice(-1)}; min age is ${ages.slice(0,1)}`);

// 2. Find the median age(one middle item or two middle items divided by two)
console.log(`${ages[Math.floor(ages.length / 2)]}`);

// 3. Find the average age(all items divided by number of items)
console.log(`${ages.filter(Number).reduce((a, b) => a + b) / ages.length}`);

// 4. Find the range of the ages(max minus min)
console.log(`The range is ${ages.slice(-1) - ages.slice(0,1)}.`);

// 5. Compare the value of (min - average) and (max - average), use abs() method
console.log(`min - average = ${ages.slice(-1) - ages.filter(Number).reduce((a, b) => a + b) / ages.length}\nmax - average = ${ages.slice(0,1) - ages.filter(Number).reduce((a, b) => a + b) / ages.length}`);

// 6. Slice the first ten countries from the countries array
const countries = require("./assets/countries");
const webTechs = require("./assets/web_techs");
console.log(countries.slice(0, 10));

// 7. Find the middle country(ies) in the countries array
midCountry = Math.floor(countries.length / 2);
console.log(countries[midCountry]);

// 8. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if (countries % 2 == 0) {
    console.log(countries);
} else {

}
