const board = document.querySelector('#board');
const colors = ['#F7AC95', '#F49021', '#C35C5F', '#35354F', '#E32A28'];
const SQUARS_NUMBER = 600;

for (let i = 0; i < SQUARS_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #1d1d1d`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}