// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = parseInt(prompt('Enter number of characters for the user IDs:'));
    const numIds = parseInt(prompt('Enter number of user IDs to generate:'));
    const ids = [];
    for (let i = 0; i < numIds; i++) {
      let randomId = '';
      for (let j = 0; j < length; j++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      ids.push(randomId);
    }
    return ids;
  }
console.log(userIdGeneratedByUser());
  
// 2. Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    const randomRGB = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    return randomRGB;
  }
console.log(rgbColorGenerator());
  
// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(numColors) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      let hexColor = '#';
      for (let j = 0; j < 6; j++) {
        hexColor += Math.floor(Math.random() * 16).toString(16);
      }
      colors.push(hexColor);
    }
    return colors;
  }
console.log(arrayOfHexaColors(5));  

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function rgbColorGenerator() {
    const colors = [];
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    const randomRGB = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    colors.push(randomRGB);
    return colors;
  }
console.log(rgbColorGenerator());

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hexColor) {
    const [r, g, b] = hexColor.substring(1).match(/.{1,2}/g).map(x => parseInt(x, 16));
    return `rgb(${r}, ${g}, ${b})`;
} 
console.log(convertHexaToRgb('#ff4500'));

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(rgbColor) {
    return '#' + rgbColor.match(/\d+/g).map(x => (+x).toString(16).padStart(2, '0')).join('');
  }
console.log(convertRgbToHexa('rgb(225, 69, 10)'));
  
// Write a function generateColors which can generate any number of hexa or rgb colors.
const generateColors = (type, count, colors = [], generateColor) => {
    const generateHexaColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const generateRgbColor = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  
    generateColor = type === 'hexa' ? generateHexaColor : type === 'rgb' ? generateRgbColor : console.log('You wrote a wrong color generation function! Try again.');
  
    while (count > 0) {
      colors.push(generateColor());
      count--;
    }
  
    return count === 1 ? colors[0] : colors;
  }  
console.log(generateColors('hexa', 3));
console.log(generateColors('rgb', 1));

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
console.log(shuffleArray(["hello", "this", "is", "diffirent"]));  

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
const factorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
}
console.log(factorial(5));

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(value) {
    if (value === null) {
      return true;
    }
    if (value === undefined) {
      return true;
    }
    if (typeof value === 'string' && value.trim().length === 0) {
      return true;
    }
    if (Array.isArray(value) && value.length === 0) {
      return true;
    }
    if (typeof value === 'object' && Object.keys(value).length === 0) {
      return true;
    }
    return false;
}
console.log(isEmpty({}));   // true
console.log(isEmpty('hello'));  // false

// Call your function sum, it takes any number of arguments and it returns the sum.
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
}
console.log(sum(2, 3, 5, 7));

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        return 'Error: Array contains non-number items.';
      }
  
      sum += arr[i];
    }
    return sum;
}
console.log(sumOfArrayItems([1, "2", 3, 4]));

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        return 'Error: Array contains non-numeric values';
      }
      sum += arr[i];
      count++;
    }
    
    if (count === 0) {
      return 'Error: Empty array';
    }
    
    return sum / count;
}
console.log(average([13, 22, 23, 48]));

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return ‘item not found’.
function modifyArray(arr) {
    if (arr.length < 5) {
      return 'Not Found';
    } else {
      arr[4] = arr[4].toUpperCase();
      return arr;
    }
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));

// Write a function called isPrime, which checks if a number is prime number.
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
}
console.log(isPrime(7));

// Write a functions which checks if all items are unique in the array.
function checkUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return false;
        }
      }
    }
    return true;
}
console.log(checkUnique([1, 2, 3, 4, 5]));  // true
console.log(checkUnique([1, 2, 3, 4, 4]));  // false

// Write a function which checks if all the items of the array are the same data type.
function checkSameDataType(arr) {
    let dataType = typeof arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (typeof arr[i] !== dataType) {
        return false;
      }
    }
    return true;
}
console.log(checkSameDataType([1, 2, 3]));    // true
console.log(checkSameDataType([1, 2, "3"]));  // false 

// JavaScript variable name does not support special characters or symbols except \$ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(variable) {
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return regex.test(variable);
}
console.log(isValidVariable('valid_Variable'));
console.log(isValidVariable('5invalidVariable'));
console.log(isValidVariable('$validVariable'));
console.log(isValidVariable('_validVariable'));
console.log(isValidVariable(''));

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function generateRandomNumbers() {
    const numbers = new Set();
    while (numbers.size < 7) {
      const randomNum = Math.floor(Math.random() * 10);
      numbers.add(randomNum);
    }
    return Array.from(numbers);
}
console.log(generateRandomNumbers());
  
// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries(countries) {
    const reversedCountries = [];
    for (let i = countries.length - 1; i >= 0; i--) {
      reversedCountries.push(countries[i]);
    }
    return reversedCountries;
}
console.log(reverseCountries(["USA", "Japan", "China", "Russia", "France", "Germany"]));
