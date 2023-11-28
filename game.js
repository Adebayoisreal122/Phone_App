var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  var currentPlayer = 'X';

  function makeMove(row, col) {
    if (board[row][col] === '') {
      board[row][col] = currentPlayer;
      document.getElementsByClassName('cell')[row * 3 + col].textContent = currentPlayer;

      if (checkWin()) {
        alert('Player ' + currentPlayer + ' wins!');
        resetBoard();
      } else if (checkDraw()) {
        alert('It\'s a draw!');
        resetBoard();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  function checkWin() {
    // Check rows
    for (var row = 0; row < 3; row++) {
      if (board[row][0] !== '' && board[row][0] === board[row][1] && board[row][0] === board[row][2]) {
        return true;
      }
    }

    // Check columns
    for (var col = 0; col < 3; col++) {
      if (board[0][col] !== '' && board[0][col] === board[1][col] && board[0][col] === board[2][col]) {
        return true;
      }
    }

    // Check diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      return true;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      return true;
    }

    return false;
  }

  function checkDraw() {
    for (var row = 0; row < 3; row++) {
      for (var col = 0; col < 3; col++) {
        if (board[row][col] === '') {
          return false;
        }
      }
    }
    return true;
  }

  function resetBoard() {
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];

    var cells = document.getElementsByClassName('cell');
    for (var i = 0; i < cells.length; i++) {
      cells[i].textContent = '';
    }

    currentPlayer = 'X';
  }