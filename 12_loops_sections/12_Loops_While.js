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