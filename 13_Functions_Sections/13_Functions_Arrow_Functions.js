/* 
!   Arrow Functions

    (1)       (2)
    let hi = () => {
        console.log('Hi!')
}
    1 - We need to set fat arrow functions within a variable.
    2 - We use the 'fat arrow' to signify that it is a function.

    - Introduced with ES6
    - Concise way to write function expressions, NOT declarations

    CAN'T be hoisted.

    - concise body
    - block body
*/

/* Concise Body
    Automatically has a return to it.
*/
let hello = () => console.log('Hi');
hello();


/* Block Body
    - let hi example from above is block body.
    - it must have a return set inside the block
*/

let goodbye = () => {
    return 'Goodbye';
}

console.log(goodbye());