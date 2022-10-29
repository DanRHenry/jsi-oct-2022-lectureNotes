//! For
// variable i is declared
let i;

//    1      2      3
for(i = 0; i < 10; i++) {
    console.log(i);
}


//variable i is not declared

for(i = 0; i <= 20; i = i + 2) {
// for(let i = 0; i <= 20; i += 2) { 
    console.log(i);
}


// variable i is declared within the parentheses
for(let i = 0; i <= 20; i += 2) { 
        console.log(i);
    }

for(let i = 0; i >= -24; i -= 2) {
    console.log(i);
}

let firstName = "Daniel"

for(let i = 0; i < firstName.length; i++) {
    console.log (firstName[i]);
}

let lastName = " Henry"
for(let i = 0; i < lastName.length; i++) {
    console.log (lastName[i]);
}

let sum = 0;

for(let i = 1; i <= 50; i++) {
    sum += i
    // console.log(sum); Putting this here would output every iteration along the way.
}
    console.log(sum);