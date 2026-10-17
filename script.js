let grid = document.querySelector('.grid');
let color_picker = document.querySelector('#color-select');
let range_picker = document.querySelector('#range-select');
let color_btn = document.querySelector('.color-mode');
let rainbow_btn = document.querySelector('.rainbow-mode');

// default selection of black color & color-mode option
color_btn.classList.add("on-click");
console.log(typeof (color_picker.value));


range_picker.addEventListener('input', updateGrid);

function updateGrid(e) {
    let gridSize;
    if (e) {
        gridSize = e.target.value;
    }
    else {
        gridSize = 16;
    }
    grid.textContent = '';

    for (let row = 0; row < gridSize; row++) {
        let rows = document.createElement('div');
        rows.classList.add('row');
        for (let col = 0; col < gridSize; col++) {

            let block = document.createElement('div');
            block.classList.add('col');
            rows.appendChild(block)
        }
        grid.appendChild(rows);
    }
}

grid.addEventListener("mousedown", function (e) {
    mouseMove(e);
    grid.onmouseover = function (e) {
        mouseMove(e);
    }
});

grid.addEventListener("mouseup", function (e) {
    grid.onmouseover = null;
});

function mouseMove(e) {
    e.target.style.backgroundColor = `rgb(${random(255)},${random(255)},${random(255)})`;
}

function random(num) {
    return Math.floor(Math.random() * (num + 1));
}

updateGrid();