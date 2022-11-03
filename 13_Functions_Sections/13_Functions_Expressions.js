/* 
!   Function Expressions
    - Functions that are stored inside a variable, like a datatype
    - Once stored, they can be invoked by calling on that name.

    let hey = function hi() {
        console.log('HI);
    }

    1 - The variable, 'hey' is now representative of the function "hi"

    Doesn't get hoisted.

*/

function hi() {
    return 'Hi, how are you?';
}

// Nothing will show on the screen because even though it the function has been returned, the string hasn't been stored anywhere.
// To actually track the code:

console.log(hi()); // What is being console-logged is the returned string that the function is providing.

function count() {
    for(i = 1; i<=10; i++)
    console.log(i);
}

count();