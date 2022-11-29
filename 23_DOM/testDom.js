// Global Variables
let buildBtn = document.getElementById('table-btn');
let shellDiv = document.getElementById('shell-div');

// mock data
const colorList = [
    'red', 'blue', 'green', 'purple', 'yellow', 'orange'
];

// Function to build and display
const buildTable = () => {
    console.log('HIT!');
    console.log(colorList);
    colorList.forEach((color, i) => {
        console.log(color);

        // create elements
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        // assign value to properties
        h2.textContent = color;
        h2.style.color = color;
        p.innerHTML = `
            Item <u><b>${i}</b></u> in my list.
            `
            div.id = `Color_${i}`;
        // set to parent element
        div.appendChild(h2);
        div.appendChild(p);
        shellDiv.appendChild(div);
    })

    shellDiv.style = `
    display: flex;
    align-items: space-around;
    `
}

// Event Listener
buildBtn.addEventListener('click', buildTable);