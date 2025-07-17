const gridContainer = document.querySelector('#grid-container');

const INITIAL_GRID_SIZE = 16;

function changeColor(e){
    e.target.style.backgroundColor = 'black';
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

createGrid(INITIAL_GRID_SIZE);