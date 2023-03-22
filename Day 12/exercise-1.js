// Regex Tutorial:
// []: A set of characters
// [a-c] means, a or b or c
// [a-z] means, any letter a to z
// [A-Z] means, any character A to Z
// [0-3] means, 0 or 1 or 2 or 3
// [0-9] means any number 0 to 9
// [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
// \: uses to escape special characters
// \d mean:match where the string contains digits (numbers from 0-9)
// \D mean: match where the string does not contain digits
// . : any character except new line character(\n)
// ^: starts with
// r’^substring’ eg r’^love’, a sentence which starts with a word love
// r’[^abc] mean not a, not b, not c.
// $: ends with
// r’substring$’ eg r’love$’, sentence ends with a word love
// *: zero or more times
// r’[a]*’ means a optional or it can be occur many times.
// +: one or more times
// r’[a]+’ mean at least once or more times
// ?: zero or one times
// r’[a]?’ mean zero times or once
// {3}: Exactly 3 characters
// {3,}: At least 3 character
// {3,8}: 3 to 8 characters
// |: Either or
// r’apple|banana’ mean either of an apple or a banana
// (): Capture and group


// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let totalIncome = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
console.log(totalIncome.match(/\d+/g).map(Number).reduce((a, b) => a + b));

// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
const sortedPoints = points.map(Number).sort((a, b) => a - b);
const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];

console.log(`Points: ${points}`);
console.log(`Sorted points: ${sortedPoints}`);
console.log(`Distance between the two furthest particles: ${distance}`);

// 3. Write a pattern which identify if a string is a valid JavaScript variable
const is_valid_variable = (text) => /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(text);
console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))
