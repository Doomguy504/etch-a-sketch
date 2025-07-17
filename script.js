const gridContainer = document.querySelector('#grid-container');
const sizeButton = document.querySelector('#size-button');
const resetButton = document.querySelector('#reset-button');

const INITIAL_GRID_SIZE = 16;

function changeColor(e){
    e.target.style.backgroundColor = 'black';
}

function reset(){
    const squares = document.querySelectorAll('.square');

    squares.forEach((e) => {
        e.style.backgroundColor = 'white';
    });
}

function changeGridSize(){
    let newGridSize = prompt('Enter new grid size', '16');
    newGridSize = parseInt(newGridSize);

    while (!newGridSize ||  newGridSize < 0 || newGridSize > 100){
        newGridSize = prompt('Invalid input. Must be between 0 and 100', '16');
        newGridSize = parseInt(newGridSize);
    }

    gridContainer.replaceChildren();
    createGrid(newGridSize);
}

function createGrid(gridDimensions){
    for (let gridColumnIndex = 0; gridColumnIndex < gridDimensions; gridColumnIndex++){
        const gridRow = document.createElement('div');
        gridRow.className = 'grid-row';
        gridContainer.appendChild(gridRow);

        for (let gridRowIndex = 0; gridRowIndex < gridDimensions; gridRowIndex++){
            const square = document.createElement('div');
            square.className = 'square';
            square.addEventListener('mouseenter', changeColor);

            gridRow.appendChild(square);
        }
    }
}

resetButton.addEventListener('click', reset);
sizeButton.addEventListener('click', changeGridSize);

createGrid(INITIAL_GRID_SIZE);