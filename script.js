let grid = document.querySelector('.grid');

let count = 0;
for (let row = 0; row < 16; row++) {
    let rows = document.createElement('div');
    rows.classList.add('row');
    for (let col = 0; col < 16; col++) {
        count++;

        let block = document.createElement('div');
        block.classList.add('col');
        // block.textContent = `${count}`;
        rows.appendChild(block)
    }
    grid.appendChild(rows);
}