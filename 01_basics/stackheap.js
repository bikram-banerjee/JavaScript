/*
Stack and heap are two areas in memory where data is stored. 
The stack is used for static memory allocation which mwhich means that the size and location of the memory can change at runtime.

Stack -> primitive values (such as numbers, strings, booleans, etc.)
Objects -> Non primitive values(such as arrays, functions, etc.) 

Note:
-----
Primitive values are immutable and have a fixed size, so they can be easily stored and accessed in the stack.
Objects are mutable and have a variable size, so they need to be stored and accessed in the heap, which is more flexible but also slower.
*/


//Stack Example
let myName = "looperdotcom"
let anothername = myName        //The anothername here stores a copy of "myname" variable so that the main value of "myname" variable does not get affected on changing

anothername = "looper"          //When we change the value here it changes the value of the copy not the original

console.log(myName);
console.log(anothername);          //Here the value of anothername changes because change was made in the copy variable of "myname"


//Heap Example
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "looper@google.com"     //This changes the email of the userOne as well.

console.log(userOne.email);        //Here the email of the userOne gets changed because we have changed the email of the userTwo which is the reference of userOne and not a copy. 
console.log(userTwo.email);

