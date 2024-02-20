const PLAYEFIELD_COLUMNS = 10;
const PLAYEFIELD_ROWS = 20;
const TETROMINO_NAMES = ["O"];

const TETROMINOES = {
	O: [
		[1, 1],
		[1, 1],
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
}

function generateTetromino() {
	const name = TETROMINO_NAMES[0];
	const matrix = TETROMINOES[name];

	tetromino = {
		name,
		matrix,
		row: 3,
		column: 5,
	};
}

generatePlayField();
generateTetromino();

const cells = document.querySelectorAll(".grid div");

function drawPlayField() {
	// cells[15].classList.add("O");
}

function drawTetromino() {
	const name = tetromino.name;
	const tetrominoMatrixSize = tetromino.matrix.length;

	for (let row = 0; row < tetrominoMatrixSize; row++) {
		for (let column = 0; column < tetrominoMatrixSize; column++) {
			const cellIndex = convertPositionToIndex(
				tetromino.row + row,
				tetromino.column + column
			);
			cells[cellIndex].classList.add("O");
		}
	}
}

drawTetromino();
drawPlayField();
