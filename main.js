let grid = document.querySelector('#grid');

createGrid(15, 15);

document.getElementById('create-grid-btn').addEventListener('click', () => {
  grid.innerHTML = '';
  let height = document.getElementById('height-val-input');
  let width = document.getElementById('width-val-input');
  let color = document.getElementById('color-picker');
  createGrid(height.value, width.value, color.value);
});

function createGrid(height, width, color) {
  for (let i = 0; i < height; i++) {
    let horizontalContainer = document.createElement('div');
    horizontalContainer.style.display = 'flex';
    for (let i = 0; i < width; i++) {
      let gridDiv = document.createElement('div');
      gridDiv.classList.add('grid-square');
      gridDiv.style.minHeight = '10px';
      gridDiv.style.minWidth = '10px';
      gridDiv.addEventListener('mouseover', () => {
        gridDiv.style.backgroundColor = color;
      });
      horizontalContainer.appendChild(gridDiv);
    }
    grid.appendChild(horizontalContainer);
  }
}
