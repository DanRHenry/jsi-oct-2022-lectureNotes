// Ten Thousand Dice Game (version of one at least)

// variables
let score = 0; // default at start
let dieRoll; // stores random value
let stateOfDie = 'not rolled';
let numRolls = 0; // starting count of rounds (1-3)

// Table / Dictionary
const scoring = {
    '1': 100,
    '2': 20,
    '3': 30,
    '4': 40,
    '5': 50,
    '6': 60,
}

//! State
//* not rolled -> rolled / roll -> score & roll / score -> not rolled
let dieState = {
    'not rolled': ['roll'],
    roll: ['score', 'roll'],
    score: ['not rolled']
}

//! Functions
function scoreDice(dict, dieValue) {
    // This will update our score and provide us feedback
    score += dict[dieValue]; // evaluating the current score and adding whatever is associated with the table.
    console.log(`Your score is: ${score}`);
}

function rollDie() {
    // We'll generate a random number and increase our roll count.
    dieRoll = Math.floor((Math.random() * 6) +1 );
    numRolls++; // Increases the number of rolls by one
}

function playState(task) {
    // pulling in our command and running our conditionals.
    let valid = dieState[stateOfDie];
    if (valid.includes(task)) {
        stateOfDie = task;

        if(stateOfDie === 'roll') {
            if(numRolls === 3) {
                console.log(`You've rolled ${numRolls} and need to score. This roll doesn't count!`);
            } else {
                rollDie();
                console.log(`You rolled a ${dieRoll}. Would you like to Roll or Finalize the Score?`);
                scoreDice(scoring, dieRoll);
                console.log(`Number or rolls ${numRolls}`);
            }

        }

        if(stateOfDie === 'score') {
            dieRoll = 'not rolled';
            numRolls = 0;
            console.log(`Final Score ${score}!!!`);
            score = 0;

        }
    } else {
        console.error(`Invalid state for the die: ${stateOfDie} to ${task}`);
    }
}

//! Testing
playState('roll');
playState('roll');
playState('roll');
// playState('roll'); // Throws our error message
playState('score');

//? CHALLENGE TO SANDBOX:
// https://en.wikipedia.org/wiki/Dice_10000