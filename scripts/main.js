let grid = document.querySelector('.grid');
let color_palette = document.querySelector('.color-palette');

function updateGrid(event = null) {
    for (let row = 0; row < MAP.length; row++) {
        for (let col = 0; col < MAP.length; col++) {
            if (event) {
                let block = document.querySelector(`#ROW${row}COL${col}`);
                if (MAP[row][col] == event.target.id) {
                    if (!(block.classList.contains('is-colored'))) {
                        block.textContent = event.target.id;
                    }
                    else {
                        block.textContent = '';
                    }
                }
                else {
                    block.textContent = '';
                }
            }
        }
    }
}

function createGrid() {
    for (let row = 0; row < MAP.length; row++) {
        let rows = document.createElement('div');
        rows.classList.add('row');
        for (let col = 0; col < MAP.length; col++) {
            let block = document.createElement('div');
            block.classList.add('col');
            block.id = `ROW${row}COL${col}`;
            block.textContent = `${MAP[row][col]}`;

            rows.appendChild(block)
        }
        grid.appendChild(rows);
    }
}

function updateColorPalette() {
    COLORS.forEach((color, index) => {
        let btn = document.createElement('button');
        btn.style.backgroundColor = color;
        btn.classList.add('color');
        btn.id = `${index}`;
        color_palette.appendChild(btn);
    });
}
createGrid();
updateColorPalette();


let selectedColorID = null;
let mouseDown = false;

let buttons = document.querySelectorAll('.color');
for (let button of buttons) {
    button.addEventListener('click', (e) => {
        selectedColorID = e.target.id;
        updateGrid(e);
    })
}

grid.addEventListener('pointerdown', (e) => {
    mouseDown = true;
    mouseMove(e);
})

grid.addEventListener('pointermove', (e) => {
    if (mouseDown) {
        mouseMove(e);
    }
});

document.addEventListener('pointerup', () => {
    mouseDown = false;
})

function mouseMove(e) {

    let block = document.elementFromPoint(e.clientX, e.clientY);

    if (
        block &&
        block.classList.contains('col') &&
        block.textContent === selectedColorID &&
        selectedColorID !== null
    ) {

        block.style.backgroundColor = `${COLORS[+selectedColorID]}`;
        block.style.borderRight = `1px solid ${COLORS[+selectedColorID]}`;
        block.style.borderBottom = `1px solid ${COLORS[+selectedColorID]}`;
        block.textContent = '';
        block.classList.add('is-colored');

    }
}