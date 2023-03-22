const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// 1. Read the cats api and find the average weight of cat in metric unit.
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    const weights = data.map(cat => cat.weight.metric); 
    const sum = weights.reduce((total, weight) => total + parseInt(weight), 0);
    const average = sum / weights.length;
    console.log(`Average Weight: ${average.toFixed(2)} kg`);
  })
  .catch(error => console.error(error));

// 2. Read the countries api and find out the 10 largest countries
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    data.sort((a, b) => b.population - a.population);
    const largestCountries = data.slice(0, 10);
    largestCountries.forEach(country => {
      console.log(country.name, ":", country.population);
    });
  })
  .catch(error => console.error(error));

// 3. Read the countries api and count total number of languages in the world used as officials.
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    const languages = new Set();

    data.forEach(country => {
      if (country.languages.length > 0) {
        const firstLanguage = country.languages[0];
        languages.add(firstLanguage.iso639_1);
      }
    });
    console.log(`Total number of official languages in the world: ${languages.size}`);
  })
  .catch(error => console.error(error));
