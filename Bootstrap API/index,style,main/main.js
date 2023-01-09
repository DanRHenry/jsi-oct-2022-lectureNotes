import { key } from "./helpers/key.js"; // the key file doesn't default to "key.js", it defaults to "key"

//! Global Variables
const url = `https://api.spoonacular.com/recipes/random`
const apiKey = `?apiKey=${key}`;
let storedItems = [];

//ANCHOR Global Elements
const searchForm = document.querySelector('#search-form');
const randomCardDisplay = document.querySelector('.random-card');
const keptCards = document.getElementById('kept-cards');
//ANCHOR Functions

const removeElements = elment => {
    while(Element.firstChild) {
        
    }
}

const spoonFetch = async() => {
    let buildUrl = url+apiKey;

    let res = await fetch(buildUrl);
    let data = await res.json();
    let obj = await data.recipes[0];

    // console.log(obj);
    // console.log(obj.image);

    let obtainedCard = {
        title: obj.title,
        img: obj.image,
        src: obj.sourceUrl
    }

    displayRandCard(obtainedCard);
}

const displayRandCard = recipe => {
    console.log(recipe);
    while(randomCardDisplay.firstChild) {
        randomCardDisplay.removeChild (randomCardDisplay.firstChild);
    }

    //* Create the element
    let card = document.createElement('div');
    let img = document.createElement('img');
    let cardBody = document.createElement('div');
    let title = document.createElement('h5');
    let addBtn = document.createElement('button');

    //* Set Attributes
    card.className = 'card';
    card.style.width = '18rem';
    img.src = recipe.img;
    img.alt = `${recipe.title} image`;
    cardBody.className = 'card-body';
    title.className = 'card-title';
    title.textContent = recipe.title;
    addBtn.className = 'btn btn-success';
    addBtn.textContent = 'Add';
    addBtn.onclick = async () => {
        await storedItems.push(recipe);
        setTable();
    }


    //* Append
    cardBody.appendChild(title);
    cardBody.appendChild(addBtn);

    card.appendChild(img);
    card.appendChild(cardBody);

    randomCardDisplay.appendChild(card);
}


const setTable = () => {
    console.log("List of Recipes: "), storedItems

    storedItems.map((r,i) => {
        //Create
        let div = document.createElement('div');
        let card = document.createElement('div');
        let img = document.createElement('img');
        let cardBody = document.createElement('div');
        let title = document.createElement('h6');
        let p = document.createElement('p');
        let a = document.createElement('a');

        //Set
        div.id = `card-${i+1}`
        div.className = 'col';
        card.className = 'card';
        img.src = r.img;
        img.className = 'card-img-top';
        img.alt = `${r.title} image`;
        cardBody.className = 'card-title';
        title.textContent = recipe.title;
        a.href = `${r.src}`;
        a.target = '_blank';
        a.textContent = 'Link to Recipe'

        //Append
        p.appendChild(a);
        cardBody.appendChild(title);
        cardBody.appendChild(p);

    });
}
//ANCHOR Event Listeners
searchForm.addEventListener("submit", e => {
    // e.preventDefault
    e.preventDefault();
    
    spoonFetch();
});



/* import { key } from "./helpers/key.js"; // the key file doesn't default to "key.js", it defaults to "key"

//! Global Variables
const url = `https://api.spoonacular.com/recipes/random`
const apiKey = `?apiKey=${key}`;
let storedItems = [];

//ANCHOR Global Elements
const searchForm = document.querySelector('#search-form');
const randomCardDisplay = document.querySelector('.random-card');
const keptCards = document.getElementById('kept-cards');
//ANCHOR Functions

const removeElements = elment => {
    while(Element.firstChild) {
        
    }
}

const spoonFetch = async() => {
    let buildUrl = url+apiKey;

    let res = await fetch(buildUrl);
    let data = await res.json();
    let obj = await data.recipes[0];

    // console.log(obj);
    // console.log(obj.image);

    let obtainedCard = {
        title: obj.title,
        img: obj.image,
        src: obj.sourceUrl
    }

    displayRandCard(obtainedCard);
}

const displayRandCard = recipe => {
    console.log(recipe);
    while(randomCardDisplay.firstChild) {
        randomCardDisplay.removeChild (randomCardDisplay.firstChild);
    }

    //* Create the element
    let card = document.createElement('div');
    let img = document.createElement('img');
    let cardBody = document.createElement('div');
    let title = document.createElement('h5');
    let addBtn = document.createElement('button');

    //* Set Attributes
    card.className = 'card';
    card.style.width = '18rem';
    img.src = recipe.img;
    img.alt = `${recipe.title} image`;
    cardBody.className = 'card-body';
    title.className = 'card-title';
    title.textContent = recipe.title;
    addBtn.className = 'btn btn-success';
    addBtn.textContent = 'Add';
    addBtn.onclick = async () => {
        await storedItems.push(recipe);
        setTable();
    }


    //* Append
    cardBody.appendChild(title);
    cardBody.appendChild(addBtn);

    card.appendChild(img);
    card.appendChild(cardBody);

    randomCardDisplay.appendChild(card);
}


const setTable = () => {
    console.log("List of Recipes: "), storedItems

    storedItems.map((r,i) => {
        //Create
        let div = document.createElement('div');
        let card = document.createElement('div');
        let img = document.createElement('img');
        let cardBody = document.createElement('div');
        let title = document.createElement('h6');
        let p = document.createElement('p');
        let a = document.createElement('a');

        //Set
        div.id = `card-${i+1}`
        div.className = 'col';
        card.className = 'card';
        img.src = r.img;
        img.className = 'card-img-top';
        img.alt = `${r.title} image`;
        cardBody.className = 'card-title';
        title.textContent = recipe.title;
        a.href = `${r.src}`;
        a.target = '_blank';
        a.textContent = 'Link to Recipe'

        //Append
        p.appendChild(a);
        cardBody.appendChild(title);
        cardBody.appendChild(p);

    });
}
//ANCHOR Event Listeners
searchForm.addEventListener("submit", e => {
    // e.preventDefault
    e.preventDefault();
    
    spoonFetch();
});
 */