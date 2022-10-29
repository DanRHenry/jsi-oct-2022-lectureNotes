// Do While will execute code at least once before iteration

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
        baddie: `Green Goblin`,
        hp: 15,
        
    },

    {
        baddie: `Venom`,
        hp: 25,

    },

    {
        baddie: `Stilt-Man`,
        hp: 5,

    },

    {
        baddie: `Thug`,
        hp: 0,

    },
];

let rand = Math.floor(Math.random() * badGuys.length) // Returns a random whole number, capped at the max number of badguys available in the array.
let villian = badGuys[rand];

console.log(`${villian.baddie} has appeared!`); // Announces which villian has appeared.
do {

    if(villian.baddie == 'Thug') {
        console.log(`Spider-Man webs Thug`);
        break;
    }
    console.log(`${villian.baddie} hits Spider-Man!`);
    spidyHP--;
    console.log(`Spider-man HP: ${spidyHP}`);

    let spidyHit = Math.floor(Math.random() * 3);
    console.log(`Spider-Man hits ${villian.baddie} for ${spidyHit} damage!!!`);
    villian.hp -= spidyHit;
    console.log(`Villian HP: ${villian.hp}`);

    if(spidyHP === 0) { // The  problem is that Spider-Man still hits with hp:0
        /*Spider-Man hits Venom for 0 damage!!!
        Villian HP: 5
        Venom hits Spider-Man!
        Spider-man HP: 0
        Spider-Man hits Venom for 2 damage!!!
        Villian HP: 3
        Venom has taken down Spider-Man!!! */

        break; // once this statement is true, break out of the loop, regardless of whether the condition of (villian.hp > 0) is true.
    }
} while (villian.hp > 0)

villian.hp <= 0 ? console.log(`Spider-Man captures ${villian.baddie}`) : console.log(`${villian.baddie} has taken down Spider-Man!!!`); // what the heck is this saying???