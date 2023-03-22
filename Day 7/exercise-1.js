//  1. Declare a function fullName and it print out your full name.
function fullName() {
    console.log("John");
}
fullName()

//  2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullName("John", "Hambel"))

//  3. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2) {
    return `${num1 + num2}`
}
console.log(addNumbers(12, 3242))

//  4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    return `Area of the rectangle is ${length * width}`
}
console.log(areaOfRectangle(4, 8))

//  5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    return `Perimeter of a rectangle is ${2 * (length + width)}`
}
console.log(perimeterOfRectangle(4, 3))

//  6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    return `Volume of a rectangular prism is ${length * width * height}`
}
console.log(volumeOfRectPrism(4, 3, 5))

//  7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r) {
    π = 3
    return `Area of a circle is ${π * r ** r}`
}
console.log(areaOfCircle(3))

//  8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
    π = 3
    return `Circumference of a circle is ${2 * π * r}`
}
console.log(circumOfCircle(2))

//  9. Density of a substance is calculated as follows: density = mass/volume. Write a function which calculates density.
function densityOfSubstance(mass, volume) {
    return `Density of a substance is ${mass / volume}`
}
console.log(densityOfSubstance(24, 8))

//  10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speedOfObject(distance, time) {
    return `Speed of a object is ${distance / time}`
}
console.log(speedOfObject(120, 4))

//  11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weightOfsubstance(mass, gravity) {
    return `Weight of a substance is ${mass * gravity}`
}
console.log(weightOfsubstance(75, 10))

//  12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(oC) {
    return `Temperature in oF is ${(oC * (9/5) + 32)}`
}
console.log(convertCelciusToFahrenheit(34))

//  13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below. 
function convertCelciusToFahrenheit(weightKg, heightCm) {
    bmi = ((weightKg / heightCm / heightCm) * 10000)
    if (bmi >= 30) {
        return `Obese: Your BMI is ${bmi}`
    } else if (bmi >= 25 && bmi <= 29.9) {
        return `Overweight: Your BMI is ${bmi}`
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return `Normal weight: Your BMI is ${bmi}`
    } else if (bmi < 18.5) {
        return `Underweight: Your BMI is ${bmi}`
    } else {
        return "Check you BMI again"
    }
}
console.log(convertCelciusToFahrenheit(60, 170))

//  14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(season) {
    if (season === "september" | season === "october" | season === "november") {
        return "The season is Autumn"
    } else if (season === "december" | season === "january" | season === "february") {
        return "The season is Winter"
    } else if (season === "march" | season === "april" | season === "may") {
        return "The season is Spring"
    } else if (season === "june" | season === "july" | season === "august") {
        return "The season is Summer"
    } else {
        return "Enter the correct season."
    }
}
console.log(checkSeason("june")) 

//  15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(num1, num2, num3) {
    let max = num1;
    if (num2 > max) {
      max = num2;
    }
    if (num3 > max) {
      max = num3;
    }
    return max;
  }
console.log(findMax(33, 5, 24))
