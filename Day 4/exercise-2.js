// 1. Write a code which can give grades to students according to theirs scores: A- 80-100, B- 70-79, B- 60-69, D- 50-59, F- 0-49
let grades = parseInt(prompt("What's your grade: "))
if (grades >= 80 && grades <=100 ) {
    console.log("Your score is A");
} else if (grades >= 70 && grades <=79 ) {
    console.log("Your score is B");
} else if (grades >= 60 && grades <=69 ) {
    console.log("Your score is C");
} else if (grades >= 50 && grades <=59 ) {
    console.log("Your score is D");
} else if (grades < 50 && grades > 0 ) {
    console.log("Your score is F");
} else {
    console.log("Enter the correct score. ");
}

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is : - September, October or November, the season is Autumn. - December, January or February, the season is Winter. - March, April or May, the season is Spring - June, July or August, the season is Summer
let season = prompt("What's the season: ").toLowerCase()
console.log(season);
if (season === "september" | season === "october" | season === "november") {
    console.log("The season is Autumn");
} else if (season === "december" | season === "january" | season === "february") {
    console.log("The season is Winter");
} else if (season === "march" | season === "april" | season === "may") {
    console.log("The season is Spring");
} else if (season === "june" | season === "july" | season === "august") {
    console.log("The season is Summer");
} else {
    console.log("Enter the correct season.");
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
let whichDay = prompt("What is the day today: ").toLowerCase()
switch(whichDay) {
    case "monday":
        console.log(`${whichDay} is a working day.`)
        break
    case "tuesday":
        console.log(`${whichDay} is a working day.`)
        break
    case "wednesday":
        console.log(`${whichDay} is a working day.`)
        break 
    case "thursday":
        console.log(`${whichDay} is a working day.`)
        break
    case "friday":
        console.log(`${whichDay} is a working day.`)
        break
    case "saturday":
        console.log(`${whichDay} is a weekend.`)
        break
    case "sunday":
        console.log(`${whichDay} is a weekend.`)
        break
    default:
        console.log('It is not a day.')
}

