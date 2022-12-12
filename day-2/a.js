const fs = require('fs');

const OUTCOMES = {
  DRAW: 'DRAW',
  WIN: 'WIN',
  LOSE: 'LOSE',
};

const points = {
  X: 1,
  Y: 2,
  Z: 3,
};

const DRAW_SCENARIO = ['A X', 'B Y', 'C Z'];
const WIN_SCENARIO = ['A Y', 'B Z', 'C X'];
const LOSE_SCENARIO = ['A Z', 'B X', 'C Y'];

fs.readFile('./day-2/input.txt', 'utf-8', (err, data) => {
  const puzzleStrategy = data.split('\r\n');

  let totalScore = 0;

  for (let i = 0; i < puzzleStrategy.length; i++) {
    const opponentMove = puzzleStrategy[i][0];
    const yourMove = puzzleStrategy[i][2];

    const outcome = checkOutcome(opponentMove, yourMove);

    if (outcome === OUTCOMES.DRAW) {
      totalScore += 3 + points[yourMove];
    }

    if (outcome === OUTCOMES.WIN) {
      totalScore += 6 + points[yourMove];
    }

    if (outcome === OUTCOMES.LOSE) {
      totalScore += 0 + points[yourMove];
    }
  }

  console.log(totalScore);
});

function checkOutcome(opponentMove, yourMove) {
  const isDraw = DRAW_SCENARIO.includes(`${opponentMove} ${yourMove}`);
  if (isDraw) {
    return OUTCOMES.DRAW;
  }

  const isWin = WIN_SCENARIO.includes(`${opponentMove} ${yourMove}`);
  if (isWin) {
    return OUTCOMES.WIN;
  }

  const isLose = LOSE_SCENARIO.includes(`${opponentMove} ${yourMove}`);
  if (isLose) {
    return OUTCOMES.LOSE;
  }
}
