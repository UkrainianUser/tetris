const PLAYEFIELD_COLUMNS = 10;
const PLAYEFIELD_ROWS = 20;
const TETROMINO_NAMES = ["O", "J", "I", "N"];

const TETROMINOES = {
	O: [
		[1, 1],
		[1, 1],
	],
	J: [
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 0],
	],
	I: [
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
	N: [
		[1, 0],
		[1, 1],
		[0, 1],
	],
};

function convertPositionToIndex(row, column) {
	return row * PLAYEFIELD_COLUMNS + column;
}

let playfield;
let tetromino;

function generatePlayField() {
	for (let i = 0; i < PLAYEFIELD_ROWS * PLAYEFIELD_COLUMNS; i++) {
		const divEl = document.createElement("div");
		document.querySelector(".grid").append(divEl);
	}

	playfield = new Array(PLAYEFIELD_ROWS)
		.fill()
		.map(() => new Array(PLAYEFIELD_COLUMNS).fill(0));
}

function generateTetromino() {
	const name = TETROMINO_NAMES[3];
	const matrix = TETROMINOES[name];

	tetromino = {
		name,
		matrix,
		row: 1,
		column: 4,
	};
}

generatePlayField();
generateTetromino();

const cells = document.querySelectorAll(".grid div");

function drawPlayField() {
	for (let row = 0; row < PLAYEFIELD_ROWS; row++) {
		for (let column = 0; column < PLAYEFIELD_COLUMNS; column++) {
			const name = playfield[row][column];
			const cellIndex = convertPositionToIndex(row, column);
			cells[cellIndex].classList.add(name);
		}
	}
}

function drawTetromino() {
	const name = tetromino.name;
	const tetrominoMatrixSize = tetromino.matrix.length;

	for (let row = 0; row < tetrominoMatrixSize; row++) {
		for (let column = 0; column < tetrominoMatrixSize; column++) {
			if (!tetromino.matrix[row][column]) continue;
			const cellIndex = convertPositionToIndex(
				tetromino.row + row,
				tetromino.column + column
			);
			cells[cellIndex].classList.add(name);
		}
	}
}

// drawTetromino();
// drawPlayField();

function draw() {
	cells.forEach((cell) => cell.removeAttribute("class"));
	drawTetromino();
	drawPlayField();
}
draw();

document.addEventListener("keydown", onKeyDown);
function onKeyDown(e) {
	switch (e.key) {
		case "ArrowDown":
			moveTetrominoDown();
			break;
		case "ArrowLeft":
			moveTetrominoLeft();
			break;
		case "ArrowRight":
			moveTetrominoRight();
			break;
	}
	draw();
}

function moveTetrominoDown() {
	tetromino.row += 1;
}
function moveTetrominoLeft() {
	tetromino.column -= 1;
}
function moveTetrominoRight() {
	tetromino.column += 1;
}
