const student = {
    firstName:'John',
    lastName:'Martine',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

// Stringify the students object with only firstName, lastName and skills properties
const filterStudent = JSON.stringify(student, ['firstName', 'lastName', 'skills']);
console.log(filterStudent);
