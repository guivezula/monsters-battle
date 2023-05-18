export const findLessCostPath = (board: number[][]): number => {
  const row = board.length;
  const col = board[0].length;

  let lessCost = new Array(row);

  for (let k = 0; k < row; k++) {
    lessCost[k] = new Array(col);
  }

  lessCost[0][0] = board[0][0];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let auxBoard = board[i][j];
      if (auxBoard === 0) {
        auxBoard = Number.MAX_SAFE_INTEGER;
      }

      if (i === 0 && j > 0) {
        lessCost[0][j] = lessCost[0][j-1] + auxBoard;
      } else if (j === 0 && i > 0) {
        lessCost[i][0] = lessCost[i-1][0] + auxBoard;
      } else if (i > 0 && j > 0) {
        lessCost[i][j] = Math.min(lessCost[i-1][j], lessCost[i][j-1]) + auxBoard;
      }
    }
  }

  for (let j = 1; j <= row; j++) {
    lessCost[0][j] = lessCost[0][j-1] + board[0][j];
  }

  console.log(lessCost);

  return lessCost[row - 1][col - 1] - board[row - 1][col - 1];
};
