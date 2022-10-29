/*
! LOOPS
    What is the loop doing, and what does it need to stop?

    Different Types:
        - For
        - For-In
        - For-Of
        - While
        - Do... While
*/

//! For
let i;

//    1      2      3
for(i = 0; i < 10; i++) {
    console.log(i);
}

/*
    1. Initial Expression
    2. Condition
    3. Increment Expression
*/

for(let i = 0; i <= 20; i = i + 2) {
// for(let i = 0; i <= 20; i += 2) { 
    console.log(i);
}

// count by 2, start from 0, down to -24

for(let i = 0; i >= -24; i -=2 ) {
    console.log(i);
}

let firstName = 'Ken';
for(let i = 0; i < firstName.length; i++){
    console.log(firstName [i]);
}

// Challenge: Make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
// let sum = 0;
let sum = 0;

for(let i = 1; i <= 50; i++) {
    sum = sum + i;
}
console.log(sum);

//! For-In
let student = {
    name: "Peter",
    awesome: true,
    degree: 'JavaScript',
    week: 1
}

for(item in student) {
    console.log(item); // name, awesome, degree, week
    console.log(student[item]); // Peter, true, JavaScript, 1
}

let myCat;

let cats = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for (cat in cats) {
    console.log(cat); // returns back index of the array
    console.log(cats[cat]); // returns the value
}

//! For-Of
// for(item of student) {
//     console.log(item);
//}
for(cat of cats) {
    console.log(cat);
    myCat = cat;
}

// console.log('My cat is a ${myCat},);


/*
    Write a program that uses a loop, conditionals, and console.log() to print all the numbers from 1 to 30 inclusive, and follows the rules below:

    For numbers evenly divisible by 3, print "Fizz" instead of the number.

    For numbers evenly divisible by 5, and not 3, print "Buzz" instead of the number.

    For numbers that are evenly divisible by both 3 and 5, print "FizzBuzz" instead of the number, making sure that the program still prints "Fizz" or "Buzz" for numbers divisible by only 3 or 5, and not both.

    For any number that is not divisible by either 3 or 5, print the number itself.

    Hint: Remember to check that numbers divisible by both 3 and 5 print "FizzBuzz", and not just "Fizz" or "Buzz".
    Hint: You may have to reorder the arrangement of conditional checks to ensure the correct result prints for each number.

    Your code should output should start with the following: 
    1
    2
    Fizz
    4
    Buzz
    Fizz
    7
    8
    Fizz
    Buzz

    7:50 wrap-up time
*/

// Check video to solve it again.

// Try reformatting this solution as both:
// Ternary
// Switch

//! While

/*
    Structure:

    While(condition) {
        code block...
    }

*/

let city = [
    'building', 'building', 'light pole', 'bridge', 'building', 'light pole', 'tree', 'empty street'
]

let structure = city[0];
let pos = 0;

while(structure != 'empty street' ) {
    console.log(`Spider-Man swings from the ${structure},`);
    pos++;
    structure = city[pos];
}

console.log(`Spider-Man lands in the ${structure}`);

//! Do While
/*
    Structure
    
        do {
            code block...
        } while (condition);
    
    - Runs the code block at least once!
*/

let spidyHP = 20;
let badGuys = [
    {
        baddie: 'Green Goblin',
        hp: 15,
    },
    {
        baddie: 'Venom',
        hp: 25,
    },
    {
        baddie: 'Stilt-Man',
        hp: 5,
    }
];
let rand = Math.floor(Math.random() * badGuys.length);
let villain = badGuys[rand];

console.log(`${villain.baddie} has appeared!`);
do {

    console.log(`${villain.baddie} hits Spider-Man!`);
    spidyHP--;
    console.log(`Spider-Man HP: ${spidyHP}`)

    let spidyHit = Math.floor(Math.random() *3);
    console.log(`Spider-Man hits ${villain.baddie} for ${spidyHit}
    damage!!!`);
    villain.hp -= spidyHit;
    console.log(`Villian HP: ${villain.hp}`);

    if(spidyHP === 0) {
        break;
    }
}   while (villain.hp > 0);

    villain.hp <= 0 ? console.log(`Spider-Man captures ${villain.baddie}`) : console.log(`${villain.baddie} has taken down Spider-Man!!!`);
