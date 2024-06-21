
const accountId = 144553
let accountEmail = "bikram@google.com"
var accountPassword = "12345"
accountCity = "Bangalore"

/*
var was used in the previous browser versions of js
Prefer not to use var
because of issue in block scope and functional scope
*/

// accountId = 2    //This is not allowed and will throw an error.

//if we do not declare a value to a variable then it will be given a default value 'undefined'.
let accountState;


//To change the values we can only change the values of the let and var keywords the const values cannot be changed
accountEmail = "bik@google.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log("Account Id: "+accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])