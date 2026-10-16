let grid = document.querySelector('.grid');

let count = 0;
for (let row = 0; row < 32; row++) {
    let rows = document.createElement('div');
    rows.classList.add('row');
    for (let col = 0; col < 32; col++) {
        count++;

        let block = document.createElement('div');
        block.classList.add('col');
        rows.appendChild(block)
    }
    grid.appendChild(rows);
}

function mouseMove(e) {
    e.target.style.backgroundColor = `rgb(${random(255)},${random(255)},${random(255)})`;
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

function random(num) {
    return Math.floor(Math.random() * (num + 1));
}