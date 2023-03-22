const countries = require("../data/countries_data");

// 1. How many languages are there in the countries object file.
let numLanguages = 0;
for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  if (country.languages) {
    numLanguages += country.languages.length;
  }
}
console.log(numLanguages);

// 2. Use the countries data to find the 10 most spoken languages:
function mostSpokenLanguages(countries, numLanguages) {
  const languageCounts = {};
  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    if (country.languages) {
      for (let j = 0; j < country.languages.length; j++) {
        const language = country.languages[j];
        if (languageCounts[language]) {
          languageCounts[language]++;
        } else {
          languageCounts[language] = 1;
        }
      }
    }
  }
  const sortedLanguageCounts = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, numLanguages)
    .map(([language, count]) => ({ [language]: count }));
  return sortedLanguageCounts;
}
console.log(mostSpokenLanguages(countries, 10));
