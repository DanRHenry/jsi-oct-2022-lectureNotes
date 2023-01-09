// Global Variables
const form = document.querySelector('form');
// console.log(form)
const btn = document.getElementById('submit-btn');
const table = document.querySelector('tbody');
let animals = [];
// console.log(table);

// Class
class Animal {
    constructor(s, n, sex) {
        this.species = s;
        this.name = n;
        this.sex = sex;
    }
}

// Event Listeners
form.addEventListener('submit', event => {
    event.preventDefault();
    // console.log(form[0].value);
    // console.log(form[1].value);
    // console.log(form.name.value);
    // console.log(form.sex);
    // We are able to access a key of sex as it is tied to the "name" of our radio buttons. - We can target the "name" of our input fields to capture the value stored with it.

    let species = form.species.value;
    let name = form.name.value;
    let sex = form.sex.value;

    let animal = new Animal(species, name, sex);

    // console.log(animal);
    animals.push(animal);
    form.reset(); // Clears out the form after submitting data
    form.species.focus();
    // console.log(animals)
    buildTable();
});

// Display Table
function buildTable() {
    console.log(animals);

    while(table.firstChild) {
        table.removeChild(table.firstChild);
    }
    animals.forEach((a,i) => {
        // console.log(a);
        let n = properCase(a.name);
        // let 
        // Create
            let tr = document.createElement('tr');
            let pos = document.createElement('td');
            let name = document.createElement('td');
            let sex = document.createElement('td');
            let species = document.createElement('td');

            // Add Attributes
            tr.accessKey = `animal-${i}`;
            pos.textContent = i + 1;
            name.textContent = a.name;
            sex.textContent = a.sex;
            species.textContent = a.species;

        // Append
        tr.appendChild(pos);
        tr.appendChild(name);
        tr.appendChild(sex);
        tr.appendChild(species);
        table.appendChild(tr);
    })
}

function properCase(text) {
    let checked;
    if(text) {
        for (t in text) {
            if (t === 0) {
                checked = text[t].touppercase;
            } else {}
        }
        }
        
    } else {
        console.error('Please input proper characters.')
    }
}