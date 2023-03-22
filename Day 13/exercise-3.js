// 1. Check the speed difference among the following loops: while, for, for of, forEach
const million = 10000000;
const arr = Array(million);

console.time('while');
for (let i = arr.length; i > 0; i--) {}
console.timeEnd("while");

console.time('for');
for (let i = 0; i < arr.length; i++) {}
console.timeEnd("for");

console.time('forEach');
arr.forEach(v => v)
console.timeEnd("forEach");

console.time('for...of');
for (const v of arr) {}
console.timeEnd("for...of");
