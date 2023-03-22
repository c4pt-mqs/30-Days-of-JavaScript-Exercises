const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// 1. Find a union b
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C);

// 2. Find a intersection b
let A1 = new Set(a)
let B1 = new Set(b)

let c1 = a.filter((num) => B1.has(num))
let C1 = new Set(c1)
console.log(C1)

// 3. Find a with b
let A2 = new Set(a)
let B2 = new Set(b)

let c2 = a.filter((num) => !B2.has(num))
let C2 = new Set(c2)

console.log(C2)
