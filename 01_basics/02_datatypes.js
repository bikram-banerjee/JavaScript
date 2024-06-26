/*
Interview Question

Q1. Is JavaScript Statically typed or Dynamically typed?
-> JavaScript is a Dynamically typed language which means that variables can hold values of different types during runtime. 
*/


"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

//This type of coding should not be practiced as the code readability should be high for other's to underatand the code.
console.log(3 
    +
     3)

console.log("Hitesh")

let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

//Data Types
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => is an assignment value, meaning that a variable has been declared and given the value of null(empty).
// undefined => it means a variable has been declared but has not yet been assigned a value
// symbol => unique
// object

console.log(typeof undefined); // Output: undefined
console.log(typeof null); // Output: object

//Note: In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value.
//      The type tag for objects was 0, which means that (typeof null === 'object';)

