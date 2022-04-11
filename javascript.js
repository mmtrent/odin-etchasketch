const container = document.querySelector('#container');

let width = 32;
let height = 32;

function createGrid() {
    for (let i = 0; i < height; i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add('row');
        container.appendChild(gridRow);
        for (let j = 0; j < width; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener("mouseover", function () {
                this.style.backgroundColor = "black";
            });
            gridRow.appendChild(cell);
        };
    };
}

function resetCells() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    })
}

createGrid();

const reset = document.querySelector("#reset");
reset.addEventListener('click', () => {
    resetCells();
});