const PLAYEFIELD_COLUMNS = 10;
const PLAYEFIELD_ROWS = 20;

let playfield;

function generatePlayField() {
	for (let i = 0; i < PLAYEFIELD_ROWS * PLAYEFIELD_COLUMNS; i++) {
		const divEl = document.createElement("div");
		document.querySelector(".grid").append(divEl);
	}
}
generatePlayField();
