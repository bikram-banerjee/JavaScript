//Array (PART 1)
//==============

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["ironman", "thor", "captainamerica"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods
myArr.push(6)           //push() -> Add items to the end and returns the new array length.
myArr.push(7)
myArr.pop()             //pop() -> Remove an item from the end and returns the removed item.

myArr.unshift(9)        //unshift() -> Add items to the beginning and returns the new array length.
myArr.shift()           //shift() -> Remove an item from the beginning and returns the removed item.

console.log(myArr);


console.log(myArr.includes(9));     //includes(value) -> returns boolean true/false if the array contains the specific value mentioned within the brackets
console.log(myArr.indexOf(3));      //indexOf(value) -> returns the value which is present in the index value mentioned.

const newArr = myArr.join()

console.log(myArr);
console.log( newArr);


// slice, splice
/*
Slice -> The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object 
selected from start to end (end not included) where start and end represent the index of items in that array. 

Splice -> The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

Interview Question
------------------
What is the difference between slice() and splice()?
-> slice() returns a shallow copy(a copy with the same reference) and does not modifies the original array whereas splice() changes the contents of the array
and replaces the original array modifying it with the new values removing the values which were provided.
*/

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


//Array (PART 2)
//==============


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

/*
Spread Operator(...)
The spread (...) syntax allows an iterable, such as an array or string, 
to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
*/

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Bikram"))
console.log(Array.from("Bikram"))
console.log(Array.from({name: "bikram"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));