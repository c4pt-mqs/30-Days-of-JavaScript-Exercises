const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'John',
  lastName:'Martine',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

// Change skills array to JSON using JSON.stringify()
const jsObjSkill = JSON.stringify(skills);
console.log(jsObjSkill);

// Stringify the age variable
const jsObjSkillAge = JSON.stringify(age);
console.log(jsObjSkillAge);

// Stringify the isMarried variable
const jsObjSkillMarried = JSON.stringify(isMarried);
console.log(jsObjSkillMarried);

// Stringify the student object
const jsObjSkillStudent = JSON.stringify(student);
console.log(jsObjSkillStudent);