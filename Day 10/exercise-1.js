const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// 1. Create an empty set
const emptySet = new Set()
console.log(emptySet)

// 2. Create a set containing 0 to 10 using loop
const numberCounter1 = new Set();
for (let i = 0; i <= 10; i++) {
  numberCounter1.add(i);
}
console.log(numberCounter1);

// 3. Remove an element from a set
const numberCounter2 = new Set([1, 2, 3, 4, 5]);
numberCounter2.delete(3);
console.log(numberCounter2);

// 4. Clear a set
numberCounter2.clear()
console.log(numberCounter2);

// 5. Create a set of 5 string elements from array
const stringArray = ['apple', 'banana', 'orange', 'grape', 'watermelon'];
const stringSet = new Set(stringArray);
console.log(stringSet);

// 6. Create a map of countries and number of characters of a country
const countries1 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries1)
console.log(map)
