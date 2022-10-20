/*
    ! Variables
        - var
        - let
        - const
            - when we want constant variable or a variable that doesn't change.
            - "new" in ES6
*/

let a=2;

    let     b    =       1;

//  (1)     (2) (3)     (4)
// |---- 5 ---|     |--- 6 ---|
/*
    1. JS keyword to denote the creation of a variable
    2. Name of the variable. We use this name when we are referencing our variable.
    3. The assignment operator
    4. The data value the variable is storing.
    5. The variable declaration
    6. The variable initialization
*/

// Declaration example
let x;
// Initialization example
x = 10;

let ourVariable; // camelCasing     ( variables)
let OurSecondVariable; // PascalCasing  ( special types)
let our_third_variable; // snake_casing ( not as common)
let $_3seconds;

let first = 'John';
let last = ' Smith';
let full = first + last;

let y;
console.log('Declaration: ', y);
y = 10;
console.log('Initialization 1: ', y);
y = 33;
console.log

let today = "Great!";
const javascript = "Wonderful!";
console.log(today, javascript);

today = 'Lovely!';
console.log(today, javascript);


// javascript = 'Super'; // Will cause an ERROR
console.log(today, javascript);

//! Console Log Types
console.log('This message is a string');
let nameInput = "Your name goes here";
console.log("log: ", nameInput);

let unusedVariable;
console.warn("This is a warning");

let warning = "Uh Oh"
console.warn("warn: ", warning);

console.error('This is an error message');
let err = "This looks real bad";
console.error("error: ", err);

let arr = [1,2,3,4,5,6,7];
console.table(arr);




