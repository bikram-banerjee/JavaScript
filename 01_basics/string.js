const name = "looper"
const repoCount = 50

//`` -> this symbol is know as backticks which is used to define strings so that string interpolation is possible
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('looper-ls-com')

console.log(gameName.split('-'));      //splits the string into an array
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   looper    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

