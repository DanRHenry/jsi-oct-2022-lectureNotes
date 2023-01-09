let name = "Dan"
let theName = document.getElementById("theName");
// let theName = "Dan";

if (theName == name) {
    console.log("Hello, ",name)
} else {console.log(`Hello, is your name ${theName}?`)};

let officeCharacter = "Michael"
switch(officeCharacter) {
    case "Michael":
        console.log("I like the smell of bacon in the morning")
        break;
    case "Jim":
        console.log("Get some bubble wrap")
        break;
    case "Dwight":
        console.log("I can cure him")
        break;
    default:
        console.log("call an ambulance")
}

let dessert = "cake";

switch(dessert) {
    case "pie":
        console.log("Pie, pie, oh my!");
        break;
    case "cake":
        console.log("Cake is great!");
        break;
    case "ice cream":
        console.log("I scream for ice cream!");
        break;
    default:
        console.log("Not on the menu");
}
let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum += i;  // sum = sum + i
    // console.log(sum);
}
console.log(sum);

let student = {
    name1: "Peter2",
    awesome3: true,
    degree5: "JavaScript6",
    week7: 18
}

for (bla in student) {
    console.log(bla); // Console logs the keys
    // console.log("---------------");
    console.log(student[bla]); // Console logs the values
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for(cat of catArray) {
    console.log(cat)
}

// print 1-30
// divisible by 3 = fizz
// divisible by 5 but not 3, buzz
// divisible by 5 and 3, fizz-buzz

for (let i = 1; i <= 30; i++) {
    if (i%5==0&&i%3==0) {
        console.log("fizzbuzz")
}
else if (i%3==0) {
    console.log("fizz")
} else if (i%5==0){console.log("buzz")
    } else  {console.log(i)}
};

// Tried using ternary instead, but it only console.logs 1
// let i = 1;
//     console.log(i)
//     i<=30 ? i++ 
//     : i%5==0&&i%3==0 ? console.log("fizzbuzz")
//     : i %3==0 ? console.log("fizz") 
//     : i %5==0 ? console.log("buzz")
//     : console.log(i);

//Tried using a switch, but no luck
// let i = 1;
// switch(i) {
//     case i <= 30: i++
//     case i%5==0 && i%3==0: console.log("fizzbuzz")
//     break;
//     case i%3: console.log("fizz")
//     break;
//     case i%5: console.log("buzz")
//     default: console.log(i);
// } 


//Ternary example from web
let score = 85;
let grade = score >= 80 ? "A"
    : score >= 70 ? "B"
    : score >= 60 ? "C"
    : "D";

    console.log(`Your exam grade is: ${grade}`);

let city = ['building', 'light pole', 'bridge', 'tree', 'empty street'];

let structure = city[0];

// let pos = 0;

while (structure != 'empty street') {

    console.log(`Spider-Man swings from the ${structure}.`);
    let pos = Math.floor(Math.random()* 5);
    // console.log(pos);
    // let pos = 4;
    // pos++
    structure = city[pos];
}

console.log(`Spider-Man lands in the ${structure}.`)

//Spider-Man Do While

var spidyHP = 25;
let badGuys = [ // Array with objects containing badGuys stats
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
    },
    {
        baddie: 'Hob-Goblin',
        hp: 30,
    },
];

let rand = Math.floor(Math.random() * badGuys.length);
let villian = badGuys[rand];

console.log(`${villian.baddie} has appeared!`);
do {

    // console.log(spidyHP);
    console.log(`${villian.baddie} hits Spider-Man!`);
    spidyHP--;
    console.log(`Spider-Man HP: ${spidyHP}`);

    let spidyHit = Math.floor(Math.random() * 3);
    console.log(`Spider-Man hits ${villian.baddie} for ${spidyHit} damage!!!`);
    villian.hp -= spidyHit;
    console.log(`Villian HP: ${villian.hp}`);

    if(spidyHP === 0) {
        break;
    }


} while(villian.hp > 0)

villian.hp <= 0 ? console.log(`Spider-Man captures ${villian.baddie}`) : console.log (`${villian.baddie} has taken down Spider-Man!!!`);

function counting() {
    for (let i = 1; i<=10; i++) {
        console.log(i)
    }
};

counting()

function myName(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}!`);
}
let first = [
    "Dan", 
    "Ruth", 
    "Bob", 
    "Trey", 
    "Dea", 
]

let last = [
    "Henry",
    "Henry",
    "Nichols",
    "Henry",
    "Henry"
];

let i = 2
myName(first[i], last[i]);



// Tip Calculator

let quality = "good";
let subtotal = 47.35//SubTotal
let salesTax = subtotal * 0.0625
let total = subtotal + salesTax
let tip = calcTip(quality);
let totalWithTip = total + tip;

function calcTip(qualityOfService) {
    let tip
    switch(qualityOfService) {
        case "excellent" : 
        tip = .2 * total 
        return tip
        break;

        case "good" : 
        tip = .15 * total 
        return tip
        break;

        case "meh" :
        tip = .1 * total 
        return tip
        break;

        case "bad": 
        tip = 0 * total 
        return tip
        default: return .2 * total
    }   
};

console.log(`Subtotal: $${subtotal.toFixed(2)}`)
console.log(`MA Tax: $${salesTax.toFixed(2)}`)
console.log(`Total: $${total.toFixed(2)}`)
console.log(`Tip: $${tip.toFixed(2)}`)
console.log(`Total With Tip: $${totalWithTip.toFixed(2)}`);


// Arrays

let avengers = ['Nick', 2, false, 'Steve', 'Bruce', ['Tony', 8, true]];

/*
Using the console.log();
    - target "Bruce"
    - target "true"
    - using string interpolation, return "Hello, Nick" and "Hello, Tony"
*/

console.log(avengers[4]);
console.log(avengers[5][2]);
console.log(`Hello ${avengers[0]}!`);
console.log(`Hello ${avengers[5][0]}!`);

//Create a different greeting for each avenger
let practiceObject = {
    tony: "Suit up, ",
    nick: "nick nick, "
}

console.log(practiceObject.nick)
console.log(practiceObject.tony)


//Methods
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hot Dog'];
console.log(food);
food.splice(1,2,"Pumpkin");
console.log(food);

console.log(food.toString());

for(bla of food) { // Of lists the values within the array. // "bla" is arbitrary and just needs to match within the code block
    console.log(bla);
};

for(bla in food) {  // In lists the index numbers
    console.log(bla);
};

// Changing a string to a number
// Playing with the limits of JS 64 bit numbers
let turnToNumber = "9999999999999999999999"
let changeToNumber = Number(turnToNumber);
console.log(turnToNumber, typeof turnToNumber, changeToNumber, typeof changeToNumber);

console.log(changeToNumber ** changeToNumber);

let almostInfinity = 1e+99
console.log(almostInfinity, typeof almostInfinity);
let infinity = almostInfinity + 1e+309 // 1e+99 + 1e+308 is the limit
console.log("infinity: ", infinity);

let brokenNumber = 17e+308; // 17e+308 returns infinity.  17e+307 is the limit
let brokenNum = 18e+307; // 18e+307 returns infinity.  18e+306 is the limit
console.log("17e+308", brokenNumber);
console.log("18e+307", brokenNum);

const newPerson = ['Jane', 'Doe', 'Mrs.', {month:03, date:22, year:1973}];

const [,,,otherInfo] = newPerson;
// console.log(fname);
// console.log(lname);
console.log(otherInfo);

// Playing with Modulus and big numbers
let crazyMod23313522123456789 = [];
for (let i = 0; i < 17e+308; i++) {
    if (i %2331352212 === 0) {crazyMod23313522123456789.push(i)
        console.log(crazyMod23313522123456789);
    };
};
console.log(crazyMod23313522123456789);


// Playing with adding and big numbers, comparing time to calculate to working with mods
bigNum = []
let num = 2331352212
while (num < 17e+308) {
    num += num
    bigNum.push(num);
}
bigNum.pop();
console.log(bigNum.pop());

// Add a character challenge


//! Removing empty keys from an object... unfinished...
let objectDelete = {
    pair1: "one",
    pair2: "two",
    pairOops: null,
    pair3: "three",
}

// Destructuring objects
let {pair1, pair2, pairOops, pair3} = objectDelete;
console.log(pair1);


// let objectDeleteKeys = [];
// console.log("objectDeleteKeys: ", objectDelete);
// let keys = Object.keys(objectDelete);
// Array.prototype.push.call(objectDelete, keys);
// // objectDeleteKeys.push(keys);
// console.log("objectDeleteKeys: ", objectDelete);


function deleteNull() {

    // let objectDeleteValues = [];
    // console.log("objectDeleteValues: ", objectDeleteValues);
    // Object.values(objectDelete).push(objectDeleteValues);
    // console.log("objectDeleteValues: ", objectDeleteValues);
    // for (let i = 0; i<objectDelete.length; i++) {
    // }

    //iterate over objectDelete values
    //push data to new array
    //iterate over objectDelete keys
    //push data to new array
    //search for i === null in the values array
    //search for i in keys array
    //delete that key from the objectDelete

}

// console.log(objectDelete);
deleteNull(objectDelete);
// console.log(objectDelete);

//Mock Hulu Challenge -- good with that
/* 
let hulu = {
    id: 1,
    movies: [
        {
            title: "",
            genre: ["", ""],
            rating: "",
            "run time": 120,
            "year released": 1900 
        }, 
        {
            title: "",
            genre: ["", ""],
            rating: "",
            "run time": 120,
            "year released": 1900 
        }, 
        {
            title: "",
            genre: ["", ""],
            rating: "",
            "run time": 120,
            "year released": 1900 
        }, 
    ],
    shows:[
        {
            title: "",
            "number of seasons": 2,
            seasons: [
                {
                    season: 1,
                    "number of episodes": 21,
                    episodes: [
                        {
                        episode_1: "hello, this is the first episode",
                        },
                        {
                        episode_2: "hello, this is the second episode",
                        },
                    ]
                }
            ]
        }
]
} */


