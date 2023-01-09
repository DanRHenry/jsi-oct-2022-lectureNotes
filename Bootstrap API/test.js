import { key } from "./helpers/key.js";

//ANCHOR Global Variables
const url = `https://api.spoonacular.com/recipes/random`;
const apiKey = `?apiKey=${key}`; 

//ANCHOR Global Elements
const searchForm = document.querySelector('#search-form');

//ANCHOR Functions 

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
}

//ANCHOR Event Listeners
searchForm.addEventListener('submit', e => {
    e.preventDefault();

    spoonFetch();
});