let grid = document.querySelector('.grid');
let color_palette = document.querySelector('.color-palette');

function updateGrid(event = null) {
    grid.textContent = '';
    for (let row = 0; row < MAP.length; row++) {
        let count = 0;
        let rows = document.createElement('div');
        rows.classList.add('row');
        for (let col = 0; col < MAP.length; col++) {
            count++;
            let block = document.createElement('div');
            block.classList.add('col');
            if (event) {
                block.textContent = ``;
                if (MAP[row][col] == event.target.id) {
                    block.textContent = `${MAP[row][col]}`;
                }
            }
            else {
                block.textContent = `${MAP[row][col]}`;
            }

            // block.style.backgroundColor = `${COLORS[MAP[row][col]]}`;
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
updateGrid();
updateColorPalette();

let buttons = document.querySelectorAll('.color');
for (let button of buttons) {
    button.addEventListener('click', (e1) => {
        updateGrid(e1);

        grid.addEventListener("mousedown", function (e2) {
            mouseMove(e2, e1);
            grid.onmouseover = function (e2) {
                mouseMove(e2, e1);
            }
        });

        grid.addEventListener("mouseup", function (e2) {
            grid.onmouseover = null;
        });
    });
}

function mouseMove(e2, e1) {
    if (e2.target.textContent) {
        e2.target.style.backgroundColor = `${COLORS[+(e1.target.id)]}`;
        e2.target.style.borderRight = `1px solid ${COLORS[+(e1.target.id)]}`;
        e2.target.style.borderBottom = `1px solid ${COLORS[+(e1.target.id)]}`;
    }
}



