const users = { 
    Alex: { 
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20, isLoggedIn: false, 
        points: 30 }, 
    Asab: { 
        email: 'asab@asab.com', 
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'], 
        age: 25, 
        isLoggedIn: false, 
        points: 50 }, 
    Brook: { 
        email: 'daniel@daniel.com', 
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'], 
        age: 30, 
        isLoggedIn: true, 
        points: 50 }, 
    Daniel: { 
        email: 'daniel@alex.com', 
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'], 
        age: 20, 
        isLoggedIn: false, 
        points: 40 }, 
    John: { 
        email: 'john@john.com', 
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'], 
        age: 20, 
        isLoggedIn: true, 
        points: 50 },
    Thomas: { 
        email: 'thomas@thomas.com', 
        skills: ['HTML', 'CSS', 'JavaScript', 'React'], 
        age: 20, 
        isLoggedIn: false, 
        points: 40 }, 
    Paul: { 
        email: 'paul@paul.com', 
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'], 
        age: 20, 
        isLoggedIn: false, 
        points: 40 }
}

// 1. Find the person who has many skills in the users object.
const result = Object.entries(users).sort((a, b) => b[1].skills.length - a[1].skills.length)[0];
console.log(result[0]);

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedInCount = 0;
let highPointsCount = 0;

for (let user in users) {
  if (users[user].isLoggedIn) {
    loggedInCount++;
  }
  if (users[user].points >= 50) {
    highPointsCount++;
  }
}
console.log(`Number of logged in users: ${loggedInCount}`);
console.log(`Number of users with 50+ points: ${highPointsCount}`);

// 3. Find people who are MERN stack developer from the users object
const mernDevelopers = Object.keys(users).filter(name => {
    const user = users[name];
    return (
      user.skills.includes('MongoDB') && user.skills.includes('Express') && user.skills.includes('React') && user.skills.includes('Node')
    );
});
console.log(mernDevelopers);

// 4. Set your name in the users object without modifying the original users object
const usersCopy = Object.assign({}, users);
usersCopy['YourName'] = {
  email: 'yourname@domain.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
  age: 25,
  isLoggedIn: true,
  points: 70,
};
console.log(usersCopy);

// 5. Get all keys or properties of users object
const keys = Object.keys(users);
console.log(keys);

// 6. Get all the values of users object
const values = Object.values(users);
console.log(values);
