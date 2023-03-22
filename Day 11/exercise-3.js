const countries = require("../data/countries_data")

// 1. Destructure the countries object print name, capital, population and languages of all countries
for (const [_, { name, capital, population, languages }] of Object.entries(countries)) {
  console.log(`Name: ${name}`)
  console.log(`Capital: ${capital}`)
  console.log(`Population: ${population}`)
  console.log(`Languages: ${languages.join(", ")}`)
  console.log("\n")
}

// 2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student1 = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, [_, __, jsScore, reactScore]] = student1
console.log(name, skills, jsScore, reactScore)

// 3. Write a function called convertArrayToObject which can convert the array to a structure object.
function convertArrayToObject(students) {
    return students.map(([name, skills, scores]) => {
      return {
        name: name,
        skills: skills,
        scores: scores
      }
    })
  }

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
console.log(convertArrayToObject(students))

// 4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 },
      ],
      backEnd: [
        { skill: 'Node', level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase: [
        { skill: 'MongoDB', level: 7.5 },
        { skill: 'SQL', level: 8 },
      ],
      dataScience: ['Python', 'R', 'D3.js', 'SQL'],
    },
};

const newStudent = {
    ...student,
    skills: {
      ...student.skills,
      frontEnd: [
        ...student.skills.frontEnd,
        { skill: 'Bootstrap', level: 8 },
      ],
      backEnd: [
        ...student.skills.backEnd,
        { skill: 'Express', level: 9 },
      ],
      dataBase: [
        ...student.skills.dataBase,
        { skill: 'SQL', level: 8 },
      ],
      dataScience: [
        ...student.skills.dataScience,
        'SQL',
      ],
    },
};
console.log(newStudent);
