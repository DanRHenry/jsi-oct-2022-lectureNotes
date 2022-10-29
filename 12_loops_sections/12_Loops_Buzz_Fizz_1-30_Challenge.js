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
*/

//Loop
// Functioning Loop
// for(let i = 1; i <= 30; i++) { 

//     //IF
//     if(i % 5 == 0 && i % 3 == 0) { 
//         console.log("Fizz Buzz");
//     }
//     //IF
//     else if(i % 5 == 0) { //This gives "Buzz" when i is divisible by
//         console.log("Buzz");
//     }
//     //IF
//     else if(i % 3 == 0) {

//         console.log("Fizz");

//     }
//     //ELSE
//     else {
//     console.log(i);
// }

// Ternary Version


// Switch Version

// let i = 1; i <= 30; i++

// Look up switches
// let i

// switch (i = 0 && i ) {
//     case (i <= 30 && i >= 1):
//         i += 1
//         console.log(i);
//     case (i % 5 == 0 && i % 3 == 0): 
//         console.log("Fizz Bang");
//     case (i % 3 == 0):
//         console.log("Fizz");
//     case (i % 5 == 0): 
//         console.log("Bang");
//     default:
//         console.log(i);

    
// }