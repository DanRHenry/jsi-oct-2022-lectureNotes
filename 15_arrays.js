/* 
!   Arrays
    - Denoted with Square Brackets [ ]
    - Indicies start at zero.
*/

let list = [`milk`, `bread`, `chicken`, `coffee`];
//              0       1       2           3

console.log (list[2]); // will return chicken
console.log(list.length); // will return the total length of the list

list[0] =  `chocolate milk`; // will change position 0 to chocolate milk
console.log(list);

let avengers = [
    'Nick', 2, false, 'Steve', 'Bruce', ['Tony', 8, true]
];

console.log(typeof avengers);
console.log(avengers instanceof Array); // asks if avengers is an instance of an array

/*
Using the console.log();
    - Target "Bruce"
    - Target "true"
    - using string interpolation, return "Hello, Nick" and "Hello Tony".
*/
let hi = "Hello, "
console.log(avengers[4]);
console.log(avengers[5][2]); // looks weird, and seems like it should have been [5[2]], but it's not.
console.log(hi + avengers[0] + "!"); // could be also written console.log(`Hello ${avengers[0]}!);
console.log(hi + avengers[5][0] + "!"); // could also be written console.log(`${x} ${avengers[5][0]}!`);

//! Methods
let food = [`Pecan Pie`, `Shrimp`, `Quesadilla`, `Cheese Cake`, `Hot Dog`];

for(item of food) {console.log(item)}; // "item" is arbitrary
food.push('pizza'); // "Push" pushes the value (pizza) to the end of the array
console.log(food);

food.splice(1, 1, "Tacos"); // target, how many items to remove, what will replace the original? (index, quantity, new value)
console.log(`Splice: `, food);

food.splice(1,0, `Steak`);
console.log(food);

food.pop(); // removes an item from the end of the array
console.log(`Pop: `, food);

food.shift(); // removes item from the beginning of the array
console.log(`Shift: `, food);

food.unshift(`Hamburger`, `Salad`); // Adds more data to the front of the array
console.log(`Unshift: `, food);

let rgb = [`red`, `green`, `blue`];
console.log(rgb.toString()); // converts an array into a string
console.log(typeof rgb.toString());

let randomArr = [1,2,3];
let selection = randomArr[2].toString();
console.log(selection, typeof selection);
let turnToNumber = "4";
let changeToNumber = Number(turnToNumber); // Changes the datatype from a string to a number
console.log(changeToNumber, typeof changeToNumber);


/* Iteration Methods
    - Provides a callback function within each position in the array Value, index, array itself
*/

let newFoodList = [
    'apple', 'pear', 'mushrooms', 'cheese', 'peach'
];

for(let i = 0; i < newFoodList.length; i++) {
    console.log(newFoodList[i]);
}

newFoodList.forEach(item => console.log('forEach: ', item));
newFoodList.forEach((item, i) => {
    console.log('Index: ', i);
    console.log('Item: ', item);
    if(i % 2 === 0) {
        console.log('Even: ', item);
    } else {
        console.log('Odds: ', item);
    }
});

/*
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = [`The Shining`, `The Terminator`, `Ice Age`, `My Big Fat Greek Wedding`];
movies.forEach(movie => console.log(movie));
movies.push(`Rat Race`);
movies.splice(1, 1, "The Terminator 2");
movies.forEach(movie => console.log(movie));

let tmnt = [
    'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'Baxter'
];

let character = 'Leo';
console.log('Find: ', tmnt.find(c => c === character)); // c is a placeholder here, same as item before

character = 'April';
console.log('Find: ', tmnt.find(c => c === character)); // c is a placeholder here, same as item before

character = 'Splinter'
tmnt.find((c, i) => console.log(c === character, "index: ", i)); // c is a placeholder here, same as item before

let numArray = [];
let fixBuzzArray = [];

for(let i = 0; i < 101; i++) numArray.push(i); // For loop counts to 100, and adds each number to the array 100 times

numArray.map(x => {
    if(x % 15 === 0) fixBuzzArray.push(x);
})

console.log(fixBuzzArray);

//! Destructuring, Spread, and Rest

// can be used to create variables from an array's items

const fullName = ['Jane', 'Doe'];
// const firstName = fullName[0];
// const lastName = fullName[1];
// console.log(firstName);
// console.log(lastName);

const [firstName, lastName] = fullName; // takes in the array and associates it to these values

console.log(firstName);
console.log(lastName);

/*
* Spread Operator
    Concept of the Spread Operator - NOT syntax

    const fullname = ['Rocket', 'Raccoon'];

    ...fullName // 'Rocket', 'Raccoon';
    
    const element = ...fullName;
    const element = 'Rocket', 'Raccoon'
*/

const copiedFullName = [...fullName];
console.log('Copied Array', copiedFullName);
// const copiedFullName2 = [fullName];
// console.log('Copied Array 2', copiedFullName2);

fullName.push('Mrs');
console.log(fullName, copiedFullName);

console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 5.59];
//console.log(Math.min(prices));
console.log(`$${Math.min(...prices)}`); // the Spread Operator allows the array's items to be analyzed as numbers, rather than looking at the array as an object. The string interpolation adds the dollar sign

// Spread Operator helps us obtain standalone values that we can use with methods or functions.

const persons = [
    { name: 'Jane', age: 28}, { name: 'John', age: 35}
];

const copiedPersons = [...persons];
persons.push({name: 'Anna', age: 29});

console.log(persons, copiedPersons);

let x = 10;
let y = 'abc';
let z = null;

let a = x;
let b = y;

console.log(x, y, a, b);

a = 5;
b = 'xyz';

console.log(x, y, a, b);

let arr = [];
arr.push(1);

let reference = [1];
let refCopy = reference;

//* Rest - Collects multiple elements and condenses them into one array

const newPerson = ['Jane', 'Doe', 'Mrs', {month: 03, date: 22, year: 1973 }];

// const [fName, lName, ...otherInfo] = newPerson;
// console.log(fName);
// console.log(lName);
// console.log(otherInfo);
const [fName, lName, ...otherInfo] = newPerson;
console.log(fName);
console.log(lName);
console.log(otherInfo);

// Rest MUST be at the end with array destructuring.