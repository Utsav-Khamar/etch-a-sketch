let grid = document.querySelector('.grid');

function updateGrid() {
    for (let row = 0; row < MAP.length; row++) {
        let count = 0;
        console.log(MAP[row].length);
        let rows = document.createElement('div');
        rows.classList.add('row');
        for (let col = 0; col < MAP.length; col++) {
            count++;
            let block = document.createElement('div');
            block.classList.add('col');
            block.textContent = `${MAP[row][col]}`;
            block.style.backgroundColor = `${COLORS[MAP[row][col]]}`;
            rows.appendChild(block)
        }
        grid.appendChild(rows);
    }
}

updateGrid();