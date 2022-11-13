//! Lookup Tables / Dictionaries

const listgame = (system) => {
    let collection = {
        "Nintendo": ['Duck Hunt', 'The Legend of Zelda', 'Super Mario Bros.'],
        "Super Nintendo": ['Super Mario World', 'F-Zero', 'Star Fox'],
        "Nintendo 64": ['Super Mairo 64', 'Mario Kart 64', 'Goldeneye 007'],
    }

    return collection[system];
}

console.log(listgame('Nintendo 64'));
console.log(listgame('Nintendo'));

const stateAbbreviation = {
    alaska: 'ak',
    delaware: 'de',
    hawaii: 'hi',
    indiana: 'in',
    vermont: 'vt',
}

const acronyms = {
    asap: 'as soon as possible',
    fomo: 'fear of missing out',
    gif: 'graphics interchange format',
    lol: 'laughing out loud'
}

function findIt(dict, search) {
    return dict[search];
}

console.log(findIt(stateAbbreviation, 'indiana'));
console.log(findIt(acronyms, 'lol'));


//! State Machine
let state = {
    green: ['yellow'],
    yellow: ['red'],
    red: ['green', 'yield'],
    yield: ['red']
}

let currentState = 'green';

function enterState(newState) {
    let validTransition = state[currentState]; // Establish which point in our state object that we want to reference.

    if(validTransition.includes(newState)) { // Does our key include the state our use is attempting to change it to?
        currentState = newState; // Allow our state to change.
        console.log(currentState);
    } else {
            throw(`Invalid State: ${currentState} to ${newState}`)
    }

}
enterState('yellow');
enterState('red');
enterState('green');
// enterState('red'); // breaks code because green cannot go to red.

