let x = 10
let y = 5

x += y

console.log(x) //output: 15

//Comparison operator
//let a = 10
//let b = 12

console.log(a < b) //output: true
console.log(a > b) //output: false

//identik
let aString = "10"
let aNumber = 10

console.log(aString == aNumber) //output: true
console.log(aString === aNumber) //output: false

let a = 10
let b = 12

/* AND operator */
console.log(a < 15 && b > 10) // (true && true) -> true
console.log(a > 15 && b > 10) // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10) // (true || true) -> true
console.log(a > 15 || b > 10) // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)) // !(true) -> false
console.log(!(a < 15 && b > 10)) // !(true && true) -> !(true) -> false
