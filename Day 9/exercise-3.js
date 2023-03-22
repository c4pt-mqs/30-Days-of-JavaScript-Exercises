const countries = require("../data/countries_data");

// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population
const sortedByName = countries.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

const sortedByCapital = countries.sort((a, b) => {
    if (a.capital < b.capital) return -1;
    if (a.capital > b.capital) return 1;
    return 0;
});
const sortedByPopulation = countries.sort((a, b) => b.population - a.population);
// console.log(sortedByName, sortedByCapital, sortedByPopulation);

// 2. Find the 10 most spoken languages:
function mostSpokenLanguages(countries, num) {
    let languageCounts = {};
    for (const country of countries) {
        for (const language of country.languages) {
            if (language in languageCounts) {
                languageCounts[language]++;
            } else {
                languageCounts[language] = 1;
            }
        }
    }
    let languageArray = [];
    for (const language in languageCounts) {
        languageArray.push({
            language: language,
            count: languageCounts[language]
        });
    }
    languageArray.sort((a, b) => b.count - a.count);
    return languageArray.slice(0, num);
}
console.log(mostSpokenLanguages(countries, 10));

// 3. Use countries_data.js file create a function which create the ten most populated countries
function mostPopulatedCountries(countriesData, num) {
    const sortedCountries = countriesData.sort((a, b) => b.population - a.population);
    return sortedCountries.slice(0, num).map(country => {
        return {
            country: country.name,
            population: country.population
        };
    });
}
console.log(mostPopulatedCountries(countries, 3))

// 4. Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = {
    count: function() {
        return ages.length
    },
    sum: function() {
        return ages.reduce((acc, curr) => acc + curr, 0)
    },
    min: function() {
        return Math.min(...ages)
    },
    max: function() {
        return Math.max(...ages)
    },
    range: function() {
        return this.max() - this.min()
    },
    mean: function() {
        return this.sum() / this.count()
    },
    median: function() {
        const sortedAges = ages.sort()
        const midIndex = Math.floor(sortedAges.length / 2)
        if (sortedAges.length % 2 === 0) {
            return (sortedAges[midIndex - 1] + sortedAges[midIndex]) / 2
        } else {
            return sortedAges[midIndex]
        }
    },
    mode: function() {
        const counts = new Map()
        let mode = 0
        let count = 0
        for (const age of ages) {
            const currCount = counts.get(age) || 0
            const newCount = currCount + 1
            counts.set(age, newCount)
            if (newCount > count) {
                mode = age
                count = newCount
            }
        }
        return {
            mode,
            count
        }
    },
    var: function() {
        const mean = this.mean()
        const squaredDeviations = ages.map((age) => (age - mean) ** 2)
        return squaredDeviations.reduce((acc, curr) => acc + curr, 0) / this.count()
    },
    std: function() {
        return Math.sqrt(this.var())
    },
    freqDist: function() {
        const counts = new Map()
        for (const age of ages) {
            counts.set(age, (counts.get(age) || 0) + 1)
        }
        const items = Array.from(counts.entries())
        items.sort((a, b) => b[1] - a[1])
        return items
    },
    describe: function() {
        return {
            count: this.count(),
            sum: this.sum(),
            min: this.min(),
            max: this.max(),
            ange: this.range(),
            mean: this.mean(),
            median: this.median(),
            mode: this.mode(),
            var: this.var(),
            std: this.std(),
            freqDist: this.freqDist(),
        }
    },
    percentile: function(percentile) {
        const sortedAges = ages.sort()
        const index = (percentile / 100) * (sortedAges.length - 1)
        const floorIndex = Math.floor(index)
        const ceilIndex = Math.ceil(index)
        if (floorIndex === ceilIndex) {
            return sortedAges[floorIndex]
        }
        const lowerValue = sortedAges[floorIndex] * (ceilIndex - index)
        const upperValue = sortedAges[ceilIndex] * (index - floorIndex)
        return lowerValue + upperValue
    }
}

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ', statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Frequency Distribution: ', statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
console.log(statistics.describe()) // {count: 25, sum: 744, min: 24, max: 38, range: 14, mean: 29.76, median: 29, mode: {mode: 26, count: 5}, var: 17.5, std: 4.183300132670378, freqDist: Map(9) {26 => 5, 27 => 4, 32 => 3, 37 => 2, 34 => 2, 33 => 2, 31 => 2, 24 => 2, 38 => 1}}
console.log('Percentile 25: ', statistics.percentile(25)) // 26
console.log('Percentile 50: ', statistics.percentile(50)) // 29
console.log('Percentile 75: ', statistics.percentile(75)) // 33

// count():                  returns the number of elements in the array.
// sum():                    returns the sum of all elements in the array.
// min():                    returns the smallest element in the array.
// max():                    returns the largest element in the array.
// range():                  returns the difference between the largest and smallest elements in the array.
// mean():                   returns the arithmetic mean (average) of the elements in the array.
// median():                 returns the median (middle value) of the elements in the array.
// mode():                   returns an object containing the mode (most common value) and the number of times it appears in the array.
// var():                    returns the variance (average of squared differences from the mean) of the elements in the array.
// std():                    returns the standard deviation (square root of the variance) of the elements in the array.
// freqDist():               returns an array of arrays, each containing a unique value from the original array and the number of times it appears.
// describe():               returns an object containing all the above statistics.
// percentile(percentile):   returns the value at the specified percentile of the sorted array.