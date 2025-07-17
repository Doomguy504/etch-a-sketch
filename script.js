const gridContainer = document.querySelector('#grid-container');

const GRID_WIDTH = 16;
const GRID_HEIGHT = 16;

for (let grid_column = 0; grid_column < GRID_HEIGHT; grid_column++){
    for (let grid_row = 0; grid_row < GRID_WIDTH; grid_row++){
        const square = document.createElement('div');
        square.className = 'square';

        gridContainer.appendChild(square);
    }
}