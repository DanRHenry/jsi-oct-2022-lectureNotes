let marvelHero = {
    fullname: 'Peter Parker',
    codename: 'Spider-Man',
    age: 25,
    active: true
}
/*
    - Object Literal
        When our values are written within our keys. (hard coded)

    * Structure

        keyword objectName = {
            key: value,
        }
        
        - keys are considered like strings (when we're referencing them).

        - Objects are like dictionaries of like items
*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        "season one": [
            {
                title: 'Simpsons Roasting on an Open Fire',
                aired: '1989-12-17',
            },
            {
                title: 'Bart the Genius',
                aired: '1990-01-01',
            },
        ],
        "season two": [/*...*/],
        "season three": [/*...*/],
        // etc.
    },
    currently_running: true,
}

// Dot Notation 
console.log(theSimpsons.genre);

// Can also be accesed using squared bracket notation
let genre = 'genre'; // variable being used for the 3rd example below.

console.log(theSimpsons['genre']); // quotes are needed...
console.log(theSimpsons[genre]); // because otherwise, it expects a variable

console.log(theSimpsons.seasons["season one"]);

theSimpsons.characters = [
    'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'
];
console.log(theSimpsons);

theSimpsons.characters.push('Ned Flanders');
console.log(theSimpsons.characters);

console.log(theSimpsons.currently_running);
theSimpsons.currently_running = false;
console.log(theSimpsons.currently_running);
theSimpsons.currently_running = true;
console.log(theSimpsons.currently_running);
theSimpsons.seasons["season one"][1].aired = '1990-01-14'; // changes the object within the array
console.log(theSimpsons.seasons["season one"]);

//! Methods
// Object.keys();  // Lists the keys within a given object
console.log(Object.keys(theSimpsons));
console.log(Object.keys(theSimpsons.seasons)); //

// Object.values()
console.log(Object.values(theSimpsons));

// Object.create() // uses an existing object to help frame out what a new object will become
const futurama = Object.create(theSimpsons);
// console.log(futurama);

futurama.id = 2;
futurama.ex = 1999;
console.log(futurama);

// delete object.key // removes pieces from objects

futurama.currently_running = false;
console.log('BEFORE: ', Object.keys(futurama));
delete futurama.currently_running;
console.log('AFTER: ', Object.keys(futurama));


//Todo: trying to remove "null" value keys, keeping the rest
// let newObj = {
//     one: 'test',
//     two: null,
//     three: null,
//     four: 'test',
// };

// function removeKeysIfNull(obj) {
//     console.log(obj);

//     for(k in obj) {
//         console.log(k);
//         if(k === null) {
//             delete obj.k;
//         }
//     }
// }

// removeKeysIfNull(newObj);
// console.log(newObj);

//todo ^^

//! Object Destructuring
const { characters, seasons } = theSimpsons;
console.log('DEST: ', characters);
console.log('DEST: ', seasons);

characters.push('Meo');
console.log(characters);
characters[6] = 'Moe'; // changing a character to fix a spelling error
console.log(characters);

const { est: established, currently_running: on_air} = theSimpsons; // does not actually change the information, it creates new variables
console.log('Established: ', established);
console.log('On Air: ', on_air);

//! Spread with Objects
const simpsonsCharacters = {
    simpsonsHouse: ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'],
    moesTavern: ['Moe', 'Barney'],
}

const generalLocations = {
    park: 'statue',
    beach: 'dock',
    lake: '3-eyed fish',
}

const location = {
    ...simpsonsCharacters,
    dmv: ['Patty', 'Selma'],
    ...generalLocations,
}
console.log(location);

/*

!   Challenge Details:
    - Create an object called "hulu".
    - This object will have 3 main keys:
        - id, movies, and shows.
    - id will simply be an integer.
    - movies will be an array of objects that represent individual movies.
        These objects will have:
                - title will be a string
                - genre will be an array of strings
                - rating will be a string
                - run time will be an integer representing total minutes (whole number)
                - year released will be an integer.
    - shows will be an array of objects that represent individual shows.
        - These shows will have the following keys:
            - title will be a string
            - number of seasons an integer
            - seasons will be an array of objects that will represent individual seasons.
                - A season will have the following keys:
                    - season will be an integer
                    - number of episodes will be an iteger
                    - episodes will be an array of objects that hold individual episodes.
                        - Episodes will only detail the title of the episode and an original aired date.
    
    - There should be at least 2 movie objects.
    - There will only need to be 1 show object.
        - The show should detail 2 seasons with only 2 episodes each season.
    
    * This information can be 100% fabricated
    
    - After the hulu object has been created:
        - write 3 console logs
            - detail the array of movies
            - show the title of the first show
            - show the title of episode 1 of the second season of the first show.
*/
