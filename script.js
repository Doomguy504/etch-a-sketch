const gridContainer = document.querySelector('#grid-container');

const GRID_WIDTH = 16;
const GRID_HEIGHT = 16;

for (let gridColumnIndex = 0; gridColumnIndex < GRID_HEIGHT; gridColumnIndex++){
    const gridRow = document.createElement('div');
    gridContainer.appendChild(gridRow);

    for (let gridRowIndex = 0; gridRowIndex < GRID_WIDTH; gridRowIndex++){
        const square = document.createElement('div');
        square.className = 'square';

        gridRow.appendChild(square);
    }
}