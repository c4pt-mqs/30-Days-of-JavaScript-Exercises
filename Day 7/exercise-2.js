// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function findValues(a, b) {
    if ((a - b) % 2 === 1) {
      return -1;
    }
    return [(a - b) / 2, (a + b) / 2];
  }
console.log(findValues(4, 5));

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a, b, c) {
    let discriminant = b*b - 4*a*c;
    if (discriminant < 0) {
        return "no real solutions";
    } else if (discriminant === 0) {
        let x = -b / (2*a);
        return `root = ${x}`;
    } else {
        let x1 = (-b + Math.sqrt(discriminant)) / (2*a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2*a);
        return `root-1 = ${x1}, root-2 = ${x2}`;
    }
}
console.log(solveQuadEquation(1, -1, 0));

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const myArray = [12, "this", true, null ]
function printArray(myArray) {
    return myArray
}
console.log(printArray(myArray));

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    const now = `${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${('0' + new Date().getDate()).slice(-2)} ${('0' + new Date().getHours()).slice(-2)}:${('0' + new Date().getMinutes()).slice(-2)}:${('0' + new Date().getSeconds()).slice(-2)}`
    return now
}
console.log(showDateTime());

// 5. Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (x, y) => {
    let t = x;
    x = y;
    y = t;
    return `x = ${x}, y = ${y}`
}
console.log(swapValues(3, 4));

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don’t use method).
function reverseArray(myArray1) {
    let reversed = [];
    for (let i = myArray1.length - 1; i >= 0; i--) {
      reversed.push(myArray1[i]);
    }
    return reversed;
  }
console.log(reverseArray([1, 2, 3, 4, 5]));

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(capitalizedarray) {
    return capitalizedarray.toString().toUpperCase().split(",");;
  }
console.log(capitalizeArray(["this", "is", "not", "true"]));

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addItem = (item, arr) => {
    arr.push(item);
    return arr;
}
let myArray1 = ["hello", "world"];
console.log(addItem("this is new", myArray1));

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(arr, index) {
    return arr.filter((value) => value !== index);
}
const array = ["JS", "Python", "Node"];
console.log(removeItem(array, "Python"));

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
console.log(sumOfNumbers(9));

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(n) {
    let sum = 0
    for (i = 0; i <= n; i++) {
        if (i % 2 == 1) {
            sum += i;
        }
      }
    return sum;
  }
console.log(sumOfOdds(19));

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(n) {
    let sum = 0
    for (i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
      }
    return sum;
  }
console.log(sumOfEven(19));

// 13. Declare a function name evensAndOdds. It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(n) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i <= n; i++) {
      if (i % 2 === 0) {
        evenCount++;
      } else if (i % 2 === 1) {
        oddCount++;
      }
    }
    return `Number of even numbers: ${evenCount}\nNumber of odd numbers: ${oddCount}`;
}
console.log(evensAndOdds(100));

// 14. Write a function which takes any number of arguments and return the sum of the arguments
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
}
console.log(sum(2, 5, 7));

// 15. Write a function which generates a randomUserIp.
function randomUserIp() {
    let ip = "";
    for (let i = 0; i < 4; i++) {
      ip += Math.floor(Math.random() * 256) + ".";
    }
    return ip.slice(0, -1);
}
console.log(randomUserIp());

// 16. Write a function which generates a randomMacAddress
function randomMacAddress() {
    let mac = "";
    for (let i = 0; i < 6; i++) {
      let hexDec = Math.floor(Math.random() * 256).toString(16);
      mac += hexDec.length === 1 ? "0" + hexDec : hexDec;
      mac += i !== 5 ? ":" : "";
    }
    return mac;
  }
console.log(randomMacAddress());
  

// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(randomHexaNumberGenerator());

// 17. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
    let length = 7;
    let randomId = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomId;
}
console.log(userIdGenerator());
