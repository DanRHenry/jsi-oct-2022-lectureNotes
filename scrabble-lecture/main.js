const board = document.getElementById('board');

const dims =225;

let boardSquares = [];
let squareDetailOptions = [
    'Triple Word Score', 'Double Letter Score', 'Double Word Score', 'Triple Letter Score', 'Star'
]

let tripWordScore = [];
let tripLetScore = [];
let dblWordScore = [];
let dblLetScore = [];

class Square {
    constructor(pos) {
    this.pos = pos;
    this.detail = () => {
        switch(pos) {
            case tripWordScore.includes(pos) :
                return 'Triple Word Score'
                break;
            case tripLetScore.includes(pos):
                return 'Triple Letter Score'
                break
            case dblWordScore.includes(pos):
                return 'Double Word Score'
                break;
            case dblLetScore.includes(pos):
                return 'Double Letter Score'
                break;
            default:
                return '';
        }
        
        }
    this.color = () => {
        switch(pos) {
            case tripWordScore.includes(pos) :
                return 'crimson'
                break;
            case tripLetScore.includes(pos):
                return 'darkblue'
                break
            case dblWordScore.includes(pos):
                return 'pink'
                break;
            case dblLetScore.includes(pos):
                return 'lightblue'
                break
            default:
                return 'tan'
        }
    }
}

const displayBoard = () => {

    for(i = 1; i <= dims; i++) {
        let newSquare = new Square(i);
        boardSquares.push(newSquare);
    }

    boardSquares.map((s,i) => {
        let div = document.createElement('div');
        div.textContent = s.detail;

        div.style = `background-color: ${s.color}`;
        board.appendChild(div);
    })

    // for(i = 1; i < dims; i++) {
    //     let div = document.createElement('div');
    //     div.textContent = i;
    //     board.appendChild(div);
    // }
}

function setColor(posNumber);

displayBoard();