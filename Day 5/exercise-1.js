//  1. Declare an empty array;
const techno = []

//  2. Declare an array with more than 5 number of elements
const varNum = [12, 45, 897, 42323, 32, 42]

//  3. Find the length of your array
console.log(varNum.length);

//  4. Get the first item, the middle item and the last item of the array
console.log(`First item: ${varNum[0]}, middle item: ${varNum[Math.floor(varNum.length / 2)]}, last item: ${varNum[varNum.length - 1]}`);

//  5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
    12,
    "array",
    null,
    undefined,
    32.4,
    true
]
console.log(mixedDataTypes.length);

//  6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//  7. Print the array using console.log()
console.log(itCompanies);

//  8. Print the number of companies in the array
console.log(itCompanies.length);

//  9. Print the first company, middle and last company
console.log(`First company: ${itCompanies[0]}, middle company: ${itCompanies[Math.floor(itCompanies.length / 2)]}, last company: ${itCompanies[itCompanies.length - 1]}`);

//  10. Print out each company
console.log(`${itCompanies.join(", ").toString()}`);

//  11. Change each company name to uppercase one by one and print them out
console.log(`${itCompanies.join(", ").toUpperCase().toString()}`);

//  12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
console.log(`${itCompanies.join(", ").toString()} are big IT companies.`)

//  13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const setCompany = prompt("Enter a company: ").toLowerCase();
if (itCompanies.includes(setCompany)) {
    console.log(`${setCompany}`);
} else {
    console.log("Company is not found.");
}

//  14. Filter out companies which have more than one 'o' without the filter method
const filtered = []
itCompanies.forEach(e=>e.toLowerCase().includes("oo") && filtered.push(e))
console.log(filtered);


//  15. Sort the array using sort() method
console.log(`${itCompanies.sort()}`);

//  16. Reverse the array using reverse() method
console.log(`${itCompanies.reverse()}`);

//  17. Slice out the first 3 companies from the array
console.log(`${itCompanies.slice(0,3)}`);

//  18. Slice out the last 3 companies from the array
console.log(`${itCompanies.slice(-3)}`);

//  19. Slice out the middle IT company or companies from the array
console.log(`${itCompanies[Math.floor(itCompanies.length / 2)]}`);

//  20. Remove the first IT company from the array
console.log(`${itCompanies.splice(0,1)}`);

//  21. Remove the middle IT company or companies from the array
console.log(`${itCompanies[Math.floor(itCompanies.length / 2)]}`);

//  22. Remove the last IT company from the array
console.log(`${itCompanies.slice(-1)}`);

//  23. Remove all IT companies
console.log(`${itCompanies.splice()}`);
