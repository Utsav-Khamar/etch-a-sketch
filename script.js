let grid = document.querySelector('.grid');


for (let row = 0; row < 16; row++) {
    let rows = document.createElement('div');
    rows.classList.add('row');
    for (let col = 0; col < 16; col++) {
        let block = document.createElement('div');
        block.classList.add('col');
        block.textContent = `${row} ${col}`;
        rows.appendChild(block)
    }
    grid.appendChild(rows);
}