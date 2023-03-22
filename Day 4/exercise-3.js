// 1. Write a program which tells the number of days in a month.
let numberOfDays = prompt("Enter a month: ").toLowerCase()
switch(numberOfDays) {
    case "january", "march", "may", "july", "august", "october", "december":
        console.log(`${numberOfDays} has 31 days.`);
    case "february":
        console.log("February has 28 days.");
    case "february", "april", "june", "september", "november":
        console.log(`${numberOfDays} has 30 days.`);
    default:
        console.log('It is not a month.')
}

// 2. Write a program which tells the number of days in a month, now consider leap year.
let month = prompt("Enter a month: ").toLowerCase();
switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${month} has 31 days.`);
        break;
    case "february":
        let year = new Date().getFullYear();
        let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        console.log(`February has ${isLeapYear ? 29 : 28} days.`);
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${month} has 30 days.`);
        break;
    default:
        console.log(`${month} is not a month.`);
}

