// 1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName: "John",
    lastName: "Martin",
    age: 20,
    skills: ["JavaScript", "HTML", "CSS"],
    country: "USA",
    enrolled: {
      math: true,
      science: false,
      english: true
    }
  };

localStorage.setItem("student", JSON.stringify(student));
  