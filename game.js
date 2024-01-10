let currentPlayer = 'X';
let playerXName = '';
let playerOName = '';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function startGame() {
    playerXName = document.getElementById('playerX').value || 'Player X';
    playerOName = document.getElementById('playerO').value || 'Player O';


    document.getElementById('playerX').value = ""
    document.getElementById('playerO').value = ""
    btnStart.style.display = "none"
    disp.innerHTML = `<p>Player X is: ${playerXName} </p>
    <p>Player O is: ${playerOName} </p>`
}

function handleClick(index) {
    if (gameActive && board[index] === '') {
        board[index] = currentPlayer;
        document.getElementById('board').children[index].innerText = currentPlayer;
        checkWinner();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            const winnerName = currentPlayer === 'X' ? playerXName : playerOName;
            document.getElementById('winMessage').innerText = `${winnerName} wins!`;
            gameActive = false;
            return;
        }
    }

    if (!board.includes('')) {
        document.getElementById('winMessage').innerText = 'It\'s a draw!';
        gameActive = false;
    }
}


function resetGame() {
    currentPlayer = 'X';
    playerXName = '';
    playerOName = '';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    document.getElementById('playerX').removeAttribute('disabled');
    document.getElementById('playerO').removeAttribute('disabled');

    document.getElementById('playerX').value = '';
    document.getElementById('playerO').value = '';
    // document.getElementById('playerX').removeAttribute('placeholder');
    // document.getElementById('playerO').removeAttribute('placeholder');

    const Start = document.getElementById('btnStart');
    Start.style.display = "block";

    const cells = document.getElementById('board').children;
    for (const cell of cells) {
        cell.innerText = '';
    }

    document.getElementById('winMessage').innerText = '';
    document.getElementById('disp').innerText = '';

    const dip = document.getElementById('dip');
    dip.innerHTML = `<p>Game has been reset.</p>`;
    setTimeout(() => {
        dip.style.display = "none";
      }, 3000);
}

