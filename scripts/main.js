let grid = document.querySelector('.grid');
let color_palette = document.querySelector('.color-palette');

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

function updateColorPalette() {
    for (const color of COLORS) {
        let btn = document.createElement('button');
        btn.style.backgroundColor = color;
        btn.classList.add('color');
        color_palette.appendChild(btn);
    }
}
updateGrid();
updateColorPalette();

