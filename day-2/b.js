const fs = require('fs');

const OUTCOMES_POINTS = {
  X: 0,
  Y: 3,
  Z: 6,
};

const MOVE_POINTS = {
  X: 1,
  Y: 2,
  Z: 3,
};

const STRATS = {
  LOSE: 'X',
  DRAW: 'Y',
  WIN: 'Z',
};

const DRAW_SCENARIO = { A: 'X', B: 'Y', C: 'Z' };
const WIN_SCENARIO = { A: 'Y', B: 'Z', C: 'X' };
const LOSE_SCENARIO = { A: 'Z', B: 'X', C: 'Y' };

fs.readFile('./day-2/input.txt', 'utf-8', (err, data) => {
  const puzzleStrategy = data.split('\r\n');

  let totalScore = 0;

  for (let i = 0; i < puzzleStrategy.length; i++) {
    const opponentMove = puzzleStrategy[i][0];
    const outcome = puzzleStrategy[i][2];

    const yourMove = getYourMove(opponentMove, outcome);

    totalScore += OUTCOMES_POINTS[outcome] + MOVE_POINTS[yourMove];
  }

  console.log(totalScore);
});

function getYourMove(opponentMove, outcome) {
  const isDraw = outcome === STRATS.DRAW;
  if (isDraw) {
    return DRAW_SCENARIO[opponentMove];
  }

  const isWin = outcome === STRATS.WIN;
  if (isWin) {
    return WIN_SCENARIO[opponentMove];
  }

  const isLose = outcome === STRATS.LOSE;
  if (isLose) {
    return LOSE_SCENARIO[opponentMove];
  }
}
