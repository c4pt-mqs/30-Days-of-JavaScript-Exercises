// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Jack" 
let lastName = null
let country = undefined
let city = "Stokholm"
let age = 25
let isMarried = false
let year = 2023
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

// 2. Check if type of ‘10’ is equal to 10
console.log(typeof '10')    // string

// 3. Check if parseInt(‘9.8’) is equal to 10
console.log(parseInt("9.8"))    // 9

// 4. Boolean value is either true or false.
// Yes, true or false

// 5. Write three JavaScript statement which provide truthy value.
// 17 > 6
// "a" = 'a'
// true = true

// 6. Write three JavaScript statement which provide falsy value.
// 17 < 6
// "a" = 'b'
// true = false

// 7. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 8. 4 > 3 true
// 9. 4 >= 3 true
// 10. 4 < 3 false
// 11. 4 <= 3  false
// 12. 4 == 4 true
// 13. 4 === 4 true
// 14. 4 != 4 false
// 15. 4 !== 4 false
// 16. 4 != ‘4’ false
// 17. 4 == ‘4’ true
// 18. 4 === ‘4’ false
// 19. Find the length of python and jargon and make a falsy comparison statement.
console.log("python".length != "jargon".length)

// 20. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 21. 4 > 3 && 10 < 12 true
// 22. 4 > 3 && 10 > 12 false
// 23. 4 > 3 || 10 < 12 true
// 24. 4 > 3 || 10 > 12 true
// 25. !(4 > 3) false
// 26. !(4 < 3) true
// 27. !(false) true
// 28. !(4 > 3 && 10 < 12) false
// 29. !(4 > 3 && 10 > 12) true
// 30. !(4 === ‘4’) true

// 31. There is no ‘on’ in both dragon and python
console.log(("dragon" && "python").includes("on"));

// 32. Use the Date object to do the following activities:
// 33. What is the year today?
console.log(new Date(Date.now()).getFullYear());

// 34. What is the month today as a number?
console.log(new Date(Date.now()).getMonth() + 1);

// 35. What is the date today?
console.log(new Date(Date.now()).toLocaleString('default', { month: 'long' }));

// 36. What is the day today as a number?
console.log(new Date(Date.now()).getDay());

// 37. What is the hours now?
console.log(new Date(Date.now()).getHours(24));

// 38. What is the minutes now?
console.log(new Date(Date.now()).getMinutes());

// 39. Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(new Date(Date.now()).setFullYear(1970, 1, 1));
