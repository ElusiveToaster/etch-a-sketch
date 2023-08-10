const gridContainer = document.querySelector('.gridContainer');

for (let i = 0; i < 256; i++) {
    const grid = document.createElement('div');
    let size = 1000 / 16;

    grid.style.cssText = 'background-color: grey; width:' + size + 'px; height:' + size + 'px;';
    grid.classList.add('grid');
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = 'blue';
    })
    gridContainer.appendChild(grid);
    
}

function createGrid(size) {

    if (size > 100) {
        return console.log('Size too large.')
    }

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    
    for (let i = 0; i < (size * size); i++) {
        const grid = document.createElement('div');
        let squareSize = 1000 / size;
    
        grid.style.cssText = 'background-color: grey; width:' + squareSize + 'px; height:' + squareSize + 'px;';
        grid.classList.add('grid');
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = 'blue';
        })
        gridContainer.appendChild(grid);
        
    }
    
}

const btn = document.querySelector('button');

btn.addEventListener("click", () => {
    let chooseSize = prompt("Choose grid size");

    createGrid(chooseSize)
})