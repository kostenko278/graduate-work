const board = ['', '', '', '', '', '', '', '', ''];
        let currentPlayer = 'X';
        let gameEnded = false;

        const WINNING_COMBINATIONS = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        const boardElement = document.getElementById('board');
        const messageElement = document.getElementById('message');

        renderBoard();

        function renderBoard() {
            boardElement.innerHTML = '';
            board.forEach((cell, index) => {
                const cellElement = document.createElement('div');
                cellElement.classList.add('cell');
                cellElement.textContent = cell;
                cellElement.addEventListener('click', () => handleMove(index));
                boardElement.appendChild(cellElement);
            });
        }

        function handleMove(index) {
            if (gameEnded || board[index] !== '') {
                return;
            }

            board[index] = currentPlayer;
            renderBoard();

            if (checkWin(currentPlayer)) {
                messageElement.textContent = `Победил игрок ${currentPlayer}!`;
                gameEnded = true;
            } else if (board.every(cell => cell !== '')) {
                messageElement.textContent = 'Ничья!';
                gameEnded = true;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }

        function checkWin(player) {
            return WINNING_COMBINATIONS.some(combination => {
                return combination.every(index => board[index] === player);
            });
        }
document.getElementById("restartButton").addEventListener("click", function() {
    window.location.reload(); // Перезагружает страницу
});