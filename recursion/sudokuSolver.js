function solveSudoku(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === '.') {
  
          for (let c = 1; c <= 9; c++) {
            let char = c.toString();
            if (isValid(board, i, j, char)) {
              board[i][j] = char;
  
              if (solveSudoku(board)) {
                return true;
              } else {
                board[i][j] = '.';
              }
            }
          }
  
          return false;
        }
      }
    }
    return true;
  }
  
  function isValid(board, row, col, c) {
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === c) return false;
  
      if (board[row][i] === c) return false;
  
      if (board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + i % 3] === c) return false;
    }
    return true;
  }
  
  function main() {
    let board = [
      ['9', '5', '7', '.', '1', '3', '.', '8', '4'],
      ['4', '8', '3', '.', '5', '7', '1', '.', '6'],
      ['.', '1', '2', '.', '4', '9', '5', '3', '7'],
      ['1', '7', '.', '3', '.', '4', '9', '.', '2'],
      ['5', '.', '4', '9', '7', '.', '3', '6', '.'],
      ['3', '.', '9', '5', '.', '8', '7', '.', '1'],
      ['8', '4', '5', '7', '9', '.', '6', '1', '3'],
      ['.', '9', '1', '.', '3', '6', '.', '7', '5'],
      ['7', '.', '6', '1', '8', '5', '4', '.', '9']
    ];
  
    solveSudoku(board);
  
    for (let i = 0; i < 9; i++) {
      console.log(board[i].join(' '));
    }
  }
  
  main();
  