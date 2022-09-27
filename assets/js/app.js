const GAME_OPTIONS = {
    number_of_cards : 12,

}

// make grid
const board = document.createElement('div');
board.classList.add('sidebar');
// console.log(GAME_OPTIONS)
for (let i = 0; i < GAME_OPTIONS.number_of_cards; i++) {
    board = `
    <div class="game-list__item">
        <div class="game-list__card game-list__type1"></div>
    </div>
    `;
};