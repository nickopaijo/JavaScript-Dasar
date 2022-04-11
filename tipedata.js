/* undefined */
let a;
console.log(typeof(a));

/* number */
let b = 10;
let c = 2.5;
console.log(typeof(b));
console.log(typeof(c));
console.log(b+c)
console.log(b-c)
console.log(b*c)
console.log(b/c)
console.log(b%c)
//Increment dan Decrement
let postfix=5;
let prefix=5;
console.log(postfix++); //output: 5
console.log(postfix); //output: 6
console.log(++prefix); //output: 6

/* bigint */
const bigNumber=1234567890123456789012345678901234567890n;
const myInt=1234567890123456789012345678901234567890;
console.log(bigNumber); //output: 1234567890123456789012345678901234567890n
console.log(myInt); //output: 1.2345678901234568e+39
//
console.log(5n+2n); //output: 7n
console.log(5n-2n); //output: 3n
console.log(5n*2n); //output: 10n
console.log(5n/2n); //output: 2n
console.log(5n%2n); //output: 1n

/* string */
let myString="Hello World";
console.log(myString); //output: Hello World

/* boolean */
let x=true;
let y=false;
console.log(typeof(x)) //output: true
console.log(typeof(y)) //output: false 
//test
const num1=10;
const num2=12;

let isGreater = num1 > num2;
let isLess = num1 < num2;

console.log(isGreater); //output: false
console.log(isLess); //output: true

/* null */
let someData=null;
console.log(someData); //output: null

/* Symbol */
const id=Symbol("id");
console.log(id); //output: Symbol(id)
//test
const id1=Symbol("id");
const id2=Symbol("id");

console.log(id1==id2); //output: false
